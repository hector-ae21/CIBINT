# Operación Prisma · Enunciado

Caso ficticio para trabajar el Tema 3. Las organizaciones, personas, cuentas y hechos son inventados. Los dominios pertenecen al espacio `.example`, reservado para documentación; las direcciones de las muestras son referencias, no enlaces que haya que visitar.

## Situación

Velaria Eventos utiliza los servicios de Náyade Servicios Digitales desde hace dos años. El lunes, compras recibe una petición que solicita cambiar el canal para tramitar pagos y aporta nuevas instrucciones. La firma dice «Marta Vega, responsable de cuentas de Náyade». La petición enlaza a `nayade-gestion.example` y al perfil `@marta_nayade_pagos`.

La relación comercial previa utiliza `nayade.example`. El responsable de compras conoce ese dominio, pero no el nuevo. Además, ha recibido capturas de un anuncio sobre el cambio y de dos publicaciones que lo repiten.

> «Antes de tramitar el cambio, necesito saber qué podemos verificar con la información disponible y qué debe quedar pendiente.»

## Requerimiento

| Elemento | Encargo |
|---|---|
| Destinatario | Responsable de compras de Velaria |
| Decisión | Tramitar el cambio o mantenerlo pendiente de comprobación |
| Objeto | Relación entre proveedor, firmante, perfil y canal propuesto |
| Corte de información | 21 de septiembre de 2026, 09:30 UTC |
| Producto | Nota de hasta 200 palabras con evidencias, limitaciones y próxima comprobación |
| Alcance | Expediente ficticio; obtención posterior sobre referencias públicas delimitadas |
| Exclusiones | Identificación civil de cuentas, vida personal, contacto con perfiles y búsquedas fuera de los objetivos definidos |

## Material disponible

| Referencia | Muestra | Contenido |
|---|---|---|
| PRI-ENC | [peticion.txt](datos/peticion.txt) | Resumen de la petición; no incluye datos de pago |
| PRI-F | [fuentes.csv](datos/fuentes.csv) | Documentación conocida, página de equipo, evento y referencias societarias |
| PRI-P | [perfiles.csv](datos/perfiles.csv) | Cuatro perfiles y los datos profesionales relevantes |
| PRI-S | [publicaciones.csv](datos/publicaciones.csv) | Anuncio, republicaciones, aviso corporativo e imagen anterior |
| PRI-DIC | [Diccionario de datos](datos/README.md) | Campos y límites de las muestras |
| PRI-OBT | [Obtención con herramientas](03-obtencion-con-herramientas.md) | Consultas reales y registro de consultas y evidencias |

## Condiciones del análisis

- El análisis de Velaria y Náyade utiliza el expediente. Los textos son resúmenes docentes, no copias completas de publicaciones.
- La obtención posterior incluye consultas sobre referencias públicas. Cada resultado conserva su objetivo; no se presenta información de INCIBE como evidencia del proveedor ficticio.
- Una relación comercial conocida aporta contexto; no es una fuente abierta. Se distingue de las muestras públicas al citarla.
- Los perfiles con nombres coincidentes se mantienen separados hasta que exista evidencia suficiente.
- No se presume que la petición sea auténtica ni que se haya cometido un delito.
- La recomendación puede ser mantener el cambio pendiente. No hace falta identificar quién controla la cuenta.
- La comprobación por un canal conocido se propone al responsable de compras; no la ejecuta el estudiante.

## Apartados del caso

| Apartado | Propósito |
|---|---|
| [0 · Uso ético y perspectiva del atacante](00-uso-etico-y-perspectiva-del-atacante.md) | finalidad y límites |
| [1 · Pregunta y plan de búsqueda](01-pregunta-y-busqueda.md) | preparar consultas sin ejecutarlas |
| [2 · Elección de herramientas](02-eleccion-de-herramientas.md) | comparar opciones con el expediente |
| [3 · Obtención con herramientas](03-obtencion-con-herramientas.md) | aplicar la elección y registrar resultados |
| [4 · Identidad y huella profesional](04-identidad-y-huella.md) | separar candidatos y corroborar |
| [5 · Publicaciones y contexto](05-publicaciones-y-contexto.md) | origen, fechas y dependencias |
| [6 · Organización y valoración](06-organizacion-y-valoracion.md) | Cierre: contrastar explicaciones y responder a compras |

Las consultas públicas conservan su objetivo real y no se atribuyen a la empresa ficticia.

La explicación general está en el [Tema 3](../../README.md).
