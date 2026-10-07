# Operación Delta · Registro, DNS y certificados

Los datos de registro, [DNS](datos/dns.csv) y [certificados](datos/certificados.csv) responden a preguntas distintas. Conviene dibujar relaciones indicando qué fuente sostiene cada enlace.

## Ejemplo resuelto

```text
proveedores.darsena.example
  -- CNAME, DEL-D03, 2026-09-21 --> acceso.nube.example
  -- SAN, DEL-C01 / CT-001 --> certificado con www.darsena.example

acceso.nube.example
  -- A, DEL-D04, 2026-09-21 --> 198.51.100.24
```

El mapa sostiene una relación de servicio y un certificado que incluye dos nombres. El inventario aporta el contexto empresarial. No identifica al administrador de toda la IP ni demuestra autoría de ninguna actividad.

## Trabajo guiado

Completa las relaciones con las muestras entregadas, conservando fuente y fecha. Este primer análisis se resuelve sin consultas. Aplica la opción elegida en [Obtención con herramientas](04-obtencion-con-herramientas.md) y compara el procedimiento con el expediente.

| Nombre | Inventario | DNS y fecha | Certificado y entrada | Estado que puede afirmarse |
|---|---|---|---|---|
| `proveedores.darsena.example` | | | | |
| `legado.darsena.example` | | | | |
| `pruebas.darsena.example` | | | | |
| `remoto.darsena.example` | | | | |

Responde con referencias:

1. ¿Qué demuestra la fecha de creación de DEL-R01? ¿Equivale a la creación de Dársena?
2. ¿Qué cambia al encontrar DEL-C02 en CT-002 y CT-003? ¿Cuántos certificados distintos representan?
3. ¿Puede DEL-C04 utilizarse como lista de subdominios?
4. ¿Se puede afirmar que `pruebas.darsena.example` responde hoy? ¿Qué falta?
5. ¿Permite el certificado caducado de legado concluir que se retiró el servicio?

## Comprobación

Dos entradas de DEL-C02 siguen representando un certificado. El comodín no enumera nombres. Para pruebas solo se dispone de la entrada CT: no hay DNS ni observación de servicio en el expediente. La caducidad de un certificado no confirma el cierre del servicio, que podría continuar con otro certificado o configuración.

Conserva las relaciones históricas en pasado. Las consultas públicas posteriores no completan datos faltantes de Dársena: indica esas lagunas y quién podría resolverlas.

Continúa en [Obtención con herramientas](04-obtencion-con-herramientas.md). La explicación general está en [WHOIS, DNS y certificados](../../README.md#whois-dns-y-certificados).
