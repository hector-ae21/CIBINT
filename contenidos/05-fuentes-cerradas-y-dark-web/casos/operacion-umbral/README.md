# Operación Umbral · Enunciado

[Volver al Tema 5](../../README.md)

Caso ficticio para trabajar fuentes cerradas, alertas de exposición y decisiones de respuesta. **Nácar Servicios, los proveedores A y B, las cuentas, fechas y observaciones son datos de prueba.** No se incluyen filtraciones, contraseñas, cookies ni tokens reales. Los dominios `.example` no representan objetivos que deban consultarse.

## Situación

El 17 de noviembre de 2026, un proveedor de inteligencia alerta de una publicación que anuncia «18.400 cuentas actuales de Nácar». Un boletín reproduce el aviso. Al día siguiente llega una exportación de otro proveedor que parece confirmarlo, pero algunas referencias apuntan a un incidente de 2023. También aparece una categoría de sesión y una cuenta técnica que requieren atención.

Sistemas facilita un inventario mínimo y un resumen de acceso para su análisis. Se ha ofrecido un archivo como supuesta muestra, pero no se ha descargado ni abierto. El equipo responsable necesita decidir qué revisar primero y qué puede comunicarse sin dar por comprobada toda la afirmación.

## Requerimiento

| Elemento | Encargo |
|---|---|
| Destinatario | Responsables de seguridad y protección de datos de Nácar |
| Decisión | Prioridades de revisión y comunicación, sin adquirir ni probar secretos |
| Preguntas | ¿Qué está documentado? ¿Hay independencia? ¿Qué cuentas y categorías requieren revisión? ¿Qué debe quedar pendiente? |
| Objeto | Fuentes y observaciones del expediente sobre `nacar.example` |
| Corte | 18 de noviembre de 2026, 12:00 UTC |
| Producto | Registro del caso y nota final de hasta 350 palabras |
| Alcance | Análisis local de muestras ficticias y lectura de referencias públicas indicadas |
| Exclusiones | Acceder a mercados, contactar con operadores o vendedores, descargar supuestas filtraciones, usar cuentas reales, probar credenciales o ejecutar escaneos |

## Materiales

| Archivo | Contenido |
|---|---|
| [fuentes.csv](datos/fuentes.csv) | Fichas UMB-F01 a UMB-F10, permisos y procedencia |
| [observaciones.csv](datos/observaciones.csv) | Metadatos UMB-R01 a UMB-R08; sin valores de credenciales |
| [cuentas.csv](datos/cuentas.csv) | Inventario autorizado de identificadores y estados |
| [cronologia.csv](datos/cronologia.csv) | Fechas de referencia ordenadas en UTC |
| [Diccionario de datos](datos/README.md) | Campos, categorías y límites de interpretación |
| [Registro de práctica](registro-practica.md) | Trabajo que se conserva entre ejercicios |
| [Comprobador local](comprobar-expediente.mjs) | Revisión de archivos y demostración por prefijo sin red |
| [SHA-256](SHA256SUMS.txt) y [MD5](MD5SUMS.txt) | Dos huellas de la misma versión de los archivos del caso |

## Condiciones de uso

La licencia ficticia UMB-F01 permite analizar metadatos, preparar una exportación mínima y redactar una valoración para los destinatarios del encargo. No permite publicar la base completa, obtener secretos ni autoriza cuentas ajenas. La publicación de este expediente es posible porque todos sus datos son de prueba; no representa un permiso general para divulgar resultados de fuentes cerradas.

Las referencias reales explican métodos y casos públicos. No corroboran hechos de Nácar. Las observaciones del expediente tampoco son logs originales ni evidencia pericial.

## Recorrido de prácticas

El orden de lectura lo marca el tema. Cada práctica se abre después de su explicación y devuelve al siguiente apartado principal.

| Orden | Práctica | Punto de apertura |
|---|---|---|
| 1 | [Clasificación de fuentes y permisos](01-fuentes-y-permisos.md) | [Diferencias entre entornos](../../README.md#surface-web-deep-web-y-dark-web-diferencias) |
| 2 | [Plan de acceso y OPSEC](02-acceso-y-opsec.md) | [Preparación del acceso](../../README.md#acceso-seguro-y-búsqueda-de-credenciales-filtradas) |
| 3 | [Contraste de la alerta y consulta por prefijo](03-alerta-y-credenciales.md) | [Búsqueda defensiva](../../README.md#búsqueda-defensiva-de-exposición-de-credenciales) |
| 4 | [Riesgos, conservación y comunicación](04-riesgos-y-comunicacion.md) | [Riesgos legales y operacionales](../../README.md#riesgos-legales-y-operacionales-específicos) |
| 5 | [Valoración final y contraste de casos](05-valoracion-final.md) | [Casos documentados](../../README.md#casos-documentados-y-práctica-de-contraste) |

## Verificación del paquete

Con Node.js instalado, desde esta carpeta:

```powershell
node comprobar-expediente.mjs
node comprobar-expediente.mjs --demo-prefijo
```

No se instalan paquetes ni se realizan conexiones. Las huellas detectan cambios frente a una referencia conservada; no prueban que el relato sea auténtico. Ambos manifiestos se excluyen del cálculo para evitar una dependencia circular. Para mantener el material, después de revisar cambios, se regeneran con `node comprobar-expediente.mjs --generar-huellas` y se vuelve a ejecutar la comprobación normal.

[Volver al Tema 5](../../README.md) · [Definiciones](../../definiciones.md)
