# Operación Bruma · Enunciado

Operación Bruma es un caso ficticio construido para trabajar los conceptos del Tema 1. La Universidad Boreal, sus dominios, sus usuarios y los hechos descritos no representan una organización real. Las direcciones empleadas pertenecen a espacios reservados para documentación.

## Situación

A las 08:30, el responsable de seguridad de la Universidad Boreal recibe varios avisos sobre correos que anuncian una supuesta actualización urgente del acceso al campus virtual. Algunos destinatarios han abierto el enlace y tres indican que introdujeron su nombre de usuario.

El responsable necesita una valoración inicial antes de las 14:00 para decidir si activa una comunicación general, bloquea temporalmente la infraestructura observada y reasigna recursos del equipo de seguridad.

## Petición inicial

> Determinar si los mensajes recibidos durante la mañana forman parte de una misma campaña y proponer las medidas inmediatas más proporcionadas.

La petición todavía debe convertirse en un requerimiento de inteligencia: es necesario precisar destinatario, decisión, alcance, plazo, preguntas y producto esperado.

## Material disponible

| Referencia | Muestra | Contenido |
|---|---|---|
| BRU-MSG | [mensajes.csv](datos/mensajes.csv) | Catorce mensajes conservados y sus rasgos básicos |
| BRU-DNS | [resolucion-dns.csv](datos/resolucion-dns.csv) | Dos observaciones pasivas de resolución de dominios |
| BRU-USR | [avisos-usuarios.csv](datos/avisos-usuarios.csv) | Cinco comunicaciones resumidas y anonimizadas |
| BRU-AUT | [resumen-autenticacion.csv](datos/resumen-autenticacion.csv) | Resultado agregado de una revisión preliminar de accesos |
| BRU-DIC | [diccionario de datos](datos/README.md) | Significado, alcance y límites de cada campo |

## Información conocida a las 08:30

| ID | Observación comunicada al equipo |
|---|---|
| D01 | Se han conservado 14 mensajes recibidos entre las 07:52 y las 08:21 |
| D02 | Ocho mensajes enlazan a `acceso-boreal.example` |
| D03 | Cuatro mensajes enlazan a `campus-boreal.example` |
| D04 | Dos mensajes no contienen enlaces |
| D05 | Ambos dominios resolvían a `198.51.100.42` a las 08:14 |
| D06 | Los asuntos emplean variaciones de «verificación pendiente», «cuenta suspendida» y «actualización del campus» |
| D07 | Tres usuarios indican que introdujeron su nombre de usuario, pero no la contraseña |
| D08 | No se dispone todavía de todas las cabeceras de correo |
| D09 | La revisión preliminar no ha confirmado accesos anómalos |
| D10 | El dominio oficial de la universidad es `boreal.example` |

## Condiciones del análisis

- El análisis se limita al expediente facilitado; no requiere búsquedas ni interacción en Internet.
- No se presupone que una coincidencia de infraestructura demuestre autoría.
- «No confirmado» no equivale a «inexistente».
- Toda conclusión debe indicar qué evidencia la sostiene y qué información falta.
- Las medidas propuestas deben ser defensivas, reversibles y proporcionadas a la evidencia disponible.

Los apartados prácticos del caso se enlazan desde las secciones correspondientes del [Tema 1](../../README.md).
