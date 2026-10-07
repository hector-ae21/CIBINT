# Operación Delta · Tecnologías y prioridades

La [respuesta HTTP](datos/respuesta-http.txt) contiene señales que ayudan a interpretar el portal. El producto final debe convertir observaciones en comprobaciones concretas para sistemas.

## Ejemplo resuelto

| Señal | Hipótesis | Reserva |
|---|---|---|
| `Server: nginx` | Un componente se identifica como nginx | Podría ser el frontal del proveedor |
| `PHPSESSID` | Compatible con una aplicación que utiliza ese nombre de sesión | No confirma implementación ni versión |
| Título «Portal de proveedores» | La página presenta esa función | No prueba acceso ni controles internos |

DEL-H01 amplía DEL-S01; no se cuenta como otra fuente independiente. No se dispone de versiones ni de un fallo confirmado, por lo que no procede asignar una vulnerabilidad a partir de estos datos.

## Trabajo guiado

Interpreta primero las señales de DEL-H01. Después retoma [Contrastar tecnologías](04-obtencion-con-herramientas.md#contrastar-tecnologías) si elegiste DevTools o Wappalyzer sobre una web propia o autorizada. Conserva la señal literal y distingue detección de tecnología confirmada.

1. Redacta una frase sobre las tecnologías posibles del portal, con referencia y límite.
2. Elige tres comprobaciones y ordénalas. Explica por qué una precede a otra.
3. Para cada una indica responsable, evidencia, dato pendiente y resultado que permitiría cerrarla.
4. Redacta una nota de hasta 250 palabras para sistemas.

| Prioridad | Hallazgo | Evidencia y fecha | Posible impacto | Dato pendiente | Responsable y comprobación |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |

## Una propuesta de valoración

> Se recomienda validar primero el servicio compatible con RDP asociado a `remoto.darsena.example`, observado el 19 de septiembre (DEL-D08 y DEL-S04). No consta en el inventario: sistemas debe confirmar responsable, necesidad, accesibilidad actual y controles. Después conviene aclarar el uso de `pruebas.darsena.example`, presente en DEL-C02 pero sin DNS ni servicio aportados. Como tercera comprobación se propone confirmar el cierre de legado: DEL-I03 lo declara retirado y DEL-S03 solo acredita su publicación anterior a la retirada. El portal de proveedores tiene observaciones compatibles en dos fechas recientes (DEL-S01 y DEL-S06) y un responsable declarado. Las señales de DEL-H01 no permiten identificar versiones ni vulnerabilidades. La IP compartida con DEL-S05 no incorpora al otro cliente al alcance. Ninguna muestra confirma una intrusión ni el estado actual de todos los activos.

## Comprobación

El orden puede variar si se justifica con necesidad, fecha, función y posible impacto. Lo que no puede variar es el límite de la evidencia: pruebas sigue siendo un candidato CT; legado tiene observaciones históricas; el acceso remoto requiere validación, no se declara comprometido.

Utiliza la [bitácora](../../../../plantillas/plantilla-bitacora-investigacion.md) y la [plantilla de informe](../../../../plantillas/plantilla-informe-inteligencia.md) para conservar el trabajo. Vuelve a [Una vista completa del Tema 4](../../README.md#una-vista-completa).
