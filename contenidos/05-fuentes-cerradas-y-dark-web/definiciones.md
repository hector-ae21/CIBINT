# Definiciones · Tema 5

Fuentes cerradas y dark web. Estas definiciones explican el vocabulario utilizado en este tema. Se conservan los términos profesionales junto a su significado en palabras comunes.

[Volver al tema](README.md) · [Índice de la asignatura](../../README.md)

## Términos

- [Surface web, deep web y dark web](#surface-web-deep-web-y-dark-web)
- [Credenciales y filtración](#credenciales-y-filtración)
- [OSINT](#osint)
- [Alcance](#alcance)
- [Datos personales y tratamiento](#datos-personales-y-tratamiento)
- [Minimización y proporcionalidad](#minimización-y-proporcionalidad)
- [OPSEC o seguridad operacional](#opsec-o-seguridad-operacional)
- [Identidad de investigación](#identidad-de-investigación)
- [Limitación](#limitación)
- [Bitácora](#bitácora)
- [Fuente cerrada](#fuente-cerrada)
- [Tor, Tor Browser y servicio onion](#tor-tor-browser-y-servicio-onion)
- [Nodo, circuito y nodo de salida](#nodo-circuito-y-nodo-de-salida)
- [HTTPS y TLS](#https-y-tls)
- [Cookie y token de sesión](#cookie-y-token-de-sesión)
- [Infostealer](#infostealer)
- [Autenticación multifactor o MFA](#autenticación-multifactor-o-mfa)
- [Reutilización y credential stuffing](#reutilización-y-credential-stuffing)
- [Hash, prefijo y consulta por rango](#hash-prefijo-y-consulta-por-rango)
- [API y clave de API](#api-y-clave-de-api)
- [Procedencia e independencia](#procedencia-e-independencia)
- [Fechas del incidente y de observación](#fechas-del-incidente-y-de-observación)
- [Deduplicación](#deduplicación)
- [Resultado negativo y falta de cobertura](#resultado-negativo-y-falta-de-cobertura)
- [RGPD y brecha de datos personales](#rgpd-y-brecha-de-datos-personales)
- [Conservación y custodia](#conservación-y-custodia)
- [Confianza](#confianza)

### Surface web, deep web y dark web

La **surface web** es la parte de la web que los buscadores pueden indexar. La **deep web** reúne contenido que no aparece en esos índices, como una página privada tras iniciar sesión. La **dark web** utiliza redes y programas específicos de acceso. No son sinónimos.

### Credenciales y filtración

Las **credenciales** son datos utilizados para acceder a una cuenta, como un nombre de usuario y una contraseña. Una **filtración** expone información fuera de sus destinatarios previstos. Encontrar credenciales publicadas no autoriza a utilizarlas ni a probar si funcionan.

### OSINT

Siglas de *Open Source Intelligence*, inteligencia de fuentes abiertas. Utiliza información accesible por medios permitidos y la analiza para responder a un encargo. Reunir enlaces sin comprobarlos todavía no produce inteligencia.

### Alcance

Límites del trabajo: objetivos, preguntas, fuentes, periodo y acciones permitidas. Encontrar una nueva pista no amplía por sí solo lo que se puede investigar.

### Datos personales y tratamiento

Los **datos personales** permiten identificar a una persona, directa o indirectamente. Su **tratamiento** incluye recogerlos, guardarlos, consultarlos, relacionarlos o compartirlos. Que estén publicados no elimina las obligaciones al utilizarlos.

### Minimización y proporcionalidad

La **minimización** consiste en utilizar solo los datos necesarios. La **proporcionalidad** exige valorar si la acción es adecuada para el fin y si existe una alternativa que cause menos daño o exposición.

### OPSEC o seguridad operacional

Medidas para proteger la investigación y a quienes participan en ella. Se revisa qué puede revelar lo que se está haciendo, quién podría aprovecharlo y cómo reducir esa exposición.

### Identidad de investigación

Cuenta o forma de presentarse utilizada para investigar. Puede ser institucional o virtual, entre otras opciones. Su uso depende de la autorización y de las acciones previstas; en las prácticas no se crean perfiles falsos ni se contacta con los sujetos del caso.

### Limitación

Condición que reduce lo que puede afirmarse: faltan datos, una fuente no está disponible o la observación es antigua. Debe indicarse qué información falta y cómo podría modificar la valoración.

### Bitácora

Registro que se escribe mientras se investiga. Recoge qué se hizo, cuándo, para qué, con qué fuente, qué se encontró y qué se decidió después.

### Fuente cerrada

Fuente cuyo acceso está limitado por una autorización, una cuenta, una suscripción u otras condiciones. Tener acceso técnico no permite utilizar o compartir libremente todo su contenido.

### Tor, Tor Browser y servicio onion

**Tor** es una red que distribuye las conexiones entre nodos para mejorar determinadas protecciones de privacidad. **Tor Browser** es el navegador preparado para utilizarla. Un **servicio onion** se alcanza dentro de Tor mediante una dirección `.onion`. Una web convencional visitada con Tor Browser no se convierte en un servicio onion.

### Nodo, circuito y nodo de salida

Un **nodo** es un servidor de la red Tor. El **circuito** es el recorrido construido entre nodos. Para llegar a una web convencional se utiliza un **nodo de salida**. Los servicios onion no utilizan esa salida hacia la web convencional. Estos recorridos no garantizan anonimato absoluto.

### HTTPS y TLS

**TLS**, *Transport Layer Security*, protege comunicaciones. **HTTPS** es HTTP sobre TLS y se utiliza para conexiones web protegidas. El cifrado del transporte no demuestra que el contenido o el operador de una web sean fiables.

### Cookie y token de sesión

Una **cookie** es un dato que una web almacena y recupera del navegador; no todas son de autenticación. Un **token de sesión** representa una sesión o autorización. No debe suponerse que cambiar una contraseña invalida cualquier token en todos los servicios.

### Infostealer

Programa malicioso que sustrae información de un equipo. Los informes de esa actividad pueden describir datos de autenticación, sesiones u otros elementos. Conocer la categoría no exige obtener sus valores ni utilizar el programa.

### Autenticación multifactor o MFA

La autenticación multifactor, **MFA** por sus siglas en inglés, verifica más de un factor distinto, como un secreto conocido y la posesión de un dispositivo. Su presencia no permite suponer que cualquier sesión robada quede protegida. Deben distinguirse el acceso inicial y la continuidad de la sesión.

### Reutilización y credential stuffing

La **reutilización** consiste en emplear el mismo secreto en varias cuentas. El **credential stuffing** intenta aprovechar credenciales obtenidas de otras fuentes para entrar en servicios. Su descripción permite entender el riesgo; las prácticas no incluyen pruebas de inicio de sesión.

### Hash, prefijo y consulta por rango

Un **hash** es una huella calculada sobre datos. El **prefijo** es su parte inicial y el **sufijo**, la restante. En el modelo de consulta por rango o **k-anonimato** de Pwned Passwords se utiliza un prefijo de SHA-1 y se compara el sufijo localmente dentro del conjunto recibido. Ese uso identifica una consulta de un protocolo existente; no recomienda SHA-1 para guardar contraseñas ni garantiza anonimato absoluto. Las huellas SHA-256 y MD5 del expediente identifican archivos, con otra finalidad.

### API y clave de API

Una **API**, interfaz de programación de aplicaciones, permite que un programa consulte funciones de un servicio. Una **clave de API** puede autorizar esas consultas. Es un secreto de acceso y no se publica para demostrar que una consulta funcionó.

### Procedencia e independencia

La **procedencia** describe de dónde llega un dato y sus transformaciones. La **independencia** se valora para cada afirmación: dos alertas que copian el mismo origen no son dos confirmaciones independientes del hecho.

### Fechas del incidente y de observación

La **fecha del incidente** corresponde al hecho descrito. La **fecha de observación** indica cuándo una fuente vio o incorporó el dato. También se conservan publicación y consulta propia cuando se conocen. Una incorporación reciente puede corresponder a información antigua.

### Deduplicación

Identificación de registros que representan el mismo objeto para evitar contarlo varias veces. Primero se define la unidad: cuenta, dirección, combinación o referencia de incidente. Personas, cuentas y filas no son unidades intercambiables.

### Resultado negativo y falta de cobertura

Un **resultado negativo** no encuentra coincidencias en una consulta válida. La **falta de cobertura** significa que no se dispone de observación suficiente sobre lo que se estudia. Un error de acceso no es un resultado negativo ni demuestra ausencia de exposición.

### RGPD y brecha de datos personales

**RGPD** significa Reglamento General de Protección de Datos. Una **brecha de datos personales** puede afectar a su confidencialidad, integridad o disponibilidad. No toda alerta acredita por sí sola una brecha; deben evaluarse los hechos y las obligaciones por quienes tengan esa responsabilidad.

### Conservación y custodia

La **conservación** define qué se guarda, para qué y durante cuánto tiempo. La **custodia** documenta quién lo controla y qué cambios o accesos se producen. Un hash permite comparar contenido, pero no prueba su origen, veracidad o autorización.

### Confianza

Expresa el apoyo y la calidad de la evidencia para una valoración. La prioridad de revisar un riesgo no equivale al grado de certeza sobre su causa.

[Volver al tema](README.md) · [Volver al índice de términos](#términos)
