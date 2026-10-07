# Operación Delta · Obtención con herramientas

Se realiza después de [elegir herramientas](02-eleccion-de-herramientas.md) e [interpretar las fuentes técnicas](03-registro-dns-y-certificados.md). Recupera el plan y utiliza la opción que mejor responda a la pregunta, no todas por obligación.

## Objetivo y preparación

Para registro, DNS, CT e índices existentes se utiliza **`example.org`**, un dominio de documentación mantenido por [IANA](https://www.iana.org/help/example-domains), o el dominio autorizado que indique el docente. No se realiza reconocimiento activo amplio ni se solicita un escaneo nuevo. Las IP observadas solo se utilizan para consultar registros ya disponibles.

Los nombres `darsena.example` son ficticios. Sus relaciones se analizan con las muestras DEL. Las consultas públicas se guardan por separado en el [registro de práctica](registro-practica.md).

## Consultar la fuente elegida

### Registro

En [ICANN Lookup](https://lookup.icann.org/en), introduce el dominio sin protocolo ni ruta. Conserva registrador, eventos y servidores de nombres. Registra campos ausentes; no los completes por suposición.

### DNS

En Windows, si elegiste DNS, ejecuta los tipos necesarios:

```powershell
Get-Date -Format o
Resolve-DnsName -Name example.org -Type A -DnsOnly
Resolve-DnsName -Name example.org -Type AAAA -DnsOnly
Resolve-DnsName -Name example.org -Type NS -DnsOnly
```

Con dig disponible:

```bash
date -u +%Y-%m-%dT%H:%M:%SZ
dig example.org A
dig example.org AAAA
dig example.org NS
```

Conserva nombre, tipo, valor y TTL. Diferencia una respuesta sin registros de un fallo de consulta. Si copias una IP para consultar un índice, registra esta procedencia.

### Certificados

Consulta la [respuesta de crt.sh para www.example.org](https://crt.sh/?q=www.example.org&output=json). El resultado es JSON: selecciona una entrada y conserva `id`, `name_value`, `not_before`, `not_after` y `serial_number`. Distingue identificador de entrada y certificado y agrupa las entradas repetidas cuando se pueda comprobar que corresponden al mismo certificado. Si utilizas la interfaz web, conserva también el enlace de detalle. No visites un nombre encontrado para comprobar su servicio: aquí se consulta CT.

## Consultar servicios indexados

Si elegiste Shodan o Censys, prepara una consulta por la IP observada y otra con un puerto. Sustituye el marcador por el valor real:

| Plataforma | Consulta orientativa |
|---|---|
| Shodan | `ip:IP_OBSERVADA port:443` |
| Censys Platform | `host.ip=IP_OBSERVADA and host.services: (port=443 and protocol=HTTP)` |

1. Comprueba la sintaxis en el [catálogo](../../herramientas.md).
2. Ejecuta con tu acceso o participa en la consulta docente.
3. Abre una ficha disponible y conserva IP, servicio, respuesta, nombre asociado y fecha de observación.
4. Compara con una segunda fuente si eso figuraba en el plan.
5. Si no hay resultados, conserva la consulta. Si hay una restricción de cuenta, registra esa restricción; no la llames «servicio ausente».

Una exportación real y fechada aportada por el docente permite analizar datos cuando no hay acceso. Se indica quién consultó la plataforma y cuándo. Las capturas del catálogo y los CSV simulados no se presentan como resultados de una consulta propia.

## Organizar con Maltego o valorar una obtención automatizada

Si elegiste Maltego para organizar relaciones, crea un grafo con DEL-D03, DEL-D04, DEL-C01 y DEL-S01. Etiqueta enlaces por tipo, referencia y fecha. Añade DEL-D09 como tercero separado, sin atribuirlo a Dársena.

Si elegiste SpiderFoot o Amass para una pregunta más amplia, presenta primero la configuración: entrada, fuentes o módulos, salida esperada y acciones excluidas. Solo se ejecuta sobre el objetivo expresamente autorizado para esa obtención. El dominio de referencia de esta práctica no autoriza a activar módulos generales. Comprueba instalación y opciones en la versión actual del proyecto.

Cuando no existe ese alcance, utiliza las fuentes acotadas elegidas como alternativa. Explica qué parte del resultado automatizado has obtenido manualmente y cuál quedó pendiente.

## Históricos y páginas archivadas

Si elegiste SecurityTrails o urlscan.io, usa el dominio público de referencia delimitado en el caso. Solo se consultan datos existentes.

1. Para SecurityTrails, selecciona dominio y tipo de registro. Conserva una observación y su fecha; compara otra si está disponible.
2. Para urlscan.io, prepara `page.domain:example.org` y acota el periodo si hace falta. Abre un resultado existente sin solicitar otro análisis.
3. Conserva fecha de la observación, URL, referencia y relación con el dominio. En urlscan distingue página principal y recursos externos.
4. Registra una restricción o falta de resultados como tal. No demuestra que el sitio nunca existiese.
5. Aplica el criterio a DEL-D y DEL-S03: los resultados públicos no rellenan las lagunas ficticias de Dársena.

## Contrastar un informe de reputación

Si elegiste VirusTotal, define primero si se interpreta un informe preparado o si el alcance permite consultar un indicador público con el procesamiento descrito en su documentación. La autorización de consultas RDAP, DNS y CT sobre `example.org` no se amplía automáticamente a nuevos análisis.

Conserva referencia y fecha del informe. Identifica una relación DNS o de certificado y explica qué aporta; separa detecciones, relaciones y atribución. No envíes datos internos ni descargues archivos relacionados. Si el acceso no permite la consulta, utiliza el informe aportado y registra que no es una obtención propia.

## Contrastar tecnologías

Se retoma después de [Tecnologías y prioridades](06-tecnologias-y-prioridades.md).

1. Parte de DEL-H01 y redacta qué señales contiene y qué no permiten confirmar.
2. Para una comprobación real, utiliza una web propia o expresamente autorizada que indique el docente.
3. En DevTools, abre Network / Red, recarga, selecciona la petición de documento y lee Headers / Cabeceras y Response / Respuesta.
4. Si utilizas Wappalyzer, compara una detección con la cabecera o elemento que podría sostenerla. Si no detecta nada, registra el límite.
5. No deduzcas una vulnerabilidad a partir del producto o versión anunciados.

Si no existe una web autorizada para esa comprobación, el análisis de DEL-H01 continúa sin realizar una conexión nueva.

## Revisar el plan y volver al caso

| Pregunta | Opción elegida | Consulta ejecutada | Fecha de consulta | Fecha de observación | Resultado | Límite y siguiente paso |
|---|---|---|---|---|---|---|
| | | | | | | |

Explica un cambio de herramienta o un resultado que no resolvió la pregunta. Continúa con [Servicios indexados](05-servicios-indexados.md) para interpretar temporalidad e independencia, y después con [Tecnologías y prioridades](06-tecnologias-y-prioridades.md).
