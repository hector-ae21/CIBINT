# Fundamentos y ciclo de inteligencia

## Subtemas

- Concepto de ciberinteligencia: dato, información e inteligencia
- El ciclo de inteligencia: fases y retroalimentación
- Tipos de inteligencia y rol del analista

## Contexto

Antes de tocar cualquier herramienta OSINT, un analista trabaja con un problema muy distinto al de la ciberseguridad puramente técnica: no se trata de encontrar una vulnerabilidad, sino de **responder una pregunta con la información disponible, bajo incertidumbre y plazos reales**. Un CERT que necesita saber si una campaña de phishing detectada forma parte de un actor conocido, o una consultora que debe evaluar el riesgo reputacional de un cliente antes de una operación corporativa, están haciendo el mismo ejercicio: convertir datos dispersos en una respuesta útil para quien tiene que tomar una decisión.

Ese ejercicio no es improvisado: sigue un proceso repetible, el **ciclo de inteligencia**, que estructura todo lo que se verá en el resto de la asignatura.

## Concepto clave

| Término | Significado en este contexto |
|---|---|
| Dato | Un hecho aislado, sin interpretar (una IP, un nombre, una fecha) |
| Información | Datos ya organizados o correlacionados, pero sin valorar |
| Inteligencia | Información analizada, contextualizada y orientada a una decisión concreta |

> Ciberinteligencia = aplicar el ciclo de inteligencia a preguntas del dominio ciber (amenazas, actores, infraestructuras, superficie de exposición).

El **ciclo de inteligencia** describe las fases por las que pasa una necesidad de información hasta convertirse en un producto útil:

![Ciclo de inteligencia](https://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://raw.githubusercontent.com/hector-ae21/CIBINT/main/diagramas/01-ciclo-de-inteligencia.puml)

| Fase | Pregunta que responde |
|---|---|
| Dirección y planificación | ¿Qué necesitamos saber y para qué decisión? |
| Obtención | ¿Dónde está la información y cómo la conseguimos? |
| Procesamiento | ¿Cómo convertimos datos en bruto en algo utilizable? |
| Análisis y producción | ¿Qué significa esto realmente y qué implicaciones tiene? |
| Difusión | ¿A quién se lo entregamos y en qué formato? |
| Retroalimentación | ¿Respondió esto la pregunta original? ¿Qué falta? |

## Cómo se aplica

El ciclo no es lineal en la práctica: una difusión suele generar nuevas preguntas de dirección, y el análisis frecuentemente obliga a volver a la fase de obtención. En esta asignatura cada unidad se puede situar dentro de una o varias fases del ciclo:

| Unidad | Fase(s) del ciclo donde encaja |
|---|---|
| OSINT (personas/organizaciones, técnico) | Obtención |
| Fuentes cerradas y dark web | Obtención |
| Threat Intelligence y MITRE ATT&CK | Procesamiento / Análisis |
| Análisis y elaboración de informes | Análisis y producción / Difusión |

El trabajo práctico del curso (recogido en el repositorio de cada convocatoria) parte siempre de un requerimiento de inteligencia concreto y recorre el ciclo completo, no solo la fase de obtención.

## Enlaces relacionados

- [02 · Marco legal, ética y OPSEC del analista](../02-marco-legal-etica-y-opsec/README.md) — qué límites operan sobre la fase de obtención
- [07 · Análisis y elaboración de informes de inteligencia](../07-analisis-y-elaboracion-de-informes/README.md) — cómo se materializan las fases de análisis y difusión
- [Recursos de esta unidad](recursos.md)

## Para profundizar

Ver [`recursos.md`](recursos.md) y las lecturas en [`bibliografia/01-fundamentos-y-ciclo-de-inteligencia/`](../../bibliografia/01-fundamentos-y-ciclo-de-inteligencia/).
