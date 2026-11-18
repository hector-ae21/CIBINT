# Operación Umbral · Diccionario de datos

[Situación del caso](../README.md#situación) · [Volver al Tema 5](../../../README.md)

Todos los datos son ficticios. Las tablas no proceden de una filtración y no contienen secretos. Los identificadores no son hashes de correos reales ni deben enriquecerse con datos de personas.

## Archivos y unidades

| Archivo | Unidad | Campos principales |
|---|---|---|
| [fuentes.csv](fuentes.csv) | Ficha de fuente UMB-F | Tipo, acceso, fecha del documento, origen de la afirmación, contenido, uso permitido y limitación |
| [observaciones.csv](observaciones.csv) | Observación UMB-R | Cuenta, origen, categoría, fecha declarada del incidente, primera observación, fuente y estado de verificación |
| [cuentas.csv](cuentas.csv) | Cuenta del inventario autorizado | Función, estado al corte, responsable propuesto y revisión |
| [cronologia.csv](cronologia.csv) | Hito UMB-C | Fecha UTC, descripción y fuente |
| [rango-simulado.txt](rango-simulado.txt) | Sufijo SHA-1 y recuento simulado | Líneas `SUFIJO:RECUENTO`; la comparación utiliza el prefijo de la demostración local |

Las filas de observaciones no representan necesariamente cuentas distintas, personas distintas ni incidentes independientes. Para eliminar duplicados debe explicarse la unidad de recuento y la clave utilizada. Las dos exportaciones no deben sumarse sin esa revisión.

## Referencias y categorías

- `H23-01` identifica el origen histórico descrito en UMB-F06. No es una contraseña ni el nombre de un servicio real.
- `PUB-26` identifica la publicación descrita por UMB-F02. No confirma el volumen anunciado ni la fecha del incidente.
- `correo_y_hash` indica una categoría mencionada por la fuente. No se entrega ningún correo o hash de contraseña.
- `cookie_sesion` y `clave_api` indican categorías declaradas, sin valores ni prueba de que sigan siendo válidos.
- `correo_declarado` no confirma que exista una cuenta de Nácar con ese identificador.
- `no_consta` es información pendiente, no la fecha de consulta ni ausencia de incidente.

## Fechas y alcance

La fecha de incidente de las observaciones históricas tiene precisión de día. La hora `00:00:00Z` de UMB-C01 solo permite ordenar la tabla: no afirma una hora de intrusión conocida. Las demás horas tienen la precisión indicada dentro del supuesto docente. Se trabaja en UTC y con corte el 18 de noviembre de 2026 a las 12:00.

`primera_observacion_utc` corresponde a cada proveedor y no equivale al comienzo del incidente. El inventario es el resumen autorizado disponible; no se presenta como censo completo de todas las cuentas que una persona pudiera utilizar.

Los archivos CSV usan UTF-8 y no contienen comas dentro de las celdas. El script local comprueba este formato sencillo. Las huellas de los archivos pertenecen al paquete docente, no a originales forenses.

[Volver al caso](../README.md) · [Registro de práctica](../registro-practica.md)
