# Operación Delta · Diccionario de datos

Las muestras representan el material disponible a las 10:00 UTC del 21 de septiembre de 2026. Todas las marcas con `Z` están en UTC. Los campos vacíos significan «no aportado», no una respuesta negativa.

Los dominios `.example` y las IP de `192.0.2.0/24`, `198.51.100.0/24` y `203.0.113.0/24` son de documentación. No se ejecutan consultas para obtener estos resultados.

## `inventario.csv`

| Campo | Significado |
|---|---|
| `activo_id` | Referencia de la declaración interna |
| `nombre` | Nombre del activo inventariado |
| `funcion` | Uso comunicado por sistemas |
| `relacion` | Propiedad o servicio contratado declarado |
| `responsable` | Área o proveedor que debería validarlo |
| `estado_declarado` | Estado según el inventario, no comprobación externa |
| `fecha_revision` | Última revisión comunicada |

El inventario puede ser incompleto o estar desactualizado. Que un nombre no aparezca no demuestra que no se utilice.

## `registro.csv`

| Campo | Significado |
|---|---|
| `registro_id` | Referencia de la consulta simulada |
| `recurso` y `tipo` | Dominio o rango al que se refiere |
| `registrador_o_asignatario` | Prestador del registro o receptor de la asignación |
| `creacion`, `actualizacion`, `expiracion` | Fechas disponibles del registro |
| `nameservers` | Servidores de nombres declarados, separados por `;` |
| `consulta_en` | Momento de consulta |
| `limite` | Reserva para utilizar el dato |

Las asignaciones se inventan para el ejercicio. En Internet, esos rangos están reservados para documentación, no asignados a Proveedor Nube.

## `dns.csv`

| Campo | Significado |
|---|---|
| `dns_id` | Identificador único de observación |
| `nombre`, `tipo`, `valor` | Registro observado; MX incluye prioridad antes del nombre |
| `ttl_segundos` | TTL recogido en la respuesta observada |
| `observado_en` | Fecha de la respuesta que recogió la fuente |
| `fuente` | Procedencia simulada, con indicación de histórico cuando corresponde |
| `consulta_en` | Momento de incorporación al expediente |

Cada fila es una observación. No representa todos los registros del nombre ni un periodo continuo de resolución. No se aportan observaciones posteriores a mayo para `legado.darsena.example`, ni respuestas DNS para `pruebas.darsena.example`.

## `certificados.csv`

| Campo | Significado |
|---|---|
| `certificado_id` | Identificador docente del certificado; no es una huella criptográfica |
| `entrada_id` | Identificador de entrada CT; permite citar filas duplicadas |
| `nombres_san` | Nombres incluidos en SAN, separados por `;` |
| `emisor` | Autoridad ficticia |
| `valido_desde`, `valido_hasta` | Intervalo declarado en el certificado |
| `registrado_en` | Momento de registro de la entrada CT simulada |
| `consulta_en`, `fuente` | Obtención y procedencia |

DEL-C02 aparece en dos registros: CT-002 y CT-003. Son dos entradas del mismo certificado, no dos activos ni prueba de dos despliegues. DEL-C04 es un comodín y no enumera todos los nombres de Dársena. La presencia en CT no acredita un servicio activo.

## `servicios.csv`

| Campo | Significado |
|---|---|
| `servicio_id` | Identificador único de observación |
| `ip`, `puerto`, `transporte` | Punto observado; transporte indica TCP en estas muestras |
| `protocolo` | Identificación declarada por el índice |
| `nombre_asociado` | Nombre relacionado con la observación |
| `origen_nombre` | Cómo se obtuvo esa relación |
| `banner_resumido` | Resumen docente de la respuesta, no una respuesta completa |
| `observado_en` | Momento en que el índice observó el servicio |
| `consulta_en` | Momento en que se consultó el registro |
| `fuente` | Índice simulado A o B |

Las observaciones HTTPS de la misma IP pueden corresponder a sitios distintos según el nombre usado en la petición. No se aportan pruebas de acceso, configuraciones completas ni versiones de software. DEL-S04 no acredita que se pueda iniciar sesión, una vulnerabilidad o una intrusión.

## `respuesta-http.txt`

DEL-H01 amplía la muestra de DEL-S01. No es una corroboración independiente. `PHPSESSID=muestra-docente` es texto ficticio sin valor de sesión; se incluye para discutir señales de tecnología, no para utilizarlo.
