# Marco legal, ética y OPSEC del analista

## Una primera aproximación

En el Tema 1 la obtención aparecía como una fase más del ciclo: reunir datos de fuentes autorizadas. Este tema se ocupa de la palabra que quedaba en segundo plano, *autorizadas*.

Antes de preguntarse cómo se obtiene un dato, el analista tiene que poder responder a tres preguntas distintas. Se parecen, pero no son la misma:

| Pregunta | Qué examina | Ejemplo de respuesta negativa |
|---|---|---|
| **¿Es lícito?** | Si la acción está permitida por la ley aplicable a quien investiga | Iniciar sesión con una contraseña encontrada en una filtración |
| **¿Es legítimo y proporcionado?** | Si, siendo lícita, está justificada por la necesidad y no causa un daño mayor que el que evita | Reunir todo lo publicado por una persona cuando solo interesa su relación con un dominio |
| **¿Es seguro?** | Si la forma de obtenerlo expone la investigación, al analista o a terceros | Consultar directamente la infraestructura del adversario y avisarle de que está siendo observado |

Una acción puede superar la primera pregunta y fallar la segunda. Otra puede ser lícita y proporcionada y, aun así, arruinar la investigación por descuidada. El trabajo profesional exige las tres respuestas, y exige también poder demostrarlas después.

Durante el tema se utiliza un expediente ficticio, [**Operación Umbral**](casos/operacion-umbral/README.md): una empresa de distribución descubre que alguien ofrece en un foro un supuesto acceso a su red y que circulan documentos internos suyos. La dirección quiere saber quién está detrás. El caso sirve para comprobar que casi todas las decisiones difíciles de la investigación se toman antes de consultar la primera fuente.

> **Que un dato sea accesible no significa que cualquiera pueda recogerlo, cruzarlo o difundirlo para cualquier fin.**

## Quién investiga cambia el marco

No existe una única «ley del OSINT». Las normas que se aplican dependen, sobre todo, de quién realiza la investigación y con qué finalidad.

| Quién investiga | Marco principal en España | Consecuencia práctica |
|---|---|---|
| Una empresa u organización privada, sobre su propia seguridad | Reglamento (UE) 2016/679 (RGPD) y Ley Orgánica 3/2018 (LOPDGDD) | Necesita una base de licitud para cada tratamiento de datos personales y debe respetar sus principios |
| Autoridades competentes en la prevención, investigación y persecución de delitos | Ley Orgánica 7/2021, de protección de datos tratados con fines penales | El RGPD cede ante una norma específica, con garantías propias |
| Un despacho de detectives, por encargo de un tercero | Ley 5/2014, de Seguridad Privada, además del RGPD | La investigación sobre personas por cuenta ajena es una actividad reservada y limitada |
| Un equipo universitario o de investigación | RGPD, normativa de la institución y, en su caso, comité de ética | La finalidad de investigación no exime de minimizar ni de proteger a los afectados |

Este tema adopta la perspectiva más habitual para quien trabaja en ciberseguridad: **un analista que investiga para proteger a su propia organización**. Es también la que se aplica en las prácticas de la asignatura.

## Protección de datos: lo público sigue siendo dato personal

### El punto de partida

El RGPD define dato personal como toda información sobre una persona física identificada o identificable (art. 4.1). La definición no distingue entre información pública y privada. Un nombre en una web corporativa, una foto de perfil, un alias en un foro o una dirección de correo en un repositorio de código son datos personales si permiten identificar a alguien.

La consecuencia es incómoda pero directa: **la mayor parte del trabajo OSINT sobre personas es tratamiento de datos personales** y está sometida al RGPD, aunque todas las fuentes sean abiertas.

El caso Clearview AI, desarrollado en [casos reales](casos/casos-reales.md#clearview-ai-lo-público-no-es-libre), lo ilustra con claridad: varias autoridades europeas sancionaron a una empresa que había construido su base de datos a partir de fotografías publicadas en Internet. Que las imágenes estuvieran a la vista no le dio base legal para tratarlas.

### Los principios aplicados a la investigación

El artículo 5 del RGPD enumera los principios que debe cumplir todo tratamiento. Leídos desde el trabajo de inteligencia, se traducen en decisiones muy concretas:

| Principio (art. 5.1 RGPD) | Qué significa para el analista |
|---|---|
| Licitud, lealtad y transparencia | Tener una base legal y no obtener datos mediante engaño |
| Limitación de la finalidad | Usar lo obtenido para responder al requerimiento, no para otro fin que aparezca por el camino |
| Minimización | Recoger solo lo necesario para las preguntas de inteligencia; el resto se descarta o no se recoge |
| Exactitud | Verificar antes de atribuir; corregir cuando se detecta un error |
| Limitación del plazo de conservación | Definir cuándo se borra el material cuando la investigación termina |
| Integridad y confidencialidad | Proteger las evidencias y controlar quién accede a ellas |
| Responsabilidad proactiva (art. 5.2) | Poder demostrar todo lo anterior; aquí es donde la bitácora deja de ser opcional |

El requerimiento del Tema 1 resulta ser, además, una herramienta de cumplimiento: al fijar la decisión, el objeto y las exclusiones, delimita qué datos son necesarios y cuáles no.

### La base de licitud: el interés legítimo

Una organización privada que investiga amenazas contra sí misma no suele contar con el consentimiento de los afectados, ni lo necesita. La base habitual es el **interés legítimo** del artículo 6.1.f del RGPD, que exige tres cosas: un interés real y lícito, que el tratamiento sea necesario para satisfacerlo y que no prevalezcan los derechos de las personas afectadas.

El propio Reglamento reconoce expresamente la seguridad de las redes como interés legítimo. El considerando 49 dice:

> «Constituye un interés legítimo del responsable del tratamiento interesado el tratamiento de datos personales en la medida estrictamente necesaria y proporcionada para garantizar la seguridad de la red y de la información […]».

La frase contiene su propio límite: *en la medida estrictamente necesaria y proporcionada*. El considerando ampara investigar el acceso no autorizado a una red; no ampara reconstruir la vida de quien se sospecha que lo ha hecho.

El Comité Europeo de Protección de Datos desarrolló cómo aplicar esta ponderación en sus *Directrices 1/2024 sobre el tratamiento de datos personales basado en el artículo 6.1.f del RGPD*, enlazadas en [recursos](recursos.md).

### Categorías especiales y datos penales

Algunos datos exigen mucho más que un interés legítimo:

- **Categorías especiales** (art. 9 RGPD): origen étnico, opiniones políticas, convicciones religiosas, afiliación sindical, datos genéticos y biométricos, salud y orientación sexual. Su tratamiento está prohibido salvo excepciones tasadas. Una investigación de ciberseguridad casi nunca las necesita; si aparecen, se descartan.
- **Datos sobre condenas e infracciones penales** (art. 10 RGPD): solo pueden tratarse bajo control de la autoridad pública o cuando lo autorice una norma. Que una organización sospeche que alguien ha cometido un delito no la convierte en investigadora penal.

### Informar a quien es investigado

Cuando los datos no se obtienen del propio interesado, el artículo 14 del RGPD obliga en principio a informarle. En una investigación de seguridad, avisar al posible atacante sería absurdo, y el propio artículo prevé excepciones, entre ellas que la información resulte imposible o suponga un esfuerzo desproporcionado, o que pueda imposibilitar u obstaculizar gravemente los objetivos del tratamiento (art. 14.5.b).

La excepción existe, pero hay que poder justificarla por escrito. No es una exención general para cualquier investigación.

### Dos artículos de la LOPDGDD que conviene conocer

| Artículo | Contenido | Por qué importa aquí |
|---|---|---|
| **Art. 19** | Presume legítimo el tratamiento de los datos de contacto profesional de quien trabaja en una empresa, **solo** para mantener relaciones con esa empresa | Encontrar el correo corporativo de un empleado es fácil; perfilarlo no está cubierto por esta presunción |
| **Art. 87** | Reconoce el derecho de los trabajadores a la intimidad en el uso de los dispositivos digitales facilitados por el empleador; el acceso del empleador exige criterios de uso previos e informados | Si la sospecha apunta a alguien de dentro, revisar su correo o su equipo no es una tarea del analista de inteligencia, sino un procedimiento con garantías propias |

Los artículos 88 a 91 de la misma ley regulan la desconexión digital, la videovigilancia, la geolocalización y los derechos digitales en la negociación colectiva. Son relevantes si la investigación se orienta hacia la plantilla.

## Los límites penales

El Derecho penal marca la frontera que no se cruza bajo ningún pretexto. Los artículos del Código Penal que un analista debe conocer son pocos, y todos tienen una lectura muy concreta en este trabajo.

| Artículo | Qué castiga, en síntesis | Dónde puede aparecer en una investigación |
|---|---|---|
| **197.1** | Apoderarse de mensajes, documentos o comunicaciones de otro para descubrir sus secretos o vulnerar su intimidad | Leer correos o mensajes ajenos obtenidos de una filtración |
| **197.2** | Apoderarse, utilizar o modificar, sin autorización, datos reservados de otro registrados en ficheros o soportes | Explotar una base de datos filtrada con información personal |
| **197 bis.1** | Acceder a un sistema de información, o mantenerse en él, **vulnerando las medidas de seguridad** y sin autorización | Iniciar sesión con credenciales ajenas, aunque se hayan encontrado en abierto |
| **197 bis.2** | Interceptar transmisiones no públicas de datos informáticos | Capturar tráfico que no está destinado a quien lo captura |
| **197 ter** | Producir, adquirir para su uso o facilitar programas o contraseñas con la intención de cometer los delitos anteriores | Guardar, intercambiar o reenviar credenciales filtradas |
| **172 ter** | Acosar a alguien de forma insistente y reiterada, entre otras formas vigilándolo o estableciendo contacto con él, alterando su vida cotidiana; el apartado 5 castiga usar su imagen para abrir perfiles falsos | Seguimiento sostenido de una persona o contacto reiterado con ella |
| **401** | Usurpar el estado civil de otro | Hacerse pasar por una persona real concreta |

Tres observaciones sobre esta tabla:

1. **«Estaba publicado» no convierte en lícito el acceso.** Una contraseña filtrada no deja de proteger el sistema al que pertenece. El Protocolo de Berkeley lo dice sin rodeos: usar una contraseña encontrada en una filtración para acceder a material restringido es acceso no autorizado (párr. 63).
2. **La intención cuenta, pero no protege.** El artículo 197 ter exige intención de facilitar un delito. Eso no autoriza a coleccionar credenciales «para investigar»: la tenencia ya es difícil de justificar y el paso siguiente, comprobar si funcionan, es un acceso ilícito.
3. **Comprobar no es investigar.** Probar si una credencial es válida, si una vulnerabilidad es explotable o si un acceso ofrecido en un foro es real son acciones activas sobre sistemas ajenos. En la asignatura están prohibidas; en la profesión requieren una autorización expresa del titular del sistema.

## Investigar a personas por encargo

Existe un límite menos conocido. La Ley 5/2014, de Seguridad Privada, reserva a los detectives privados las averiguaciones que se realizan **por cuenta de terceros** sobre conductas o hechos privados en el ámbito económico, laboral, mercantil, financiero o en la vida personal, familiar o social (art. 48.1). La misma ley exige acreditar el interés legítimo del cliente, prohíbe investigar la vida íntima que transcurre en domicilios o lugares reservados y obliga a respetar los principios de razonabilidad, necesidad, idoneidad y proporcionalidad (art. 48.2, 48.3 y 48.6).

Para un analista esto tiene una consecuencia práctica: **investigar amenazas contra la propia organización no es lo mismo que ofrecer a un cliente averiguar quién es una persona**. Lo segundo entra en un terreno profesional regulado.

## Condiciones de uso de las plataformas

Muchas técnicas habituales, como la extracción automatizada o el uso de cuentas que no corresponden a la identidad real, incumplen las condiciones de uso de las plataformas. Un incumplimiento de condiciones de uso es, en principio, una cuestión contractual y no penal, y su consecuencia más frecuente es el cierre de la cuenta. El Protocolo de Berkeley recomienda comprobar en cada jurisdicción si además constituye un ilícito y ponderarlo antes de actuar (párr. 65).

Que algo no sea delito no significa que sea adecuado. Una organización que basa su investigación en romper sistemáticamente las reglas de las plataformas asume un riesgo reputacional y compromete la credibilidad de sus conclusiones.

## Compartir lo que se sabe

La licitud no termina en la obtención. La difusión también tiene reglas, y la más extendida en la comunidad de ciberseguridad es el **Traffic Light Protocol (TLP)**, mantenido por FIRST. Su versión 2.0 es la vigente desde agosto de 2022.

| Etiqueta | Quién puede recibir la información |
|---|---|
| **TLP:RED** | Solo los destinatarios individuales; no se difunde más |
| **TLP:AMBER+STRICT** | La organización del destinatario, sin salir de ella |
| **TLP:AMBER** | La organización del destinatario y sus clientes, según la necesidad de conocer |
| **TLP:GREEN** | La comunidad del destinatario, sin canales de acceso público |
| **TLP:CLEAR** | Sin restricción |

El TLP no es una norma jurídica, sino un acuerdo profesional. Etiquetar bien un producto de inteligencia protege a las fuentes, a las víctimas y a la propia investigación, y encaja con la fase de difusión vista en el Tema 1.

Para el sector privado español, el equipo de respuesta de referencia es el **INCIBE-CERT** (art. 11 del Real Decreto-ley 12/2018). La Directiva (UE) 2022/2555, conocida como NIS2, amplía las obligaciones de gestión y notificación de incidentes; en el momento de redactar este tema su transposición en España sigue en tramitación, por lo que conviene comprobar su estado antes de citarla como derecho vigente.

## Ética profesional: lo que la ley no resuelve

La ley fija el suelo, no el estándar. Muchas decisiones del analista caen en un espacio que ninguna norma regula con detalle: cuánto buscar, qué publicar, a quién nombrar, cuándo parar.

### Dos marcos de referencia

El **Informe Menlo** (Departamento de Seguridad Nacional de EE. UU., 2012) adaptó a la investigación en tecnologías de la información los principios éticos clásicos de la investigación con personas. Propone cuatro:

| Principio | Pregunta que plantea al analista |
|---|---|
| Respeto por las personas | ¿Trato a los afectados como sujetos con derechos o solo como fuentes de datos? |
| Beneficencia | ¿He identificado los daños posibles y he hecho lo razonable para reducirlos? |
| Justicia | ¿Recaen los costes de mi trabajo sobre quienes no obtienen ningún beneficio de él? |
| Respeto por la ley y el interés público | ¿Puedo explicar públicamente por qué hice lo que hice? |

El **Protocolo de Berkeley sobre investigaciones digitales de fuentes abiertas** (Naciones Unidas y Universidad de California en Berkeley, 2022) es hoy la referencia metodológica más citada en el ámbito OSINT. Organiza sus principios en tres grupos:

| Grupo | Principios |
|---|---|
| Profesionales | Rendición de cuentas, competencia, objetividad, legalidad y conciencia de la seguridad |
| Metodológicos | Exactitud, minimización de datos, preservación y seguridad desde el diseño |
| Éticos | Dignidad, humildad, inclusividad, independencia y transparencia |

El principio de **humildad** merece una mención aparte porque es el más fácil de olvidar: reconocer lo que no se sabe, consultar cuando hace falta y, si se comete un error, corregirlo o comunicarlo a quien pueda limitar el daño (párr. 35).

### El daño de equivocarse de persona

En inteligencia, el error más grave no es no encontrar al responsable, sino señalar a quien no lo es. Una atribución equivocada puede destruir la reputación de una persona inocente en horas, y la corrección posterior nunca alcanza la difusión del error.

El caso de Reddit tras el atentado de la maratón de Boston, analizado en [casos reales](casos/casos-reales.md#boston-2013-el-coste-de-señalar), muestra cómo una investigación colectiva bienintencionada, sin método ni contención, terminó acusando públicamente a personas que no tenían relación con los hechos.

Esta es la razón práctica por la que el Tema 1 insistía en distinguir hechos, inferencias y supuestos. No es una exigencia formal: es la barrera que impide que una sospecha se convierta en una acusación.

### Criterios de decisión

Cuando no está claro si una acción es adecuada, estas preguntas ayudan a decidir:

1. ¿Es necesaria para responder a una pregunta del requerimiento, o solo es interesante?
2. ¿Existe una forma menos intrusiva de obtener lo mismo?
3. ¿Quién podría resultar perjudicado, y cuánto?
4. ¿Podría explicar esta acción, con naturalidad, a la persona afectada, a un juez o a la dirección de mi organización?
5. Si lo que encuentro se publicara mañana con mi nombre, ¿lo haría igual?

Si la respuesta a cualquiera de ellas incomoda, lo profesional es detenerse y consultar.

## Seguridad operacional del analista

### Qué es la OPSEC

La seguridad operacional (OPSEC, por *Operations Security*) es, según la definición que recoge el NIST, un proceso sistemático para impedir que un adversario obtenga información sobre capacidades e intenciones, identificando, controlando y protegiendo **indicios generalmente no clasificados** de la planificación y ejecución de actividades sensibles.

El concepto nació durante la guerra de Vietnam. El estudio *Purple Dragon*, publicado por la Agencia de Seguridad Nacional estadounidense y desclasificado después, explica cómo el adversario anticipaba operaciones aéreas a partir de información aparentemente inocua. De ahí surgió un método en cinco pasos que se sigue enseñando hoy.

La idea clave está en la definición: lo que compromete una operación rara vez es un secreto, sino la suma de detalles que por separado no parecen importantes. Es la misma progresión de dato a información que se estudió en el Tema 1, vista desde el lado de quien quiere protegerse. El caso de Strava, en [casos reales](casos/casos-reales.md#strava-2018-cuando-los-datos-se-suman), es el ejemplo más citado.

### El proceso aplicado a una investigación

| Paso | Pregunta | En una investigación de ciberinteligencia |
|---|---|---|
| 1. Identificar la información crítica | ¿Qué no debe saber nadie ajeno? | Que la investigación existe, qué se busca, qué fuentes se usan, quién la realiza |
| 2. Analizar las amenazas | ¿Quién querría saberlo y qué capacidad tiene? | El propio objeto de la investigación, terceros interesados, una filtración interna |
| 3. Analizar las vulnerabilidades | ¿Por dónde podría conocerlo? | Consultas que llegan a los registros del objetivo, cuentas personales del analista, material del caso compartido fuera de los canales previstos |
| 4. Evaluar el riesgo | ¿Qué pasaría si lo supiera? | El objetivo borra rastros, cambia de infraestructura, toma represalias o publica la investigación |
| 5. Aplicar contramedidas | ¿Qué reduce el riesgo de forma proporcionada? | Preferir fuentes pasivas, separar el trabajo de la vida personal, limitar quién conoce el caso, etiquetar la difusión |

### Principios prácticos

La OPSEC de un analista no depende de una herramienta concreta, sino de hábitos. Los que siguen son los que más problemas evitan:

- **Pasivo antes que activo.** Consultar fuentes que ya han recogido la información, como registros históricos o motores que indexan infraestructura, no deja rastro en los sistemas del objetivo. Acceder directamente a esos sistemas sí lo deja, y puede alertar a quien se investiga.
- **Separar lo profesional de lo personal.** Las cuentas, perfiles y dispositivos personales del analista no se usan en una investigación. Muchas plataformas informan a los titulares de perfiles de quién los ha visitado.
- **No entregar el caso a servicios de terceros.** Subir una muestra, un documento o una imagen del caso a un servicio externo para analizarla puede ponerla a disposición de otros, incluido el propio objetivo.
- **Necesidad de conocer.** Cuantas menos personas conozcan una investigación, menos probable es que se filtre. Esto incluye no comentarla en canales informales.
- **Difusión etiquetada.** Todo producto que sale del equipo lleva su etiqueta TLP.
- **Registrar también lo que se decide no hacer.** Si una fuente se descarta por riesgo, la bitácora lo refleja. Así se evita que otra persona del equipo la consulte sin saberlo.

### La seguridad no justifica cualquier medio

Hay una tensión que conviene nombrar. Algunas medidas que protegen al analista, como ocultar su identidad, pueden derivar hacia prácticas engañosas si no se ponen límites. El apartado siguiente trata precisamente esa frontera.

## Identidad de investigación

### El espectro

Entre navegar con la propia identidad y hacerse pasar por otra persona hay un espectro amplio. No todos sus puntos son iguales ni legal ni éticamente.

![Espectro de identidad en una investigación](https://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://raw.githubusercontent.com/hector-ae21/CIBINT/main/diagramas/02-espectro-de-identidad.puml)

| Punto del espectro | Qué implica | Valoración general |
|---|---|---|
| Consulta sin identificarse | Acceder a contenido público sin iniciar sesión | Adecuada en la mayoría de los casos |
| Identidad institucional de investigación | Cuenta de la organización, dedicada al trabajo y separada de la personal | Adecuada con autorización interna y registro |
| Identidad virtual pasiva | Perfil que no corresponde a una persona real, usado solo para ver contenido que exige sesión | Zona gris: puede incumplir condiciones de uso; en la profesión exige autorización expresa |
| Identidad virtual que interactúa | Perfil ficticio que contacta, pide acceso a grupos cerrados o conversa para obtener información | Engaño: fuera de la investigación de fuentes abiertas |
| Suplantación de una persona real | Hacerse pasar por alguien concreto | Puede ser delito (arts. 401 y 172 ter.5 CP) |

El Protocolo de Berkeley define la identidad virtual como un perfil en línea que no corresponde a la identidad real del investigador (párr. 107) y admite su uso para buscar y observar por motivos de seguridad. Pero traza una línea clara: no debe usarse para obtener información directamente de una persona bajo una identidad falsa, porque eso **sacaría la actividad del ámbito de la investigación de fuentes abiertas, vulneraría los principios éticos y podría infringir la ley** (párr. 65). Entre los ejemplos de engaño que cita están intentar unirse a grupos cerrados o establecer contactos en redes sociales con falsos pretextos (nota 34).

### La línea en esta asignatura

En las prácticas de la asignatura:

- se trabaja con fuentes que no exigen crear perfiles;
- no se crean identidades ficticias para acceder a contenido restringido;
- no se contacta con personas ni con organizaciones del caso;
- si una pregunta de inteligencia solo puede responderse entrando en un espacio cerrado, esa pregunta queda fuera del alcance y se hace constar como limitación.

Esa última regla no es solo una precaución docente. Es exactamente lo que haría un equipo profesional que no dispone de una autorización específica: reconocer la laguna y, si procede, trasladar el asunto a quien tiene competencia para investigarlo.

### En la práctica profesional

Las organizaciones que, por su actividad, sí utilizan identidades de investigación lo hacen con condiciones que conviene conocer aunque no se apliquen en las prácticas: una política escrita que las regula, una autorización previa para cada uso, revisión jurídica, registro de su creación y de cada acción realizada con ellas, y un procedimiento de retirada. El Protocolo de Berkeley recomienda expresamente que existan políticas específicas sobre su creación y uso (párr. 127).

## Riesgos personales del analista

La investigación también tiene costes para quien la hace.

| Riesgo | Cómo aparece | Qué lo reduce |
|---|---|---|
| **Jurídico** | Una acción aparentemente inocua resulta ser un acceso no autorizado o un tratamiento ilícito | Autorización por escrito, alcance definido, consulta previa cuando hay duda |
| **Exposición** | El objetivo descubre quién le investiga y responde con acoso, publicación de sus datos o represalias | Separación de identidades y cuentas, necesidad de conocer, difusión etiquetada |
| **Reputacional** | Una conclusión errónea se difunde con el nombre del analista o de su organización | Distinción entre hechos e inferencias, revisión por otra persona, humildad |
| **Psicológico** | Exposición continuada a contenido violento, abusivo o angustioso | Limitar la exposición, alternar tareas, hablarlo, pedir ayuda |

El último riesgo suele subestimarse en ciberseguridad. El Protocolo de Berkeley dedica atención específica al daño psicosocial y al trauma secundario que puede sufrir quien analiza material gráfico o traumático, y pide a las organizaciones que lo prevengan (párrs. 78 y 123). Encontrar contenido perturbador durante una investigación no es un fallo personal; seguir trabajando como si no hubiera pasado nada puede serlo.

## Trazabilidad: poder demostrar lo que se hizo

La responsabilidad proactiva del RGPD, la exactitud del Protocolo de Berkeley y la credibilidad de cualquier conclusión dependen de lo mismo: **poder reconstruir qué se hizo, cuándo, con qué fuente y por qué**.

### La bitácora

La [plantilla de bitácora](../../plantillas/plantilla-bitacora-investigacion.md) de la asignatura recoge, para cada acción, la fecha y hora, el propósito, la fuente, lo realizado, el resultado y la decisión siguiente. Tres reglas la hacen útil:

1. **Se escribe mientras se trabaja**, no al final. Una bitácora reconstruida es un relato, no un registro.
2. **No contiene lo que no debe contener.** Ni credenciales, ni datos personales innecesarios, ni copias de material sensible. Registra la existencia de una exposición, no el dato expuesto.
3. **Recoge también las decisiones negativas**: fuentes descartadas, acciones que no se realizaron y por qué.

### Preservar sin alterar

Cuando algo debe conservarse como evidencia, como una publicación que puede desaparecer, importa tanto el contenido como la capacidad de demostrar que no ha cambiado desde que se obtuvo. Las prácticas básicas son:

| Práctica | Para qué sirve |
|---|---|
| Registrar la dirección exacta, la fecha y la hora de obtención, con su zona horaria | Situar la evidencia en el tiempo y permitir que otra persona la localice |
| Calcular una huella criptográfica (por ejemplo, SHA-256) del archivo en el momento de obtenerlo | Demostrar después que el archivo no se ha modificado |
| Conservar el original y trabajar sobre copias | Evitar alteraciones accidentales |
| Anotar quién ha accedido a la evidencia y cuándo | Mantener la cadena de custodia |
| Guardar la evidencia en un lugar con acceso restringido | Cumplir el principio de integridad y confidencialidad |

Estas prácticas están desarrolladas en la norma ISO/IEC 27037, en la RFC 3227 y, en España, en la norma UNE 71506. Una organización que prevé llevar un asunto a los tribunales debe implicar desde el principio a su asesoría jurídica y, si procede, a un perito; la trazabilidad de una práctica docente no sustituye a una cadena de custodia forense.

## Una vista completa

Antes de ejecutar cualquier acción de obtención, el analista debería poder recorrer esta secuencia sin dudar en ningún punto:

![Licitud de la obtención](https://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://raw.githubusercontent.com/hector-ae21/CIBINT/main/diagramas/02-licitud-de-la-obtencion.puml)

```text
¿responde a una pregunta del requerimiento?
  → ¿hay base legal para tratar los datos personales que implica?
    → ¿evita acceder a sistemas o contenidos protegidos?
      → ¿es la forma menos intrusiva de obtenerlo?
        → ¿expone la investigación, al analista o a terceros?
          → ¿queda registrada en la bitácora?
            → obtener
```

La [plantilla de evaluación de licitud](../../plantillas/plantilla-evaluacion-licitud.md) convierte esta secuencia en un documento de trabajo que puede adjuntarse al requerimiento.

## Continuación

El siguiente tema entra en la obtención propiamente dicha, con los [fundamentos de OSINT y la investigación de personas y organizaciones](../03-osint-personas-y-organizaciones/README.md). Todo lo que allí se practique se hará dentro de los límites de este tema. Para las lecturas recomendadas, consulta [recursos.md](recursos.md).
