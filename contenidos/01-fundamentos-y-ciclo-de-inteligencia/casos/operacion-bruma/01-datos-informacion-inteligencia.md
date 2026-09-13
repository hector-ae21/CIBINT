# Operación Bruma · Del dato a la inteligencia

Este apartado utiliza el [expediente del caso](README.md) para distinguir observaciones, relaciones comprobables y valoraciones orientadas a una decisión.

## Ejemplo resuelto

| Capa | Formulación | Trazabilidad |
|---|---|---|
| **Dato** | El mensaje M03 fue recibido a las 07:57 y contiene un enlace a `campus-boreal.example` | Fila M03 de `mensajes.csv` |
| **Información** | Los dominios de los doce mensajes con enlace resolvían a la misma dirección a las 08:14 | Relación entre `mensajes.csv` y `resolucion-dns.csv` |
| **Inteligencia** | Es probable que los doce mensajes con enlace formen parte de una misma campaña; la infraestructura común y la proximidad temporal justifican una contención inicial, aunque no permiten establecer autoría | Muestras BRU-MSG y BRU-DNS, interpretadas para la decisión de las 14:00 |

La inteligencia no repite los datos. Los interpreta para una necesidad concreta, limita lo que puede afirmarse y permite actuar sin presentar la hipótesis como certeza.

## Evidencia, interpretación y límite

Una formulación analítica completa puede construirse con tres piezas:

```text
evidencia observada
  + significado para la situación
  + límite o explicación alternativa
```

Ejemplo:

> Tres usuarios declaran haber introducido su nombre de usuario. Esto eleva la prioridad de la respuesta sobre esas cuentas, pero no confirma que también facilitaran una contraseña ni que se haya producido un acceso posterior.

## Trabajo sobre las muestras

Se debe seleccionar:

1. un dato de `mensajes.csv`;
2. una relación que necesite al menos dos filas o dos muestras distintas;
3. una valoración que ayude a decidir entre comunicar, contener o continuar observando.

El resultado se recogerá en una tabla de trabajo:

| Tipo | Formulación | Fuente o filas utilizadas | Límite principal |
|---|---|---|---|
| Dato | | | |
| Información | | | |
| Inteligencia | | | |

La explicación general continúa en [De los datos a la inteligencia](../../README.md#de-los-datos-a-la-inteligencia).
