# Recursos · Fuentes cerradas y dark web

[Volver al tema](README.md) · [Herramientas](herramientas.md) · [Definiciones](definiciones.md)

Referencias consultadas el **18 de noviembre de 2026**. Las páginas técnicas y sus condiciones pueden cambiar. Las lecturas permiten verificar el tema sin buscar muestras de filtraciones ni acceder a mercados.

## Redes y acceso

| Fuente primaria | Lectura | Aplicación |
|---|---|---|
| Tor Project, [About Tor Browser](https://support.torproject.org/tor-browser/getting-started/about-tor-browser/) | Funcionamiento | Distinguir navegador, red y destino |
| Tor Project, [Onion services](https://support.torproject.org/tor-browser/features/onion-services/) | Direcciones y acceso | Separar identidad técnica y confianza en el operador |
| Tor Project, [Glossary](https://support.torproject.org/glossary/) | Circuit, relay y onion service | Entender nodos y recorridos |
| Tor Project, [Tor Browser best practices](https://support.torproject.org/tor-browser/security/using-tb-safely/) | Aplicaciones, formularios y documentos | Explicar límites de protección |
| Tor Project, [Security levels](https://support.torproject.org/tor-browser/features/security-levels/) | Standard, Safer y Safest | Justificar configuración |
| Tor Project, [Attacks on onion routing](https://support.torproject.org/about-tor/security/attacks-on-onion-routing/) | Correlación de tráfico | Evitar afirmaciones de anonimato absoluto |
| Tor Project, [comprobación de conexión](https://check.torproject.org/) | Resultado de la petición | Demostración opcional sin publicar la IP |
| Tor Project, [directorio oficial de servicios onion](https://onion.torproject.org/) | Verificación de direcciones `.onion` del Proyecto Tor | Contrastar una dirección `.onion` contra su fuente oficial |
| Proton, [acceso oficial mediante Tor](https://proton.me/tor) | Dirección onion verificada y recomendaciones | Ejemplo de servicio legítimo verificable en abierto |
| Ahmia, [buscador de servicios onion](https://ahmia.fi/) | Indexación con filtro de contenido ilegal grave | Observar cómo se indexa Tor y sus límites de cobertura |
| Ransomware.live, [seguimiento de sitios de extorsión](https://www.ransomware.live/) | Registro público de grupos y publicaciones de ransomware | Estudiar el funcionamiento de los *Data Leak Sites* sin conectarse a servidores criminales |

## Referencias de exposición y consultas

| Fuente primaria | Lectura | Aplicación |
|---|---|---|
| HIBP, [Frequently Asked Questions](https://haveibeenpwned.com/FAQs) | Cuentas, contraseñas y verificaciones | Diferenciar funciones, cobertura y permisos |
| HIBP, [Pwned Passwords](https://haveibeenpwned.com/Passwords) | Modelo de consulta por prefijo | Entender qué se envía y qué prueba un resultado |
| HIBP, [API Documentation](https://haveibeenpwned.com/api/v3) | Autorización, rangos y códigos de respuesta | Interpretar acceso y errores |
| IETF, [RFC 6151](https://www.rfc-editor.org/rfc/rfc6151) | Limitaciones de MD5 | Separar huella complementaria y garantía de seguridad |
| IETF, [RFC 2606](https://www.rfc-editor.org/rfc/rfc2606) | Nombres reservados | Uso de `.example` en el expediente |
| OWASP, [Password Storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) | Hash y cifrado; almacenamiento | Evitar interpretar un hash como prueba de contraseña recuperada o de ausencia de riesgo |
| OWASP, [Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) | Identificadores e invalidación | Distinguir credencial y sesión |
| NIST, [SP 800-63B-4: Session Management](https://pages.nist.gov/800-63-4/sp800-63b/session/) | Continuidad y secretos de sesión | Diferenciar autenticación inicial y uso posterior |

## Marco legal

| Referencia | Lectura delimitada | Aplicación |
|---|---|---|
| [RGPD, Reglamento (UE) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=es) | Artículos 5, 6, 32, 33 y 34 | Finalidad, base del tratamiento, seguridad y respuesta a brechas |
| [Ley Orgánica 3/2018](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673) | Marco español de protección de datos | Complementar la lectura del RGPD |
| [Código Penal](https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444) | Artículos 197, 197 bis y 197 ter | Distinguir acciones y accesos no autorizados |
| AEPD, [Notificación de brechas](https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/medidas-de-cumplimiento/brechas-de-datos-personales-notificacion) | Riesgo, constancia y destinatarios | Separar notificación a autoridad y comunicación a afectados |

Las versiones consolidadas facilitan la consulta. Para una decisión profesional debe identificarse la redacción aplicable y, cuando proceda, la publicación oficial correspondiente. La práctica no pide determinar responsabilidades penales ni resolver un caso jurídico individual.

## Casos documentados

| Caso y fuente primaria | Lectura necesaria | Exclusiones |
|---|---|---|
| Policía de Países Bajos, [Operation Cookiemonster](https://www.politie.nl/en/news/2023/april/5/operation-cookiemonster.html), 5 de abril de 2023 | Genesis Market y categorías de datos | No acceder al mercado ni buscar muestras |
| Europol, [operación contra Genesis Market](https://www.europol.europa.eu/media-press/newsroom/news/takedown-of-notorious-hacker-marketplace-selling-your-identity-to-criminals), abril de 2023 | Contexto institucional; puede requerir JavaScript | Fuente complementaria, no segunda muestra de credenciales |
| Troy Hunt, [Collection #1](https://www.troyhunt.com/the-773-million-record-collection-1-data-reach/), 17 de enero de 2019 | Introducción, unidades y procedencia | No abrir enlaces a listas, muestras o archivos del conjunto |

Los ejercicios están en [Casos reales](casos/casos-reales.md). Estas lecturas no son evidencia de la entidad ficticia de [Operación Umbral](casos/operacion-umbral/README.md).
