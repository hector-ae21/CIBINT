# Operación Umbral · Enunciado

Operación Umbral es un caso ficticio construido para trabajar los conceptos del Tema 2. Orvalia Distribución, sus dominios, su plantilla y los hechos descritos no representan a ninguna organización real. Los dominios y direcciones utilizados pertenecen a espacios reservados para documentación.

## Situación

Orvalia Distribución es una empresa de logística con unos 600 empleados, sede en Valladolid y almacenes en cuatro provincias. Su dominio corporativo es `orvalia.example`.

El lunes a las 08:40, el responsable de seguridad recibe dos avisos casi a la vez:

- Un cliente le reenvía una captura de un foro en el que un usuario con el alias `nordvik` ofrece «acceso a la red interna de una distribuidora española», con una imagen parcial de lo que parece el panel de gestión de almacenes de Orvalia.
- El departamento comercial detecta que una cuenta anónima en una red social ha publicado durante el fin de semana tres documentos internos: dos hojas de tarifas de clientes y un organigrama del área de operaciones.

A las 09:15, la directora general convoca una reunión y resume así lo que quiere:

> «Quiero saber quién está detrás de esto. Si es alguien de dentro, quiero saberlo esta semana.»

## Qué se pide al equipo

El equipo de seguridad está formado por tres personas: el responsable, una analista de inteligencia y un técnico de sistemas. Ninguno es detective privado ni pertenece a un cuerpo policial.

Antes de actuar, el equipo necesita decidir:

1. qué parte de la petición puede atender y qué parte no le corresponde;
2. qué acciones de obtención son lícitas, proporcionadas y seguras;
3. cómo proteger la investigación y a las personas que la realizan;
4. cómo documentar el trabajo para poder justificarlo después.

## Otras voces en la reunión

La petición de la dirección no es la única. Cada área llega con su propia idea de lo que hay que hacer:

| Área | Lo que plantea |
|---|---|
| Dirección general | Identificar a la persona responsable, sea de dentro o de fuera |
| Recursos humanos | Revisar las redes sociales de los empleados del área de operaciones para ver quién ha criticado a la empresa últimamente |
| Asesoría jurídica | Conservar las publicaciones antes de que desaparezcan y valorar la denuncia |
| Comunicación | Responder públicamente a la cuenta anónima y pedir a la plataforma que retire los documentos |
| Sistemas | Comprobar si el acceso que se ofrece en el foro es real |

Algunas de estas propuestas son razonables tal como están. Otras necesitan condiciones. Alguna no debería hacerse en ningún caso.

## Material disponible

| Referencia | Muestra | Contenido |
|---|---|---|
| UMB-PET | [peticiones.csv](datos/peticiones.csv) | Las cinco propuestas de la reunión, con su formulación literal |
| UMB-ACC | [acciones-propuestas.csv](datos/acciones-propuestas.csv) | Catorce acciones de obtención que el equipo ha puesto sobre la mesa |
| UMB-BIT | [bitacora-borrador.csv](datos/bitacora-borrador.csv) | Registro de trabajo del primer día, redactado deprisa por un miembro del equipo |
| UMB-DIC | [diccionario de datos](datos/README.md) | Significado y límites de cada muestra |

## Condiciones del análisis

- El caso se resuelve con el material facilitado. No requiere ninguna búsqueda ni interacción en Internet.
- Se analiza desde la posición del equipo de seguridad de Orvalia, que investiga para proteger a su organización.
- Que una acción sea técnicamente posible no la hace lícita, y que sea lícita no la hace proporcionada.
- Cuando una decisión dependa de una valoración jurídica que el equipo no puede hacer por sí solo, debe indicarse a quién se consulta.
- La respuesta correcta a una pregunta puede ser «esto no nos corresponde».

## Recorrido

| Apartado | Qué se trabaja | Sesión de referencia |
|---|---|---|
| [1 · De la petición al alcance](01-de-la-peticion-al-alcance.md) | Qué parte de la petición puede atenderse y con qué base | Marco legal de la investigación |
| [2 · Evaluación de las acciones](02-evaluacion-de-las-acciones.md) | Licitud, proporcionalidad y seguridad de cada acción propuesta | Marco legal · Ética |
| [3 · Exposición e identidad](03-exposicion-e-identidad.md) | Qué puede delatar la investigación y dónde está la línea con las identidades ficticias | Ética, OPSEC e identidad |
| [4 · Incidente y trazabilidad](04-incidente-y-trazabilidad.md) | Qué hacer cuando aparece información sensible y cómo dejar constancia | Taller de OPSEC y trazabilidad |

La explicación general está en el [Tema 2](../../README.md).
