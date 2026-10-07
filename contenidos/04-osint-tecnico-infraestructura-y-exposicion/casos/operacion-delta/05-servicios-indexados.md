# Operación Delta · Servicios indexados

El [inventario](datos/inventario.csv) dice que el portal de legado se retiró. El [índice de servicios](datos/servicios.csv) conserva una página de acceso. Antes de declarar una contradicción hay que revisar las fechas.

## Ejemplo resuelto

| Dato | Fecha relevante |
|---|---|
| DEL-S03 observó la página de legado | 15 de mayo de 2026 |
| DEL-I03 declara la retirada | 30 de junio de 2026 |
| Se consultó DEL-S03 para el expediente | 21 de septiembre de 2026 |

La consulta reciente no convierte la observación en reciente. El índice vio el portal **antes** de la retirada declarada: no demuestra que siga publicado ni contradice el inventario. Sí permite proponer una comprobación de cierre si esa evidencia no existe internamente.

## Trabajo guiado

Compara primero DEL-S01 y DEL-S06 atendiendo a las fechas. Si elegiste un índice, retoma [Consultar servicios indexados](04-obtencion-con-herramientas.md#consultar-servicios-indexados): guarda filtros, ficha y fecha, o explica por qué no hubo datos utilizables. Los resultados públicos se registran por separado.

Completa una tabla de lectura:

| Observación | Punto observado | Nombre y forma de asociación | Fecha de observación | Uso permitido en la valoración |
|---|---|---|---|---|
| DEL-S01 | | | | |
| DEL-S03 | | | | |
| DEL-S04 | | | | |
| DEL-S05 | | | | |
| DEL-S06 | | | | |

Después responde:

1. ¿Por qué DEL-S01 y DEL-S05 no son la misma aplicación aunque compartan IP y puerto?
2. ¿Qué aporta DEL-S06 al compararlo con DEL-S01? ¿Confirma el estado actual?
3. ¿Qué evidencia relaciona DEL-S04 con un nombre de Dársena? ¿Qué datos faltan sobre su administración?
4. ¿Qué problema habría al copiar el contador de resultados como número de activos propios?
5. ¿Sería correcto escribir «Dársena permite entrar por RDP»? Propón una redacción más precisa.

## Comprobación

Una redacción posible es: «El índice B observó un servicio compatible con RDP en `203.0.113.60:3389/TCP` el 19 de septiembre (DEL-S04), asociado a `remoto.darsena.example` mediante DEL-D08. Su responsable y necesidad no constan en el inventario».

Las observaciones de los índices A y B son compatibles con un portal de proveedores publicado en sus respectivas fechas. No acreditan su estado a las 10:00 del día 21. Compartir IP y puerto puede reflejar alojamiento de varios sitios según el nombre solicitado.

Continúa en [Tecnologías y prioridades](06-tecnologias-y-prioridades.md). La explicación general está en [Motores de indexación](../../README.md#motores-de-indexación-de-dispositivos-expuestos).
