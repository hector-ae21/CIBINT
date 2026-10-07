# Operación Prisma · Diccionario de datos

Todas las fechas con `Z` se expresan en UTC. Las fechas sin hora reflejan el día disponible en la muestra. El corte de información es el 21 de septiembre de 2026 a las 09:30 UTC.

## `peticion.txt`

Resume la petición recibida y el contexto previo. La firma es visible, no una identidad verificada. Sin cabeceras no se puede valorar la autenticación del correo. No incluye datos bancarios ni personales innecesarios.

## `fuentes.csv`

| Campo | Significado |
|---|---|
| `fuente_id` | Referencia estable para citar la muestra |
| `tipo` | Naturaleza de la fuente; distingue la documentación interna |
| `referencia` | Dirección o referencia simulada del material |
| `fecha_publicacion` | Día de publicación disponible, no fecha de todos los hechos descritos |
| `fecha_consulta` | Momento de incorporación al expediente |
| `resumen` | Contenido relevante seleccionado para el ejercicio |
| `dependencia` | Origen conocido; ayuda a evaluar independencia |
| `limite` | Restricción al utilizar la información |

PRI-F03 es una referencia societaria inventada, no un documento auténtico del BORME. PRI-F04 es documentación interna aportada: se utiliza como punto de partida conocido, no se presenta como hallazgo OSINT.

## `perfiles.csv`

| Campo | Significado |
|---|---|
| `perfil_id` | Identificador de muestra; no es un identificador civil |
| `servicio` | Plataforma ficticia |
| `identificador` | Alias de cuenta en ese servicio |
| `nombre_visible` | Nombre que muestra la cuenta |
| `organizacion_declarada` | Organización que la cuenta dice representar |
| `puesto_declarado` | Función que la cuenta afirma desempeñar |
| `enlace_desde` | Referencia que enlaza al perfil, si consta |
| `fecha_consulta` | Momento de consulta simulado |
| `limite` | Precaución para interpretar el perfil |

Un campo declarado no está verificado solo por aparecer en el CSV. PRI-P02 se incluye para trabajar una coincidencia de nombre, sin ampliar la investigación a su vida personal.

## `publicaciones.csv`

| Campo | Significado |
|---|---|
| `publicacion_id` | Referencia para citar cada publicación |
| `cuenta` | Cuenta que publica, no identidad comprobada |
| `referencia` | Dirección ficticia de la publicación |
| `fecha_publicacion` | Momento de publicación, distinto del hecho narrado |
| `fecha_consulta` | Momento de incorporación al expediente |
| `resumen` | Afirmación que debe evaluarse |
| `origen_declarado` | Referencia de la que depende, cuando se conoce |
| `imagen_id` | Identificador de la imagen referida; vacío si no corresponde |

`IMG-01` representa la misma imagen en PRI-S01, PRI-S05 y PRI-F06. Se facilita esa igualdad para resolver el ejercicio sin una imagen real ni búsqueda inversa. El uso anterior demuestra que la imagen ya circulaba en 2023; no identifica a su fotógrafo ni revela qué ocurrió en la supuesta reunión de 2026.
