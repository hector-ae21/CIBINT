# Operación Linde · Diccionario de datos

Las muestras reflejan la situación del lunes a última hora. Son material docente: no contienen datos reales de ninguna persona ni de ninguna organización.

## `peticiones.csv`

| Campo | Significado |
|---|---|
| `peticion_id` | Identificador de la petición (`P1`–`P5`) |
| `area` | Área de la empresa que la formula |
| `formulacion_literal` | Lo que se dijo en la reunión, sin reformular |
| `momento` | Día y hora aproximados |

Una petición expresa lo que alguien quiere. No es todavía un encargo que el equipo pueda aceptar tal cual.

## `acciones-propuestas.csv`

| Campo | Significado |
|---|---|
| `accion_id` | Identificador de la acción (`OB01`–`OB14`) |
| `propuesta_por` | Quién la plantea |
| `descripcion` | Qué se pretende hacer |
| `sistema_o_fuente` | Dónde se haría: un sistema propio, una fuente pública, un sistema ajeno o una autoridad |
| `afecta_a_personas` | Si la acción implica tratar datos de personas identificables |

La lista mezcla a propósito acciones adecuadas, acciones que necesitan condiciones y acciones que no deben realizarse. Que una acción esté en la lista no significa que esté autorizada.

## `bitacora-borrador.csv`

| Campo | Significado |
|---|---|
| `entrada_id` | Identificador de la entrada (`B01`–`B07`) |
| `fecha_hora` | Momento de la acción, cuando consta |
| `autor` | Iniciales de quien la registra |
| `proposito` | Para qué se hizo |
| `fuente` | Dónde se hizo |
| `accion` | Qué se hizo |
| `resultado` | Qué se obtuvo |
| `siguiente_paso` | Qué pensaba hacer después |

La bitácora se escribió deprisa durante el primer día. Contiene errores de registro y, sobre todo, decisiones que no deberían haberse tomado. Se utiliza en el apartado [4 · Incidente y trazabilidad](../04-incidente-y-trazabilidad.md).

La entrada `B05` indica entre corchetes que se copió un dato sensible. El dato no se reproduce en el material, igual que no debería reproducirse en ninguna bitácora real.
