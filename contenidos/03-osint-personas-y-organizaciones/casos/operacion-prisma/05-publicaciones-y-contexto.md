# Operación Prisma · Publicaciones y contexto

Compras ha recibido tres publicaciones que parecen confirmar el cambio. [publicaciones.csv](datos/publicaciones.csv) permite reconstruir de dónde procede cada una.

## Ejemplo resuelto

```text
PRI-S01: anuncio del canal propuesto
  → PRI-S02: repite y enlaza PRI-S01
    → PRI-S03: comparte PRI-S02 y dice «cambio confirmado»
```

Hay tres publicaciones, pero solo un origen del anuncio. PRI-S03 añade una afirmación de confirmación sin aportar evidencia nueva. El número de cuentas que lo repiten no cambia esa dependencia.

## Trabajo guiado

Reconstruye el uso de IMG-01 con PRI-F06 y PRI-S05. Después de interpretar la cronología, retoma [la verificación de una publicación o imagen](03-obtencion-con-herramientas.md#verificar-una-publicación-o-una-imagen) si elegiste búsqueda inversa. Distingue el resultado público de las fechas de las muestras ficticias.

Completa una cronología que separe contenido antiguo y publicaciones recientes:

| Referencia | Fecha de publicación | Qué afirma | De qué depende | Qué acredita realmente |
|---|---|---|---|---|
| PRI-F06 | | | | |
| PRI-S05 | | | | |
| PRI-S04 | | | | |
| PRI-S01 | | | | |
| PRI-S02 | | | | |
| PRI-S03 | | | | |

Responde:

1. ¿Por qué `IMG-01` no acredita por sí sola la supuesta reunión de 2026?
2. ¿El uso anterior de la imagen demuestra que la reunión no existió? Explica el límite.
3. ¿Qué tensión aparece entre PRI-S01 y PRI-S04? ¿Podría haber un cambio posterior al aviso corporativo?
4. ¿Qué conservarías si solo dispusieras de una captura sin enlace ni fecha original?

## Comprobación

La imagen ya se utilizaba en 2023. Eso debilita su presentación como evidencia de una reunión reciente, pero no permite afirmar que no se celebró ninguna reunión. PRI-S04 es anterior al anuncio: obliga a verificar el cambio, sin resolver por sí solo qué ocurrió después.

Registra por separado fecha del supuesto hecho, publicación y consulta. Si no conoces una de ellas, déjala como laguna. No la sustituyas por la fecha de la captura.

Continúa en [Organización y valoración](06-organizacion-y-valoracion.md). La explicación general está en [SOCMINT](../../README.md#socmint-investigación-en-redes-sociales).
