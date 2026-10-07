# Operación Delta · Perspectiva del atacante

Primera parte del [caso](README.md). Se utilizan [inventario.csv](datos/inventario.csv), [certificados.csv](datos/certificados.csv) y [servicios.csv](datos/servicios.csv), sin instalación ni consultas.

## De la pista a una pregunta defensiva

Un atacante podría interesarse por una función de administración, un activo antiguo o un nombre no inventariado. El equipo de Dársena utiliza esa perspectiva para comprobar necesidad, responsable y controles.

## Ejemplo resuelto

DEL-S04 describe un servicio compatible con acceso remoto, observado el 19 de septiembre. Eso puede justificar una revisión prioritaria, pero no prueba que sea vulnerable ni que alguien haya accedido.

| Pista | Interés posible | Pregunta defensiva |
|---|---|---|
| Servicio de acceso remoto no inventariado | Encontrar una función sensible | ¿Está autorizado, sigue accesible y quién lo gestiona? |

## Trabajo guiado

| Muestra | Qué podría llamar la atención de un atacante | Qué se observa realmente | Qué no está probado | Comprobación defensiva |
|---|---|---|---|---|
| DEL-S03: portal de legado | | | | |
| DEL-C02: nombre de pruebas | | | | |
| DEL-S04: acceso remoto | | | | |
| DEL-H01: señales web | | | | |

Clasifica estas acciones:

- Revisar fechas y responsables con el material aportado.
- Probar contraseñas para ver si el acceso remoto está protegido.
- Interpretar como propio todo el rango del proveedor.
- Proponer una comprobación interna del cierre de legado.
- Publicar el nombre del servicio como «sistema comprometido» sin evidencias.

Para cada una escribe finalidad, alcance y decisión. La consulta de fuentes abiertas puede tener uso malicioso o defensivo según el propósito y las acciones; no cambia de naturaleza porque la herramienta se anuncie como OSINT.

Continúa en [Alcance e inventario](01-alcance-e-inventario.md). La teoría está en [Mirar la exposición desde el lado del atacante](../../README.md#mirar-la-exposición-desde-el-lado-del-atacante).
