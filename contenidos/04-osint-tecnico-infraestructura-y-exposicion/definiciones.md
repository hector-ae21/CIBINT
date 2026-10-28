# Definiciones · Tema 4

OSINT técnico: infraestructura y superficie de exposición. Estas definiciones explican el vocabulario utilizado en este tema. Se conservan los términos profesionales junto a su significado en palabras comunes.

[Volver al tema](README.md) · [Índice de la asignatura](../../README.md)

## Términos

- [Dominio, subdominio y URL](#dominio-subdominio-y-url)
- [IP, IPv4 e IPv6](#ip-ipv4-e-ipv6)
- [Activo, exposición, vulnerabilidad y riesgo](#activo-exposición-vulnerabilidad-y-riesgo)
- [Superficie de ataque externa](#superficie-de-ataque-externa)
- [WHOIS, RDAP y registrador](#whois-rdap-y-registrador)
- [DNS, resolvedor y caché](#dns-resolvedor-y-caché)
- [TTL y DNS pasivo](#ttl-y-dns-pasivo)
- [Puerto, protocolo y transporte](#puerto-protocolo-y-transporte)
- [HTTP, cabecera, cookie y banner](#http-cabecera-cookie-y-banner)
- [Faceta](#faceta)
- [Metadatos y huella documental](#metadatos-y-huella-documental)
- [TLS y certificado](#tls-y-certificado)
- [SAN, comodín y CT](#san-comodín-y-ct)
- [Índice de servicios](#índice-de-servicios)
- [Fingerprinting o identificación por señales](#fingerprinting-o-identificación-por-señales)
- [Proxy y alojamiento compartido](#proxy-y-alojamiento-compartido)
- [API y módulo](#api-y-módulo)
- [JSON, CSV y RFC](#json-csv-y-rfc)
- [OSINT](#osint)
- [Footprinting o reconocimiento de la huella pública](#footprinting-o-reconocimiento-de-la-huella-pública)
- [Alcance](#alcance)
- [Hecho, inferencia y supuesto](#hecho-inferencia-y-supuesto)
- [Atribución](#atribución)
- [Limitación](#limitación)
- [Bitácora](#bitácora)

### Dominio, subdominio y URL

Un **dominio** es un nombre de Internet, como `example.org`. Un **subdominio** añade un nivel, como `www.example.org`. Una **URL** es la dirección completa de un recurso y puede incluir protocolo, nombre y ruta. Un nombre parecido al de una empresa no demuestra que le pertenezca.

### IP, IPv4 e IPv6

Una **dirección IP** identifica un punto de comunicación en una red. **IPv4** e **IPv6** son dos versiones del protocolo, con formatos de dirección distintos. Una IP puede cambiar de usuario o alojar servicios de varias organizaciones.

### Activo, exposición, vulnerabilidad y riesgo

Un **activo** es un recurso que la organización utiliza o gestiona. La **exposición** describe su accesibilidad o la información visible desde fuera. Una **vulnerabilidad** es una debilidad que puede afectar a la seguridad. El **riesgo** valora el posible daño en unas condiciones concretas. Un servicio visible no demuestra una intrusión.

### Superficie de ataque externa

Conjunto de puntos accesibles desde fuera que podrían utilizarse contra la organización. Incluye webs, correo, acceso remoto y otros servicios. Su revisión distingue los activos propios, los contratados y los sistemas ajenos.

### WHOIS, RDAP y registrador

**WHOIS** y **RDAP** son mecanismos para consultar datos de registro de recursos de Internet. El **registrador** presta el servicio de registro de un dominio. Los datos del registro no identifican por sí solos al autor de la actividad de una web.

### DNS, resolvedor y caché

**DNS** es el sistema que permite consultar registros asociados a nombres de Internet. Un **resolvedor** tramita la consulta. La **caché** guarda temporalmente respuestas para reutilizarlas. El registro A contiene una dirección IPv4; AAAA contiene una IPv6. Los demás tipos se explican en el Tema 4.

### TTL y DNS pasivo

El **TTL** indica cuánto tiempo puede conservarse una respuesta DNS en caché. El **DNS pasivo** reúne respuestas observadas anteriormente por una fuente. Ni el TTL ni la primera observación del histórico indican por sí solos cuándo se creó un servicio.

### Puerto, protocolo y transporte

Un **puerto** es un número que ayuda a distinguir servicios de red. El **protocolo** establece las reglas de comunicación. **TCP** y **UDP** son protocolos de transporte; observar un puerto en uno de ellos no demuestra que exista en el otro. El número de puerto, por sí solo, no confirma qué aplicación responde.

### HTTP, cabecera, cookie y banner

**HTTP** es un protocolo utilizado para intercambiar recursos web. Una **cabecera** contiene información sobre la petición o la respuesta. Una **cookie** es un dato que la web pide al navegador que conserve y envíe en ciertas peticiones. Un **banner** es información que un servicio devuelve al comunicarse, como un saludo o una cabecera. Estas señales no describen todo el sistema.

### Faceta

En Shodan, una **faceta** resume todos los resultados de una consulta por un campo, como país, puerto, organización o producto. Permite ver la distribución antes de abrir resultados sueltos.

### Metadatos y huella documental

Los **metadatos** son datos sobre un archivo que el programa añade al crearlo o guardarlo, como autor, fechas, programa, ruta o impresora. No se ven al leer el documento. La **huella documental** es lo que el conjunto de documentos publicados revela sobre quien los publica. Un metadato con un nombre o un usuario es un dato personal.

### TLS y certificado

**TLS** protege las comunicaciones entre extremos. Un **certificado** relaciona una clave pública con nombres u otras identidades bajo unas condiciones. Ver un certificado no demuestra que el sitio sea honesto ni que no tenga fallos.

### SAN, comodín y CT

**SAN** es el campo de un certificado que recoge nombres alternativos. Un **comodín**, como `*.example.org`, cubre nombres bajo determinadas reglas, pero no enumera los que existen. Los **registros de transparencia de certificados (CT, del inglés Certificate Transparency)** recogen públicamente certificados o precertificados y permiten consultar los nombres incluidos en ellos. Una entrada no demuestra que el servicio siga activo o sea accesible desde Internet.

### Índice de servicios

Conjunto de observaciones recogidas por una plataforma sobre servicios accesibles en Internet. Shodan y Censys permiten consultar estos datos. Hay que distinguir la fecha en que la plataforma observó el servicio de la fecha en que se consulta su ficha.

### Fingerprinting o identificación por señales

Deducción de una tecnología a partir de cabeceras, cookies, respuestas u otras señales. La detección puede ser incompleta o equivocada y no confirma una vulnerabilidad.

### Proxy y alojamiento compartido

Un **proxy** es un intermediario en la comunicación. En el **alojamiento compartido**, varios clientes utilizan parte de la misma infraestructura. Por eso una dirección o cabecera puede describir al proveedor y no identificar al responsable de la aplicación.

### API y módulo

Una **API** permite que un programa consulte funciones o datos de otro servicio. Un **módulo** es una parte de una herramienta que realiza una tarea concreta. En una herramienta OSINT hay que revisar qué fuentes consulta cada módulo y qué datos envía.

### JSON, CSV y RFC

**JSON** es un formato de datos organizado mediante campos y valores. **CSV** guarda tablas como texto separado por un delimitador. Una **RFC** es un documento de la serie técnica utilizada para describir protocolos y otros aspectos de Internet; no todas las RFC tienen la misma condición de estándar.

### OSINT

Siglas de *Open Source Intelligence*, inteligencia de fuentes abiertas. Utiliza información accesible por medios permitidos y la analiza para responder a un encargo. Reunir enlaces sin comprobarlos todavía no produce inteligencia.

### Footprinting o reconocimiento de la huella pública

Identificación de nombres, documentos, canales y relaciones que una organización deja visibles. En el Tema 4 incluye dominios, direcciones y servicios técnicos. No consiste en recoger todo lo que aparezca.

### Alcance

Límites del trabajo: objetivos, preguntas, fuentes, periodo y acciones permitidas. Encontrar una nueva pista no amplía por sí solo lo que se puede investigar.

### Hecho, inferencia y supuesto

Un **hecho** es algo que se ha podido comprobar en las fuentes disponibles. Una **inferencia** es una interpretación razonada a partir de esos hechos. Un **supuesto** es una condición que se acepta provisionalmente para trabajar y que todavía necesita comprobación. Los tres deben distinguirse al escribir.

### Atribución

Asignar una actividad, una cuenta o una infraestructura a una persona u organización. Una coincidencia de nombre o de dirección IP no basta para hacerlo.

### Limitación

Condición que reduce lo que puede afirmarse: faltan datos, una fuente no está disponible o la observación es antigua. Algunas lecturas utilizan «laguna de información» para referirse a información que falta; en este repositorio se prefiere «limitación» o «información pendiente».

### Bitácora

Registro que se escribe mientras se investiga. Recoge qué se hizo, cuándo, para qué, con qué fuente, qué se encontró y qué se decidió después.

[Volver al tema](README.md) · [Volver al índice de términos](#términos)
