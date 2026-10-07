# Operación Delta · Alcance e inventario

El [enunciado](README.md) pide revisar la exposición de Dársena. No autoriza a examinar todos los sistemas que compartan proveedor o IP con la empresa.

## Ejemplo resuelto

| Evidencia | Qué aporta |
|---|---|
| DEL-I02 de [inventario.csv](datos/inventario.csv) | El portal de proveedores es una aplicación declarada de Dársena |
| DEL-D03 y DEL-D04 de [dns.csv](datos/dns.csv) | El nombre apunta al servicio de Nube en la observación del 21 de septiembre |
| DEL-R02 de [registro.csv](datos/registro.csv) | El rango se atribuye al proveedor dentro de la simulación |
| DEL-D09 | Otro cliente comparte la IP |

La conclusión es que Dársena utiliza un servicio alojado por Nube. No se atribuye todo el rango a Dársena ni se incorpora `tienda-ajena.example` a su inventario.

## Trabajo guiado

Trabaja únicamente con el inventario y las relaciones entregadas. Delimita qué nombres pertenecen al encargo y qué infraestructura queda fuera. Todavía no se consulta Internet: la elección y el uso de herramientas llegan en apartados separados.

Clasifica cada elemento como activo declarado, candidato relacionado, infraestructura de proveedor o tercero fuera del alcance:

| Elemento | Clasificación | Referencias | Qué falta confirmar |
|---|---|---|---|
| `www.darsena.example` | | | |
| `legado.darsena.example` | | | |
| `remoto.darsena.example` | | | |
| `pruebas.darsena.example` | | | |
| `acceso.nube.example` | | | |
| `tienda-ajena.example` | | | |
| `198.51.100.0/24` | | | |

Después valora estas acciones:

- Leer el histórico entregado de `legado.darsena.example`.
- Solicitar a un motor externo un nuevo escaneo de `203.0.113.60`.
- Pedir al responsable de sistemas que valide internamente el acceso remoto.
- Abrir la tienda de otro cliente para comparar su aplicación.

## Comprobación

Analizar el histórico y proponer una validación interna encaja en el encargo. Solicitar un escaneo nuevo o visitar sistemas ajenos queda fuera. Los nombres de pruebas y acceso remoto tienen relación candidata con Dársena, pero falta un responsable y un uso confirmado.

Continúa en [Elección de herramientas](02-eleccion-de-herramientas.md). La explicación general está en [Superficie de ataque externa](../../README.md#superficie-de-ataque-externa-concepto-y-alcance).
