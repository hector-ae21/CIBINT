# Operación Delta · Enunciado

[Volver al Tema 4](../../README.md)

Caso ficticio para trabajar el Tema 4. Dársena y los proveedores mencionados son inventados. Los dominios `.example` y los rangos IP de las muestras están reservados para documentación. No representan servicios que haya que consultar.

## Situación

Dársena Logística quiere revisar su exposición antes de renovar el servicio de alojamiento. Sistemas facilita un inventario breve. Una revisión de fuentes públicas aporta nombres y servicios que no coinciden del todo con él: un portal de legado, un nombre de pruebas y una observación de acceso remoto.

> «Necesito una lista de lo que debemos comprobar primero, con sus referencias y sin incluir los sistemas de otros clientes del proveedor.»

## Requerimiento

| Elemento | Encargo |
|---|---|
| Destinatario | Responsable de sistemas de Dársena |
| Decisión | Qué activos validar primero y quién debe revisarlos |
| Objeto | Exposición de nombres bajo `darsena.example` y relaciones incluidas en el expediente |
| Corte de información | 21 de septiembre de 2026, 10:00 UTC |
| Producto | Inventario contrastado y nota de hasta 250 palabras con tres prioridades |
| Alcance | Expediente ficticio; obtención posterior sobre referencias públicas delimitadas |
| Exclusiones | Conexiones a servicios ajenos fuera de las consultas definidas, escaneos, nuevos escaneos de terceros, pruebas de acceso y explotación |

## Material disponible

| Referencia | Muestra | Contenido |
|---|---|---|
| DEL-I | [inventario.csv](datos/inventario.csv) | Activos declarados, funciones y responsables |
| DEL-R | [registro.csv](datos/registro.csv) | Datos de registro simulados de dominio y rango |
| DEL-D | [dns.csv](datos/dns.csv) | Observaciones DNS actuales e históricas |
| DEL-C | [certificados.csv](datos/certificados.csv) | Nombres y fechas de entradas CT simuladas |
| DEL-S | [servicios.csv](datos/servicios.csv) | Observaciones de servicios ya indexados |
| DEL-H | [respuesta-http.txt](datos/respuesta-http.txt) | Respuesta parcial aportada del portal de proveedores |
| DEL-DIC | [Diccionario de datos](datos/README.md) | Significado y límites de las muestras |

## Condiciones del análisis

- Los índices A y B son fuentes ficticias. Simulan datos que podrían aparecer en un motor de indexación; no son resultados auténticos de Shodan ni Censys.
- La obtención posterior incluye consultas de RDAP, DNS, CT e índices existentes. No se realizan consultas a los dominios ficticios del expediente.
- Los resultados públicos se registran con su objetivo real; no se presentan como observaciones de Dársena.
- Un dato reciente no equivale a una comprobación actual. Se respeta la fecha de cada observación.
- Un activo sin inventariar se clasifica como candidato hasta que se confirme su relación.
- Las comprobaciones internas se proponen al responsable; el estudiante no las ejecuta.

## Apartados del caso

Los ejercicios están en archivos separados. El orden de lectura lo marca el tema: se abre un ejercicio después de la explicación indicada y, al terminar, se regresa al apartado siguiente. El índice siguiente marca el recorrido de estudio.

| Orden de lectura | Ejercicio | Cuándo abrirlo |
|---|---|---|
| 1 | [Perspectiva del atacante](00-perspectiva-del-atacante.md) | Después de [Mirar la exposición desde el lado del atacante](../../README.md#mirar-la-exposición-desde-el-lado-del-atacante) |
| 2 | [Alcance e inventario](01-alcance-e-inventario.md) | Después de [Footprinting técnico: construir el mapa externo](../../README.md#footprinting-técnico-construir-el-mapa-externo) |
| 3 | [Registro, DNS y certificados](03-registro-dns-y-certificados.md) | Después de [WHOIS, DNS y certificados](../../README.md#whois-dns-y-certificados) |
| 4 | [Servicios indexados](05-servicios-indexados.md) | Después de [Motores de indexación de dispositivos expuestos](../../README.md#motores-de-indexación-de-dispositivos-expuestos) |
| 5 | [Tecnologías y prioridades](06-tecnologias-y-prioridades.md) | Después de [Fingerprinting de tecnologías y servicios](../../README.md#fingerprinting-de-tecnologías-y-servicios) |
| 6 | [Elección de herramientas](02-eleccion-de-herramientas.md) | Después de [Herramientas disponibles y criterios de elección](../../README.md#herramientas-disponibles-y-criterios-de-elección) |
| 7 | [Obtención con herramientas](04-obtencion-con-herramientas.md) | Después de [De la elección a la obtención](../../README.md#de-la-elección-a-la-obtención) |

[Volver al Tema 4](../../README.md) · [Definiciones de este tema](../../definiciones.md)
