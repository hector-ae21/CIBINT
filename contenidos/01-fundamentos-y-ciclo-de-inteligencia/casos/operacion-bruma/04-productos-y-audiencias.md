# Operación Bruma · Productos para dos audiencias

La evidencia del [expediente](README.md) no cambia según quien reciba el resultado. Lo que cambia es la selección, el grado de detalle y la acción que debe facilitar el producto.

## Selección del contenido

| Elemento | Equipo de operaciones | Responsable de seguridad |
|---|---|---|
| Necesidad inmediata | Aplicar controles y localizar eventos relacionados | Decidir alcance de la respuesta y de la comunicación |
| Detalle prioritario | Dominios, dirección observada, vigencia y acción técnica | Situación, posible impacto, confianza, medidas y lagunas |
| Formato | Alerta técnica breve | Nota de situación |
| Horizonte | Minutos u horas | Horas |

## Ejemplo de alerta técnica

> **Vigencia:** observaciones realizadas entre las 07:52 y las 08:30.  
> **Indicadores:** `acceso-boreal.example`, `campus-boreal.example` y `198.51.100.42`.  
> **Contexto:** doce mensajes con enlace; ambos dominios resolvían a la misma dirección a las 08:14.  
> **Acción:** bloquear temporalmente los dominios, preservar los mensajes y revisar actividad relacionada.  
> **Límite:** la relación de infraestructura no establece autoría y faltan cabeceras de seis mensajes.

## Ejemplo de nota de situación

> Es probable, con confianza moderada, que doce de los mensajes recibidos esta mañana formen parte de una misma campaña de suplantación. La valoración se apoya en la proximidad temporal, los asuntos semejantes y la infraestructura compartida. Tres usuarios declaran haber introducido su nombre de usuario, por lo que conviene priorizar la revisión de esas cuentas y conservar las evidencias disponibles. Se recomienda bloquear temporalmente los dos dominios observados y emitir una comunicación preventiva ajustada. No se han confirmado accesos anómalos, pero la revisión es preliminar y no se dispone de todas las cabeceras; la valoración deberá actualizarse cuando se incorporen esos datos.

La alerta permite ejecutar acciones concretas. La nota explica por qué esas acciones resultan proporcionadas. Ninguna de las dos atribuye la campaña a un actor.

## Trabajo guiado

Se debe preparar una versión propia de ambos productos a partir de las muestras:

| Producto | Límite de extensión | Elementos obligatorios |
|---|---:|---|
| Alerta técnica | 6 líneas | Vigencia, indicadores, contexto mínimo, acción y límite |
| Nota de situación | 150 palabras | Valoración, evidencia principal, impacto, confianza, recomendación y lagunas |

Ambos productos deben ser compatibles entre sí y permitir remontar sus afirmaciones al expediente.

La explicación general continúa en [Productos y audiencias](../../README.md#productos-y-audiencias).
