# Fundamentos y ciclo de inteligencia

## Una primera aproximación

La actividad de un equipo de seguridad genera continuamente alertas, registros, dominios, noticias y avisos de usuarios. Estos elementos permiten observar una situación, pero rara vez ofrecen por separado una respuesta suficiente.

La ciberinteligencia ayuda a ordenar ese material, interpretarlo dentro de un contexto y comunicar una valoración útil para quien debe decidir. Por tanto, no se limita a recopilar datos ni se identifica con una herramienta concreta: conecta una necesidad, unas evidencias, un análisis y una decisión.

| Punto de partida | Pregunta que incorpora el análisis | Resultado buscado |
|---|---|---|
| Se observa algo relevante | ¿Qué significa dentro de esta situación? | Una explicación sustentada |
| Existen varias explicaciones posibles | ¿Qué evidencia apoya o debilita cada una? | Una valoración con incertidumbre explícita |
| Alguien debe actuar | ¿Qué necesita saber, con qué detalle y para cuándo? | Un producto útil y oportuno |

Durante este tema utilizaremos un mismo ejemplo: [**Operación Bruma**](casos/operacion-bruma/README.md), un expediente ficticio en el que una universidad recibe varios correos que imitan el acceso a su campus virtual. El enunciado reúne la situación, las condiciones del análisis y las muestras de datos disponibles.

| La organización observa | Decisión concreta que debe apoyar el análisis | Qué necesita aclararse |
|---|---|---|
| Se han recibido 14 mensajes en menos de media hora | Comunicar el incidente a toda la comunidad universitaria o avisar inicialmente solo a las personas afectadas | Si los mensajes forman una misma campaña, cuál es su alcance y qué riesgo supone retrasar o ampliar el aviso |
| Aparecen dos dominios parecidos al oficial | Bloquear temporalmente ambos dominios en los controles institucionales o mantenerlos únicamente bajo observación | Si están relacionados con los mensajes, qué efecto tendría el bloqueo y cuánto tiempo debe mantenerse |
| Tres usuarios indican que introdujeron su nombre de usuario | Priorizar la revisión de esas cuentas, contactar con sus titulares y decidir si deben reiniciarse credenciales o sesiones | Qué datos llegaron a facilitar, si hubo actividad posterior y qué medida resulta proporcionada |
| La revisión preliminar no ha confirmado accesos anómalos | Cerrar la revisión inicial o conservar evidencias y mantener la vigilancia mientras se obtienen más registros | Qué cubrió realmente la revisión, qué periodos o fuentes faltan y si la ausencia observada reduce suficientemente el riesgo |

La ciberinteligencia cubre la distancia entre ambas columnas: transforma observaciones dispersas en una respuesta razonada para quien debe decidir.

> **La investigación comienza por una necesidad de decisión, no por una herramienta.**

Durante la primera sesión, Operación Bruma se utiliza como hilo de una explicación dirigida por el profesor. El estudiante no tiene que resolver ni entregar el caso: basta con seguir cómo una misma evidencia cambia cuando se organiza, se interpreta y se adapta a una decisión.

## De los datos a la inteligencia

![De los datos a la decisión](https://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://raw.githubusercontent.com/hector-ae21/CIBINT/main/diagramas/01-datos-informacion-inteligencia.puml)

| Estado | Qué aporta | Operación Bruma |
|---|---|---|
| **Dato** | Una observación aislada | `198.51.100.42` aparece en un registro a las 08:14 |
| **Información** | Datos ordenados y puestos en relación | Los dos dominios observados resolvían a esa dirección y aparecen en 12 mensajes |
| **Inteligencia** | Una valoración contextualizada que apoya una decisión | Es probable que los mensajes formen parte de una misma campaña; procede contener los dominios mientras continúa el análisis |

El paso de una columna a la siguiente añade contexto, pero también exige interpretación. Una relación observada no demuestra por sí sola causalidad o autoría.

Podemos expresar la idea de forma compacta:

```text
datos + contexto = información
información + análisis + necesidad concreta = inteligencia
inteligencia + destinatario + oportunidad = apoyo a la decisión
```

Una lista de indicadores puede ser útil, pero todavía no es un producto de inteligencia si no aclara:

- qué significa para la organización;
- qué evidencia sostiene la valoración;
- qué incertidumbre permanece;
- qué decisión permite tomar;
- durante cuánto tiempo seguirá siendo relevante.

El documento breve [*The Work of a Nation: The Intelligence Cycle*](https://www.cia.gov/static/c050e9d29b6a04b639f050d6555e35c6/The-Work-of-a-Nation.pdf), de la CIA, presenta esta transformación como el paso de información en bruto a inteligencia terminada para apoyar decisiones.

La distinción puede aplicarse sobre las muestras del expediente en [Operación Bruma · Del dato a la inteligencia](casos/operacion-bruma/01-datos-informacion-inteligencia.md). El apartado combina un ejemplo resuelto con una breve tarea de análisis que no requiere entrega.

## El requerimiento de inteligencia

Un requerimiento traduce la necesidad del destinatario a un encargo que el analista puede planificar y responder.

| Componente | Operación Bruma |
|---|---|
| Destinatario | Responsable de seguridad de la universidad |
| Decisión | Activar medidas de contención y una comunicación general |
| Objeto | Mensajes recibidos durante la mañana y su posible relación |
| Horizonte | Valoración inicial antes de las 14:00 |
| Alcance | Muestra de mensajes, registros aportados e infraestructura observada de forma pasiva |
| Producto | Nota de situación breve con acciones inmediatas y limitaciones |

| Petición demasiado abierta | Requerimiento acotado |
|---|---|
| «Investiga el phishing» | «Valora, antes de las 14:00, si los mensajes recibidos hoy forman parte de una campaña coordinada contra la universidad y propón medidas inmediatas al responsable de seguridad» |

El requerimiento acotado puede descomponerse en preguntas de inteligencia:

1. ¿Qué elementos comparten los mensajes?
2. ¿Existen evidencias independientes que relacionen sus dominios o infraestructura?
3. ¿Qué usuarios o servicios pueden verse afectados?
4. ¿Qué medidas proporcionan una reducción inmediata del riesgo?
5. ¿Qué información falta para sostener mejor la valoración?

Una pregunta de inteligencia indica qué debe poder afirmarse al final. Las consultas concretas a buscadores, registros o conjuntos de datos vendrán después, durante la obtención.

El [requerimiento de Operación Bruma](casos/operacion-bruma/02-requerimiento-y-preguntas.md) muestra cómo convertir la petición inicial en un encargo acotado y en preguntas que puedan responderse con evidencia.

## El ciclo de inteligencia

El ciclo organiza el trabajo desde que aparece una necesidad hasta que el destinatario utiliza el producto y devuelve sus observaciones.

![Ciclo de inteligencia](https://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://raw.githubusercontent.com/hector-ae21/CIBINT/main/diagramas/01-ciclo-de-inteligencia.puml)

| Fase | Trabajo | Resultado en Operación Bruma |
|---|---|---|
| **Dirección y planificación** | Definir decisión, preguntas, alcance, plazo y prioridades | Requerimiento y plan para responder antes de las 14:00 |
| **Obtención** | Recoger datos mediante fuentes y técnicas autorizadas | Mensajes, cabeceras disponibles, avisos de usuarios y registros |
| **Procesamiento** | Limpiar, normalizar, clasificar y relacionar datos | Cronología común y tabla de dominios, direcciones y mensajes |
| **Análisis y producción** | Contrastar explicaciones y valorar sus implicaciones | Juicio sobre la posible campaña, impacto y medidas proporcionadas |
| **Difusión** | Adaptar el resultado al destinatario y entregarlo a tiempo | Nota breve para el responsable y detalle técnico para operaciones |
| **Retroalimentación** | Comprobar utilidad y recoger nuevas necesidades | Petición de actualizar la valoración cuando lleguen más cabeceras |

La representación ordena el proceso, pero no obliga a recorrerlo en línea recta. Si el análisis descubre que faltan cabeceras críticas, se vuelve a obtención. Si el destinatario cambia la prioridad, se revisa la dirección. Si aparece una explicación alternativa, puede ser necesario procesar otra vez la evidencia.

En el modelo tradicional algunas fuentes integran la retroalimentación en dirección y planificación. En la asignatura se muestra como fase explícita para recordar que entregar un informe no cierra necesariamente el trabajo. La lectura breve de la CIA enlazada en la sección anterior permite comparar ambas representaciones.

En [Operación Bruma · Aplicación del ciclo](casos/operacion-bruma/03-aplicacion-del-ciclo.md), cada fase se relaciona con una tarea y un resultado del expediente. El ejercicio incluye un retorno entre fases para evitar una interpretación puramente lineal.

## Tipos de inteligencia

La misma situación puede observarse a distintas alturas. La clasificación ayuda a decidir cuánto detalle necesita cada destinatario y durante cuánto tiempo será útil el producto.

![Niveles de inteligencia](https://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://raw.githubusercontent.com/hector-ae21/CIBINT/main/diagramas/01-niveles-inteligencia.puml)

| Nivel | Se concentra en | Destinatario habitual | Ejemplo en Operación Bruma |
|---|---|---|---|
| **Estratégico** | Tendencias, impacto y prioridades a medio o largo plazo | Dirección y responsables de riesgo | Evolución del fraude dirigido al sector educativo y capacidad necesaria para afrontarlo |
| **Operacional** | Campañas, actores, intención y evolución | Responsables de seguridad y respuesta | Alcance de la campaña, objetivos probables y relación entre oleadas |
| **Táctico** | Comportamientos y formas de actuación | Equipos de defensa y respuesta | Patrón de suplantación, señuelos y técnicas observadas |
| **Técnico** | Artefactos concretos y de vigencia corta | Operación de seguridad y herramientas | Dominios, direcciones, URL y reglas de detección |

Estas categorías no son compartimentos cerrados. Un indicador técnico puede revelar un patrón táctico; varios patrones pueden relacionarse con una campaña; el análisis de distintas campañas puede sostener una decisión estratégica.

## Productos y audiencias

La calidad de un análisis también depende de cómo llega a quien debe utilizarlo. Operación Bruma podría producir varios resultados a partir de la misma evidencia:

| Producto | Destinatario | Contenido central | Ritmo |
|---|---|---|---|
| Alerta | Operaciones de seguridad | Indicadores, alcance, acción y vigencia | Inmediato |
| Nota de situación | Responsable de seguridad | Qué ocurre, impacto, confianza y próximos pasos | Horas |
| Perfil de campaña | Equipo de inteligencia | Infraestructura, comportamiento, hipótesis y lagunas | Días |
| Evaluación estratégica | Dirección | Tendencia, exposición, escenarios y prioridades | Semanas o meses |

Un producto útil combina:

| Relevancia | Evidencia | Incertidumbre | Oportunidad |
|---|---|---|---|
| Responde a la decisión real | Permite remontarse a fuentes y fechas | Expone límites, contradicciones y confianza | Llega cuando todavía puede cambiar una decisión |

El apartado [Productos para dos audiencias](casos/operacion-bruma/04-productos-y-audiencias.md) utiliza la misma evidencia para preparar una alerta técnica y una nota de situación. Cambia la selección del contenido, no los hechos que la sostienen.

## El trabajo del analista

El analista conecta las fases y conserva el razonamiento que las une.

| Actividad | Pregunta que guía el trabajo | Evidencia del proceso |
|---|---|---|
| Entender la necesidad | ¿Qué decisión debe apoyarse? | Requerimiento validado |
| Diseñar la investigación | ¿Qué necesito y qué puedo utilizar? | Alcance y plan de fuentes |
| Valorar la información | ¿Qué fiabilidad, relación y vigencia tiene? | Registro de fuentes y bitácora |
| Contrastar explicaciones | ¿Qué apoya o debilita cada hipótesis? | Matriz de evidencias y lagunas |
| Comunicar | ¿Qué necesita saber esta audiencia ahora? | Producto con conclusiones y limitaciones |
| Revisar | ¿Qué cambió después de la entrega? | Retroalimentación y nueva versión |

La redacción debe permitir reconocer qué se observó y qué se dedujo:

| Pieza analítica | Ejemplo |
|---|---|
| **Hecho** | «Doce mensajes contienen uno de los dos dominios identificados» |
| **Inferencia** | «La infraestructura común sugiere coordinación» |
| **Supuesto** | «La muestra facilitada representa los mensajes recibidos» |
| **Laguna** | «No se dispone de todas las cabeceras» |
| **Valoración** | «Es probable que se trate de una misma campaña» |
| **Recomendación** | «Se propone bloquear temporalmente los dominios y conservar los mensajes» |

El artículo «Inteligencia en la gestión de emergencias», incluido en [*Documentos de Seguridad y Defensa 81*](https://publicaciones.defensa.gob.es/media/downloadable/files/links/d/s/dsd_81.pdf), páginas 58-61, desarrolla en español la relación entre datos, información, conocimiento e inteligencia y permite contrastar la terminología utilizada en el tema.

## Una vista completa

```text
necesidad de decisión
  → requerimiento y preguntas
    → alcance, fuentes y plazo
      → obtención y bitácora
        → procesamiento y relaciones
          → hipótesis y valoración
            → producto adaptado
              → decisión y retroalimentación
```

Las [plantillas de requerimiento](../../plantillas/plantilla-requerimiento-inteligencia.md), [bitácora](../../plantillas/plantilla-bitacora-investigacion.md) y [evaluación de fuentes](../../plantillas/plantilla-evaluacion-fuentes.md) convierten este esquema en documentos de trabajo. Las prácticas y sus entregas se publican en el repositorio del curso correspondiente.

## Continuación

El siguiente tema introduce el [marco legal, la ética y la seguridad operacional](../02-marco-legal-etica-y-opsec/README.md), que determinan cómo puede ejecutarse la fase de obtención. Para una selección breve de lecturas de este tema, consulta [recursos.md](recursos.md).
