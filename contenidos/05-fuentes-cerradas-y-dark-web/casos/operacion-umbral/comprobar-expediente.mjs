// Material docente ficticio. Solo lee archivos locales; no consulta servicios externos.
// node comprobar-expediente.mjs                 Comprueba datos y ambas huellas.
// node comprobar-expediente.mjs --demo-prefijo  Demostracion local con valor de prueba.
// node comprobar-expediente.mjs --generar-huellas  Mantenimiento tras revisar cambios.
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, relative, sep } from 'node:path';
import assert from 'node:assert/strict';

const root = fileURLToPath(new URL('.', import.meta.url));
const mode = process.argv[2] ?? '--verificar';
assert.ok(process.argv.length <= 3 && ['--verificar', '--demo-prefijo', '--generar-huellas'].includes(mode),
  'Uso: node comprobar-expediente.mjs [--verificar|--demo-prefijo|--generar-huellas]');

function csv(name) {
  const lines = readFileSync(new URL(`datos/${name}`, import.meta.url), 'utf8').trim().split(/\r?\n/);
  const keys = lines.shift().split(',');
  assert.equal(new Set(keys).size, keys.length, `Encabezados repetidos: ${name}`);
  return lines.map(line => {
    const cells = line.split(','); // Las muestras no contienen comas dentro de las celdas.
    assert.equal(cells.length, keys.length, `Columnas incorrectas: ${name}`);
    return Object.fromEntries(keys.map((key, index) => [key, cells[index]]));
  });
}

function rangeDemo() {
  // No acepta entradas personales: este valor esta publicado para la demostracion.
  const value = 'Solo-para-docencia-2026!';
  const digest = createHash('sha1').update(value, 'utf8').digest('hex').toUpperCase();
  const lines = readFileSync(new URL('datos/rango-simulado.txt', import.meta.url), 'utf8').trim().split(/\r?\n/);
  const suffixes = new Map();
  for (const line of lines) {
    assert.match(line, /^[A-F0-9]{35}:\d+$/, 'Respuesta local de rango incorrecta');
    const [suffix, count] = line.split(':');
    assert.ok(!suffixes.has(suffix), 'Sufijo repetido en el ejemplo');
    suffixes.set(suffix, Number(count));
  }
  const count = suffixes.get(digest.slice(5)) ?? 0;
  assert.equal(count, 7, 'El ejemplo local debe corresponder al valor de prueba');
  return { value, prefix: digest.slice(0, 5), suffix: digest.slice(5), count };
}

if (mode === '--demo-prefijo') {
  const demo = rangeDemo();
  console.log('DEMOSTRACION LOCAL: valor inventado; respuesta simulada; sin conexiones.');
  console.log(`Valor de prueba publicado: ${demo.value}`);
  console.log(`Prefijo que seleccionaria el rango: ${demo.prefix}`);
  console.log(`Sufijo comparado localmente: ${demo.suffix}`);
  console.log(`Coincidencias declaradas por la muestra simulada: ${demo.count}`);
  console.log('No es una consulta a HIBP ni prueba de exposicion de una persona o cuenta.');
  process.exit(0);
}

const sources = csv('fuentes.csv');
const observations = csv('observaciones.csv');
const accounts = csv('cuentas.csv');
const timeline = csv('cronologia.csv');

function identifiers(rows, key) {
  const ids = new Set(rows.map(row => row[key]));
  assert.equal(ids.size, rows.length, `Identificador repetido: ${key}`);
  assert.ok(!ids.has('') && !ids.has(undefined), `Identificador vacio: ${key}`);
  return ids;
}

const sourceIds = identifiers(sources, 'fuente_id');
identifiers(observations, 'registro_id');
identifiers(accounts, 'cuenta_id');
identifiers(timeline, 'evento_id');
for (const row of [...observations, ...timeline]) assert.ok(sourceIds.has(row.fuente_id), 'Fuente UMB desconocida');
let previous = -Infinity;
for (const row of timeline) {
  const instant = Date.parse(row.fecha_hora_utc);
  assert.ok(Number.isFinite(instant) && instant >= previous, 'Cronologia incorrecta o desordenada');
  assert.ok(instant <= Date.parse('2026-11-18T12:00:00Z'), 'Hito posterior al corte');
  previous = instant;
}
for (const row of observations) {
  assert.ok(['H23-01', 'PUB-26'].includes(row.referencia_origen), 'Origen no reconocido');
  assert.ok(['correo_y_hash', 'cookie_sesion', 'correo_declarado', 'clave_api'].includes(row.categoria), 'Categoria no reconocida');
  assert.ok(Number.isFinite(Date.parse(row.primera_observacion_utc)), 'Fecha de observacion incorrecta');
}
assert.ok(accounts.every(row => ['activa', 'deshabilitada'].includes(row.estado_al_corte)), 'Estado de cuenta no reconocido');
rangeDemo();
console.log('Formatos, identificadores, referencias, cronologia y demostracion local: correctos.');

const manifests = new Map([['sha256', 'SHA256SUMS.txt'], ['md5', 'MD5SUMS.txt']]);
const excluded = new Set(manifests.values());
function listFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const absolute = join(directory, entry.name);
    const name = relative(root, absolute).split(sep).join('/');
    assert.ok(!entry.isSymbolicLink(), `No se admiten enlaces simbolicos: ${name}`);
    if (entry.isDirectory()) return listFiles(absolute);
    assert.ok(entry.isFile() && !/[\r\n]/.test(name), 'Archivo no admitido');
    return excluded.has(name) ? [] : [name];
  });
}
const files = listFiles(root).sort();
const contents = new Map(files.map(name => [name, readFileSync(join(root, name))]));
for (const [algorithm, manifest] of manifests) {
  const expected = files.map(name => `${createHash(algorithm).update(contents.get(name)).digest('hex')}  ${name}`).join('\n') + '\n';
  if (mode === '--generar-huellas') writeFileSync(join(root, manifest), expected, 'utf8');
  else assert.equal(readFileSync(join(root, manifest), 'utf8').replace(/\r\n/g, '\n'), expected,
    `${manifest}: revisar cambios de archivos o contenido antes de regenerar`);
  console.log(`${manifest}: ${files.length} archivos ${mode === '--generar-huellas' ? 'registrados' : 'verificados'}`);
}
console.log('Las comprobaciones no autentican el relato ni sustituyen el analisis del caso.');
