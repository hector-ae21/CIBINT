# Casos reales comentados

Tres episodios documentados que ilustran, cada uno desde un ángulo distinto, las ideas del tema. No se presentan como modelos de conducta ni como escándalos, sino como situaciones de las que se puede aprender algo concreto.

Todos los datos proceden de las fuentes citadas al final de cada caso. Donde las fuentes discrepan o la información está en disputa, se indica.

| Caso | Idea central | Bloque del tema |
|---|---|---|
| [Clearview AI](#clearview-ai-lo-público-no-es-libre) | Que un dato sea público no da base legal para tratarlo | Marco legal |
| [Strava](#strava-2018-cuando-los-datos-se-suman) | Datos inocuos por separado pueden revelar lo que se quería proteger | OPSEC |
| [Boston](#boston-2013-el-coste-de-señalar) | Una atribución equivocada causa daños reales a personas inocentes | Ética |

---

## Clearview AI: lo público no es libre

### Qué ocurrió

Clearview AI, una empresa estadounidense, construyó un motor de reconocimiento facial a partir de fotografías extraídas de forma masiva de páginas web y redes sociales. A partir de una imagen, su herramienta devolvía otras fotografías de la misma persona y los enlaces donde aparecían. La empresa ofrecía el servicio principalmente a cuerpos policiales.

Entre 2022 y 2024, varias autoridades europeas de protección de datos sancionaron a la empresa:

| Autoridad | Año | Sanción |
|---|---|---|
| Garante per la protezione dei dati personali (Italia) | 2022 | 20 millones de euros |
| Autoridad helénica de protección de datos (Grecia) | 2022 | 20 millones de euros |
| CNIL (Francia) | 2022 | 20 millones de euros, a los que se sumó en 2023 una multa coercitiva de 5,2 millones por no cumplir lo ordenado |
| Autoriteit Persoonsgegevens (Países Bajos) | 2024 | 30,5 millones de euros |

La autoridad austriaca declaró también en 2023 que la empresa había infringido los artículos 5, 6, 9 y 27 del RGPD. Clearview ha cuestionado la competencia de las autoridades europeas sobre su actividad y, según la información publicada, las sanciones no se han cobrado.

### Qué enseña

Las autoridades coincidieron en lo esencial:

- Las fotografías eran **datos personales** aunque estuvieran publicadas. Y al usarlas para identificar a personas mediante reconocimiento facial, pasaban a ser **datos biométricos**, una categoría especial del artículo 9.
- La empresa carecía de **base de licitud**. El interés comercial en construir una base de datos no prevalecía sobre los derechos de millones de personas que nunca esperaron que su foto acabara en ella.
- Los afectados **no fueron informados**, pese a que los datos no se habían obtenido de ellos.

Para un analista, la lección es directa. Que una información esté a un clic no resuelve ninguna de las preguntas del tema. Recoger de forma sistemática lo que está publicado sobre personas, guardarlo y hacerlo buscable es un tratamiento que necesita finalidad, base legal y límites.

### Para comentar

- ¿Qué diferencia hay entre consultar una fotografía pública durante una investigación concreta y almacenarla en una base de datos para búsquedas futuras?
- ¿Cambiaría la valoración si la herramienta solo la usara la policía?

### Fuentes

- Comité Europeo de Protección de Datos, «Facial recognition: Italian SA fines Clearview AI EUR 20 million», noticias nacionales, 2022. <https://www.edpb.europa.eu/news/national-news/2022/facial-recognition-italian-sa-fines-clearview-ai-eur-20-million_en>
- Comité Europeo de Protección de Datos, «French SA fines Clearview AI EUR 20 million», noticias nacionales, 2022. <https://www.edpb.europa.eu/news/national-news/2022/french-sa-fines-clearview-ai-eur-20-million_en>
- Comité Europeo de Protección de Datos, «Facial recognition: the French SA imposes a penalty payment on Clearview AI», noticias nacionales, 2023. <https://www.edpb.europa.eu/news/national-news/2023/facial-recognition-french-sa-imposes-penalty-payment-clearview-ai_en>
- Comité Europeo de Protección de Datos, «Decision by the Austrian SA against Clearview AI: infringements of Articles 5, 6, 9, 27 GDPR», noticias nacionales, 2023. <https://www.edpb.europa.eu/news/national-news/2023/decision-austrian-sa-against-clearview-ai-infringements-articles-5-6-9-27_en>
- Comité Europeo de Protección de Datos, «Dutch Supervisory Authority imposes a fine on Clearview because of illegal data collection for facial recognition», 3 de septiembre de 2024. <https://www.edpb.europa.eu/news/national-news/2024/dutch-supervisory-authority-imposes-fine-clearview-because-illegal-data_en>
- IAPP, «Greek DPA imposes 20M euro fine on Clearview AI for unlawful processing of personal data», 2022. <https://iapp.org/news/a/greek-dpa-imposes-20m-euro-fine-on-clearview-ai-for-unlawful-processing-of-personal-data>

---

## Strava, 2018: cuando los datos se suman

### Qué ocurrió

Strava es una aplicación para registrar actividad deportiva. En noviembre de 2017 publicó un mapa de calor mundial que agregaba los recorridos de sus usuarios: según la propia empresa, unos mil millones de actividades.

El 27 de enero de 2018, Nathan Ruser, un estudiante australiano de 20 años, advirtió que en zonas como Irak, Siria o Afganistán, donde casi nadie usaba la aplicación, los pocos recorridos visibles dibujaban con claridad el perímetro de bases militares y las rutas entre ellas. Eran los trayectos de personal extranjero que salía a correr con dispositivos de actividad física. Algunas de esas instalaciones eran conocidas; otras, no.

La publicación de Ruser se difundió en pocas horas. El Departamento de Defensa estadounidense anunció que revisaba sus políticas sobre el uso de estos dispositivos.

### Qué enseña

Ningún usuario reveló un secreto. Cada uno compartió un dato trivial: por dónde había corrido. El problema surgió de la **agregación**: miles de datos inocuos, puestos juntos, se convirtieron en información sensible.

Es la progresión del Tema 1 (dato, información, inteligencia) vista desde el lado de quien tiene algo que proteger. Y es exactamente lo que la definición de OPSEC quiere prevenir cuando habla de proteger *indicios generalmente no clasificados*.

Para el analista, el caso tiene dos lecturas:

- **Como investigador**, muestra el valor de las fuentes agregadas y por qué es tan importante no convertir esa capacidad en vigilancia de personas.
- **Como objeto de investigación**, recuerda que su propia actividad también deja rastros que, sumados, pueden revelar qué investiga, para quién y desde dónde.

### Para comentar

- En Operación Umbral, ¿qué rastros aparentemente inocuos del equipo de Orvalia podrían, sumados, delatar la investigación?
- ¿Qué habría tenido que preguntarse Strava antes de publicar el mapa? Se puede responder con los cinco pasos del proceso de OPSEC.

### Fuentes

- ABC News (Australia), «Strava has published details about secret military bases, and an Australian was the first to know», 29 de enero de 2018. <https://www.abc.net.au/news/science/2018-01-29/strava-heat-map-shows-military-bases-and-supply-routes/9369490>
- The Register, «All your base are belong to us: Strava exercise app maps military sites, reveals where spies jog», 29 de enero de 2018. <https://www.theregister.com/2018/01/29/strava_heatmap_military_base_locations/>
- NPR, «Pentagon Reviews GPS Policies After Soldiers' Strava Tracks Are Seemingly Exposed», 29 de enero de 2018. <https://www.npr.org/sections/thetwo-way/2018/01/29/581597949/pentagon-reviews-gps-data-after-soldiers-strava-tracks-are-seemingly-exposed>

---

## Boston, 2013: el coste de señalar

### Qué ocurrió

El 15 de abril de 2013, dos bombas explotaron cerca de la meta del maratón de Boston. Tres días después, el FBI difundió imágenes de dos sospechosos y pidió colaboración ciudadana.

En Reddit, un foro creado para la ocasión reunió a miles de usuarios que analizaban fotografías del evento, marcaban a personas con mochilas y comparaban rostros. En pocas horas circularon nombres. Uno de ellos fue el de Sunil Tripathi, un estudiante universitario desaparecido semanas antes, al que algunos usuarios creyeron reconocer en las imágenes. Su nombre se difundió de forma masiva en redes sociales, y su familia, que le estaba buscando, tuvo que cerrar temporalmente la página creada para encontrarle.

Tripathi no tenía ninguna relación con el atentado. Los autores fueron identificados por la investigación oficial.

El director general de Reddit publicó una disculpa en la que reconocía que la actividad en la plataforma había alimentado «cazas de brujas» y especulaciones peligrosas con consecuencias muy negativas para personas inocentes, y en la que se disculpaba expresamente ante la familia.

### Qué enseña

La mayoría de los participantes actuaba de buena fe y quería ayudar. Lo que faltó fue método:

| Lo que ocurrió | Lo que el tema propone |
|---|---|
| Un parecido físico se trató como identificación | Distinguir hecho, inferencia y supuesto |
| Las hipótesis se publicaban en abierto mientras se formulaban | Difundir solo productos revisados, al destinatario adecuado |
| Nadie se hacía responsable de corregir los errores | Humildad: reconocer y corregir los errores, y avisar a quien pueda limitar el daño |
| La presión por encontrar un nombre dirigió la investigación | La necesidad de decisión orienta el trabajo; la urgencia no rebaja el umbral de prueba |

El caso muestra, además, por qué la identificación de autores de delitos corresponde a quien tiene competencia, medios y garantías para hacerlo.

### Para comentar

- La directora general de Orvalia quiere un nombre «esta semana». ¿Qué parecido hay entre esa presión y la de Boston?
- ¿Qué habría cambiado si los participantes hubieran aplicado una sola regla: no publicar ningún nombre?

### Fuentes

- The Register, «Reddit: So very sorry for naming innocent man as Boston bomber», 24 de abril de 2013. <https://www.theregister.com/2013/04/24/reddit_apology_boston/>
- NBC News, «Reddit publicly apologizes 'for the pain' caused to family of falsely accused student», abril de 2013. <https://www.nbcnews.com/tech/tech-news/reddit-publicly-apologizes-pain-caused-family-falsely-accused-student-flna6c9553154>
- NPR, «Social Media's Rush To Judgment In The Boston Bombings», 23 de abril de 2013. <https://www.npr.org/sections/alltechconsidered/2013/04/23/178556269/Social-Medias-Rush-To-Judgment-In-The-Boston-Bombings>

---

La explicación general está en el [Tema 2](../README.md).
