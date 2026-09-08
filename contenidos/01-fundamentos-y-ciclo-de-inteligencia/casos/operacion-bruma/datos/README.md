# Operación Bruma · Diccionario de datos

Las muestras simulan el estado de la información a las 08:30. No constituyen registros técnicos completos y no deben interpretarse fuera de ese límite.

## `mensajes.csv`

| Campo | Significado |
|---|---|
| `mensaje_id` | Identificador ficticio asignado al mensaje |
| `hora_recepcion` | Hora local comunicada por el sistema de correo |
| `remitente_aparente` | Dirección visible para el destinatario; no prueba el origen real |
| `asunto_normalizado` | Versión simplificada del asunto para facilitar la comparación |
| `dominio_enlace` | Dominio extraído del enlace; vacío cuando no existe |
| `cabecera_disponible` | Indica si el expediente incluye cabeceras suficientes para una revisión posterior |

## `resolucion-dns.csv`

| Campo | Significado |
|---|---|
| `dominio` | Nombre consultado mediante una fuente pasiva ya facilitada |
| `tipo` | Tipo de registro observado |
| `valor` | Resultado de la resolución |
| `observado_en` | Momento al que corresponde la observación |
| `fuente` | Procedencia interna de la muestra |

La resolución compartida relaciona infraestructura en un momento concreto. No identifica por sí sola a la persona o grupo que la administra.

## `avisos-usuarios.csv`

| Campo | Significado |
|---|---|
| `aviso_id` | Identificador anónimo del aviso |
| `mensaje_id` | Mensaje al que se refiere |
| `hora_aviso` | Hora de comunicación al equipo |
| `interaccion_declarada` | Acción que el usuario afirma haber realizado |
| `dato_introducido` | Tipo de dato que declara haber facilitado |

Los avisos recogen declaraciones, no una verificación forense. Deben tratarse como una fuente relevante con limitaciones propias.

## `resumen-autenticacion.csv`

| Campo | Significado |
|---|---|
| `intervalo` | Periodo revisado |
| `eventos_revisados` | Número agregado de eventos considerados |
| `fallos_autenticacion` | Fallos registrados, sin atribución causal |
| `accesos_anomalos_confirmados` | Accesos que la revisión preliminar ha podido confirmar como anómalos |
| `limitacion` | Alcance que impide convertir el resultado en una prueba de ausencia |
