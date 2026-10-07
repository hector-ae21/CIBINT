# Operación Prisma · Obtención con herramientas

Se trabaja después de [elegir las herramientas](02-eleccion-de-herramientas.md). Recupera tu plan: pregunta, opción elegida, entrada, fuente esperada y alternativa. Ahora se utiliza, se conserva el resultado y se revisa si resolvió la pregunta.

## Objetivos de la práctica

Velaria y Náyade son ficticias: no se buscan sus nombres como si fueran entidades reales. Para practicar obtención se utiliza **INCIBE, `incibe.es`**, en información corporativa y publicaciones públicas, o el objetivo indicado por el docente. Para relacionar datos se utiliza el propio expediente de Prisma.

Las evidencias públicas conservan su objetivo real. Sirven para aprender el procedimiento; no autentican la petición ficticia. Copia el [registro de práctica](registro-practica.md) y anota la herramienta elegida antes de la primera consulta.

## Buscar y comparar versiones

Si elegiste buscador o archivo web:

1. Escribe una consulta con un propósito: `site:incibe.es "aviso legal"` o una página corporativa equivalente.
2. Ejecuta y abre la fuente original. Guarda consulta, URL y fecha disponible.
3. Afina la consulta o localiza otra fuente que pueda contradecir la interpretación.
4. Si elegiste Wayback, introduce la URL de la página en [Wayback Machine](https://web.archive.org/) y compara dos capturas existentes. Registra fecha de archivo y contenido comparado.
5. Explica qué parte del procedimiento permitiría comprobar un cambio de canal y qué no ha podido resolverse.

No se esperan versiones archivadas de `nayade.example`. Para el análisis ficticio se utilizan PRI-F04, PRI-F05 y PRI-S04.

## Intelligence X: referencias documentales

Si elegiste Intelligence X, utiliza el dominio público corporativo definido para la práctica, sin buscar personas ni credenciales.

1. Escribe qué referencia quieres localizar y por qué falta.
2. Introduce el dominio como selector en [Intelligence X](https://intelx.io/). Si buscas una URL concreta, revisa la [regla de normalización](https://help.intelx.io/get-started/selector/) antes de cambiar la entrada.
3. Acota por fecha o fuente si la interfaz y el acceso lo permiten; conserva los filtros exactos.
4. Revisa un resultado pertinente y registra procedencia, contexto, referencia y fechas disponibles. Si no puedes abrirlo, registra la restricción.
5. Contrasta la mención con el dominio conocido. Explica por qué su aparición no acredita control ni autorización.

Si no hay acceso o no hay resultados pertinentes, utiliza Google o Wayback y explica qué cobertura cambia. No se descargan resultados con secretos o datos personales ajenos al encargo. El resultado público no se atribuye a Náyade.

## Datos societarios: identificar la entidad

Si elegiste OpenCorporates o BORME, utiliza una sociedad real indicada para la consulta. Busca denominación y jurisdicción y conserva número de registro, fuente y fecha. Compara dos candidatos si los hay. Si solo encuentras uno, no inventes otro.

Aplica después el criterio a PRI-F03: ¿qué identificador permite distinguir la sociedad? ¿Qué sigue sin verificarse sobre el canal? No se buscan las empresas ficticias. La [sentencia del ejemplo real](../../README.md#ejemplos-reales-nombre-sociedad-y-canal) permite explicar el riesgo de quedarse solo con el nombre.

## Maltego: construir y revisar relaciones

Si elegiste Maltego, utiliza la edición disponible según la [documentación oficial](https://docs.maltego.com/en/support/home). El objetivo inicial es organizar evidencia, sin ejecutar transformaciones sobre los nombres ficticios.

1. Crea un grafo y añade entidades para Náyade, el dominio conocido, el dominio propuesto y los dos perfiles relevantes.
2. Introduce las relaciones manualmente a partir de PRI-F01, PRI-F05, PRI-P01, PRI-P03 y PRI-S01.
3. Etiqueta cada enlace: «enlaza a», «declara puesto» o «propone canal». Añade referencia y fecha en el campo de notas o propiedades disponible.
4. Mantén PRI-P02 separado. El nombre coincidente no justifica unirlo.
5. Marca como pendiente la relación entre PRI-P03 y el proveedor. Exporta o captura el grafo y conserva el archivo del proyecto.

| Relación | Referencia | Estado que debes distinguir |
|---|---|---|
| Página de equipo → perfil profesional | PRI-F01 | Enlace observado |
| Perfil de pagos → Náyade | PRI-P03 | Relación declarada |
| Anuncio → nuevo canal | PRI-S01 | Propuesta, no autorización verificada |

Si el plan incluía una transformación para obtener información nueva, selecciona primero una que consulte una fuente autorizada sobre el objetivo público asignado. Lee su descripción y registra qué recibió y devolvió. No ejecutes conjuntos completos de transformaciones por defecto. Si no hay acceso, conserva la consulta manual equivalente y el motivo del cambio.

## Babel Street: consulta y alternativa

Si elegiste Babel Street para seguimiento multilingüe y existe acceso institucional:

1. Define término o entidad, periodo, lenguas pertinentes y tipos de fuente. Utiliza los campos equivalentes que ofrezca la cuenta; no se presupone una interfaz de Babel X de 2020.
2. Ejecuta una consulta acotada sobre publicaciones corporativas del objetivo autorizado.
3. Selecciona un resultado y comprueba su fuente original, fecha y contexto.
4. Compara una coincidencia pertinente con una que excluirías por homónimo, contenido antiguo o falta de relación.
5. Conserva consulta, filtro, referencia y límite. Explica si la cobertura encontrada justificó la elección.

Si no hay acceso, ejecuta una consulta de buscador y otra por cuenta y fecha en la plataforma pública disponible. Registra que es una alternativa de alcance menor; no se presenta como equivalente a todas las capacidades de Babel Street. La imagen del catálogo ayuda a interpretar la función, pero no se cuenta como una consulta realizada por el estudiante.

## Verificar una publicación o una imagen

Aplica la distinción entre cuenta, publicación y afirmación y el procedimiento de búsqueda inversa del tema.

- Para una publicación, parte del canal enlazado por la web oficial. Usa el buscador disponible para una cuenta, término y periodo; abre el original y registra posibles dependencias.
- Para Lens o TinEye, utiliza una imagen pública elegida por el docente, por ejemplo de la [guía de verificación de Bellingcat](https://www.bellingcat.com/resources/2021/11/01/a-beginners-guide-to-social-media-verification/). Abre un resultado y comprueba si es la misma imagen, su fecha y contexto.
- No subas material interno del caso. IMG-01 se analiza mediante las referencias aportadas; no se adjunta una fotografía real de esa reunión ficticia.

## Conservar el resultado

Si elegiste Hunchly, prepara un expediente y habilita la captura solo para el recorrido autorizado. Abre una página relevante, añade una nota y comprueba que se conservan URL, tiempo y contenido. Desactiva la captura antes de navegar fuera de la tarea.

Si no está disponible, conserva una captura o copia permitida junto con URL, fecha, propósito y referencia. Explica qué trazabilidad no has automatizado. El mecanismo de conservación no valida por sí solo el contenido.

## Revisar la elección

| Pregunta inicial | Herramienta prevista | Herramienta utilizada | Evidencia obtenida | ¿Resuelve la pregunta? | Cambio justificado |
|---|---|---|---|---|---|
| | | | | | |

Cada estudiante debe poder mostrar una consulta o un grafo propio y explicar cómo se obtuvo. Después continúa en [Identidad y huella profesional](04-identidad-y-huella.md), vuelve aquí si hace falta nueva obtención y termina contrastando el expediente.
