# Operación Prisma · De la pregunta a la búsqueda

El [enunciado](README.md) pide apoyar una decisión de compras. Antes de revisar perfiles hay que decidir qué queremos comprobar y con qué límites.

## Ejemplo resuelto

| Paso | Aplicación |
|---|---|
| Pregunta | ¿Qué canal consta en la relación comercial previa? |
| Fuente elegida | PRI-F04 de [fuentes.csv](datos/fuentes.csv) |
| Observación | El documento OC-18 utiliza `nayade.example` |
| Límite | Es documentación previa; no excluye un cambio posterior |
| Siguiente comprobación | Comparar avisos conocidos con el canal propuesto |

`site:nayade.example "canales"` expresa una consulta posible, pero no se ejecuta: el dominio es ficticio. Primero se preparan preguntas y consultas sobre papel y se localizan respuestas en el expediente. La búsqueda real llega después de elegir herramientas.

## Trabajo guiado

Completa el plan sin salir del requerimiento:

| Pregunta | Muestra que revisarías | Consulta de ejemplo si fuese un objetivo autorizado | Qué permitiría concluir |
|---|---|---|---|
| ¿Qué perfil profesional enlaza la empresa? | | | |
| ¿Qué origen tiene el anuncio del cambio? | | | |
| ¿La imagen acredita una reunión reciente? | | | |
| ¿Qué aporta la referencia societaria? | | | |

Después clasifica las acciones:

| Acción propuesta | ¿Contribuye al requerimiento? | ¿Está autorizada en el caso? | Alternativa o motivo del descarte |
|---|---|---|---|
| Revisar PRI-F01 y PRI-P01 | | | |
| Buscar familiares de la firmante | | | |
| Enviar un mensaje a PRI-P03 | | | |
| Comparar PRI-S01 con PRI-S04 | | | |
| Registrar una fuente que contradice la hipótesis inicial | | | |

## Comprobación

El plan debe conservar al menos una fuente que pueda contradecir la petición. Las acciones de contacto y las búsquedas personales quedan fuera del alcance. Anota una consulta o revisión sin resultado útil: también forma parte de la [bitácora](../../../../plantillas/plantilla-bitacora-investigacion.md).

Continúa en [Elección de herramientas](02-eleccion-de-herramientas.md). La explicación general está en [Metodología de footprinting](../../README.md#fundamentos-de-osint-y-metodología-de-footprinting).
