# Recursos · OSINT técnico: infraestructura y superficie de exposición

Las referencias permiten verificar conceptos y sintaxis. No hay que leer completas las RFC ni realizar conexiones para resolver el caso.

## Registro, nombres y certificados

| Recurso | Qué consultar | Para qué sirve |
|---|---|---|
| ICANN, [Registration Data Access Protocol](https://www.icann.org/rdap) | Descripción y guía para usuarios | Distinguir RDAP y WHOIS |
| IETF, [RFC 1034](https://www.rfc-editor.org/rfc/rfc1034) | Apartados 3 y 5 | Entender nombres, caché y resolución |
| IETF, [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035) | Apartado 3.3 | Comprobar tipos de registro básicos |
| IETF, [RFC 3596](https://www.rfc-editor.org/rfc/rfc3596) | Apartado 2 | Consultar el registro AAAA |
| Microsoft, [Resolve-DnsName](https://learn.microsoft.com/en-us/powershell/module/dnsclient/resolve-dnsname) | Ejemplos y parámetros `Name`, `Type`, `DnsOnly` | Preparar una demostración DNS autorizada |
| IETF, [RFC 5280](https://www.rfc-editor.org/rfc/rfc5280) | Apartados 4.1 y 4.2.1.6 | Leer campos y SAN de certificados |
| IETF, [RFC 9162](https://www.rfc-editor.org/rfc/rfc9162) | Introducción | Entender la finalidad de CT |
| [crt.sh: respuesta JSON para www.example.org](https://crt.sh/?q=www.example.org&output=json) | Campos de una entrada CT | Observar nombres y fechas sin visitar el servicio certificado |

## Índices y señales de tecnología

| Recurso | Qué consultar | Para qué sirve |
|---|---|---|
| Shodan, [Search Query Fundamentals](https://help.shodan.io/the-basics/search-query-fundamentals) | Banner y filtros | Formular búsquedas y leer el resultado |
| Censys, [Quick Start Guide](https://docs.censys.com/docs/platform-quickstart-guide) | Tipos de datos y resultados | Distinguir hosts, sitios y certificados |
| Censys, [Censys Query Language](https://docs.censys.com/docs/censys-query-language) | Consultas por campo y campos anidados | Evitar coincidencias entre servicios diferentes |
| MDN, [Server header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Server) | Descripción | Interpretar una señal de producto con sus límites |
| SecurityTrails, [Overview](https://docs.securitytrails.com/docs/overview) | DNS, IP y registro | Comparar observaciones actuales e históricas |
| urlscan.io, [Search API Reference](https://urlscan.io/docs/search/) | Campos y semántica | Diferenciar página principal y recursos contactados |
| VirusTotal, [Searching](https://docs.virustotal.com/docs/searching) y [Domains](https://docs.virustotal.com/reference/domains-object) | Procesamiento de consultas e informes | Interpretar relaciones sin prometer que toda consulta sea pasiva |

## Ejemplos reales del tema

| Referencia | Hecho documentado | Concepto aplicado |
|---|---|---|
| Facebook, [informe de la caída del 4 de octubre de 2021](https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/), publicado el 5 de octubre | La retirada de rutas volvió inaccesible DNS | Observación externa frente a causa interna |
| Google, [incidente DigiNotar](https://security.googleblog.com/2011/08/update-on-attempted-man-in-middle.html), 29 de agosto de 2011 | Uso de un certificado fraudulento | Certificado, confianza y legitimidad |
| GitHub, [informe del ataque del 28 de febrero de 2018](https://github.blog/engineering/infrastructure/ddos-incident-report/), publicado el 1 de marzo | DDoS mediante amplificación memcached | Exposición, transporte e impacto |
| Cloudflare, [Memcrashed](https://blog.cloudflare.com/memcrashed-major-amplification-attacks-from-port-11211/), 27 de febrero de 2018 | Exposición de memcached por UDP | Función y necesidad del servicio publicado |

Las interfaces, campos y condiciones de acceso pueden cambiar. Para una demostración se comprueba la documentación oficial y se utiliza únicamente el objetivo autorizado por el docente.

## Espacios de documentación

- [RFC 2606](https://www.rfc-editor.org/rfc/rfc2606): nombres reservados, incluido `.example`.
- [RFC 5737](https://www.rfc-editor.org/rfc/rfc5737): bloques IPv4 utilizados en las muestras.

## Para repasar

Consulta el [catálogo de herramientas](herramientas.md), prepara la [elección](casos/operacion-delta/02-eleccion-de-herramientas.md) y aplica después la [obtención](casos/operacion-delta/04-obtencion-con-herramientas.md). Para automatización, consulta los repositorios de [SpiderFoot](https://github.com/smicallef/spiderfoot) y [OWASP Amass](https://github.com/owasp-amass/amass). Para relaciones, usa la [documentación de Maltego](https://docs.maltego.com/en/support/home). Para señales web, consulta [DevTools](https://developer.chrome.com/docs/devtools/network/) y [Wappalyzer](https://www.wappalyzer.com/apps/). Las capturas tienen sus [referencias y originales](../../imagenes/03-04-capturas.md).

En [Operación Delta](casos/operacion-delta/README.md), explica por qué una IP compartida, una entrada CT y un registro histórico requieren conclusiones distintas. Conserva el razonamiento con las [plantillas comunes](../../plantillas/).
