# Operación Linde · Evaluación de las acciones

Con el alcance definido, el equipo revisa las catorce acciones que se han propuesto durante la mañana. Cada una se examina con las tres preguntas del tema: si es lícita, si es proporcionada y si es segura para la investigación.

## Cuatro decisiones posibles

| Decisión | Cuándo se aplica |
|---|---|
| **Adecuada** | Es lícita, necesaria para el requerimiento y no expone la investigación |
| **Adecuada con condiciones** | Puede hacerse si se cumplen requisitos concretos: consulta previa, minimización, participación de otra área |
| **No corresponde al equipo** | Puede ser legítima, pero la debe realizar otra persona o institución |
| **Descartada** | Es ilícita, desproporcionada o pone en riesgo la investigación o a terceros |

## Ejemplo resuelto

Cuatro de las acciones, una de cada tipo:

| Acción | Decisión | Por qué |
|---|---|---|
| **OB03** · Consultar en fuentes pasivas si existen dominios parecidos a `orvalia.example` | Adecuada | Responde a una pregunta del requerimiento (¿se prepara una suplantación?), no trata datos personales en principio y no deja rastro en sistemas ajenos |
| **OB04** · Revisar los registros de acceso del panel de almacenes | Adecuada con condiciones | Es un sistema propio y la revisión es necesaria para saber si hubo acceso. Pero los registros contienen datos de empleados: se limita al periodo y a los campos necesarios, se informa al delegado de protección de datos y se aplican los criterios de uso que Orvalia haya comunicado a su plantilla (art. 87 LOPDGDD) |
| **OB08** · Reunir todo lo publicado por `nordvik` para averiguar quién es | No corresponde al equipo | Su finalidad es identificar a una persona concreta, que queda fuera del requerimiento. Conservar el anuncio que afecta a Orvalia sí es adecuado; reconstruir la trayectoria del alias es tarea de la investigación policial |
| **OB09** · Interactuar con el vendedor o con el acceso ofrecido para comprobar si es real | Descartada | Acceder a un sistema sin autorización puede constituir el delito del art. 197 bis CP, e interactuar con el vendedor alerta al objetivo y puede comprometer la investigación policial. La plausibilidad del acceso se valora con los registros propios, no probándolo |

Conviene fijarse en que **OB08 y OB01 tratan el mismo alias**, pero con finalidades opuestas. Conservar una publicación que afecta a la organización es proteger evidencias. Reconstruir la actividad de una persona en otros sitios es perfilarla.

## Criterios que suelen decidir

| Si la acción… | Normalmente… | Referencia |
|---|---|---|
| accede a un sistema ajeno sin autorización | se descarta | Art. 197 bis CP |
| implica guardar o usar credenciales de otros | se descarta | Arts. 197 bis y 197 ter CP; Protocolo de Berkeley, párr. 63 |
| busca identificar a una persona por cuenta de la empresa | no corresponde al equipo | Art. 48 Ley 5/2014; competencia policial |
| afecta a la plantilla en su esfera personal | se descarta | Principio de minimización, art. 5.1.c RGPD |
| afecta a la plantilla en sistemas de la empresa | necesita condiciones y otras áreas | Art. 87 LOPDGDD |
| trabaja sobre sistemas propios con datos limitados | suele ser adecuada con condiciones | Art. 6.1.f y considerando 49 RGPD |
| no trata datos personales ni toca sistemas ajenos | suele ser adecuada | — |
| alerta al objetivo o expone al equipo | se replantea aunque sea lícita | Principios de OPSEC |

## Trabajo guiado

Se debe completar la evaluación de las diez acciones restantes de [acciones-propuestas.csv](datos/acciones-propuestas.csv):

| Acción | Decisión | Norma o principio que la decide | Condición, alternativa o destinatario |
|---|---|---|---|
| OB01 | | | |
| OB02 | | | |
| OB05 | | | |
| OB06 | | | |
| OB07 | | | |
| OB10 | | | |
| OB11 | | | |
| OB12 | | | |
| OB13 | | | |
| OB14 | | | |

Tres indicaciones para resolverlo:

- **OB06 y OB07** parecen parecidas y no lo son. Una afecta a la vida personal de la plantilla; la otra, a herramientas de la empresa con reglas propias.
- **OB11** no plantea un problema jurídico evidente. Conviene pensar qué efecto tendría sobre la investigación y sobre la denuncia.
- Para cada acción descartada, se debe proponer, si existe, una alternativa que cubra la misma necesidad de forma adecuada.

La explicación general continúa en [Los límites penales](../../README.md#los-límites-penales) y [Ética profesional](../../README.md#ética-profesional-lo-que-la-ley-no-resuelve).
