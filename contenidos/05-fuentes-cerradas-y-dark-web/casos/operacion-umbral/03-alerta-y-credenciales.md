# Umbral · Contraste de la alerta y consulta por prefijo

**Cuándo hacerlo:** después de [Búsqueda defensiva de exposición de credenciales](../../README.md#búsqueda-defensiva-de-exposición-de-credenciales), incluidas las explicaciones de fechas y consulta por rango.

[Situación y materiales](README.md#situación) · [Definiciones](../../definiciones.md)

## Objeto de la práctica

Valorar una alerta sin adquirir ni probar credenciales. Se utilizan [observaciones.csv](datos/observaciones.csv), [cuentas.csv](datos/cuentas.csv), [cronologia.csv](datos/cronologia.csv) y el [diccionario](datos/README.md).

## Recuento y contraste

1. Cuenta filas de observaciones e identificadores de cuenta distintos. Explica por qué ninguno equivale a personas afectadas confirmadas.
2. Identifica repeticiones utilizando la clave `cuenta_id + referencia_origen + categoria`. Conserva la referencia de cada fila, aunque no la sumes como un hallazgo nuevo.
3. Relaciona cada cuenta con el inventario y distingue activa, deshabilitada o sin correspondencia en el resumen disponible.
4. Compara fecha del incidente y primera observación. ¿Qué parte de la información apunta a 2023? ¿Qué fecha falta en PUB-26?
5. Valora la independencia de UMB-F02, F03 y F04 para cada afirmación. No basta con que los nombres de los proveedores sean diferentes.
6. ¿Permiten estas filas confirmar las «18.400 cuentas actuales»? ¿Qué medida sí podría justificarse para A-04 y SVC-01 sin afirmar que sus secretos funcionan?

## Demostración local por prefijo

Desde esta carpeta, con Node.js:

```powershell
node comprobar-expediente.mjs --demo-prefijo
```

El programa utiliza un valor de prueba publicado, calcula su SHA-1 y compara una respuesta local simulada. No acepta contraseñas personales ni realiza peticiones a HIBP.

Explica:

- qué parte del hash seleccionaría el rango y qué parte se compara localmente;
- qué representa el recuento simulado y cómo deben tratarse las filas con cero;
- por qué el resultado no acredita la exposición de una cuenta de Nácar;
- por qué no debe interpretarse el uso de SHA-1 en esta demostración como una recomendación para almacenar contraseñas.

## Resultado

Incorpora al [registro](registro-practica.md) el recuento con su unidad, las repeticiones, la cronología y la conclusión de alcance. Las categorías `cookie_sesion` y `clave_api` se conservan como categorías declaradas, sin inventar su contenido o validez.

**Al terminar:** [continuar el Tema 5: Riesgos legales y operacionales específicos](../../README.md#riesgos-legales-y-operacionales-específicos).
