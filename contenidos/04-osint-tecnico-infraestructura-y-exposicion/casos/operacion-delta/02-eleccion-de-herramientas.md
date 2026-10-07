# Operación Delta · Elección de herramientas

Se resuelve con el expediente y el [catálogo de herramientas](../../herramientas.md), sin consultas, cuentas ni instalaciones. Primero se decide qué dato hace falta; la ejecución viene después.

## Ejemplo resuelto

| Pregunta | Opciones | Elección inicial | Motivo |
|---|---|---|---|
| ¿Qué nombres aparecen en un certificado registrado? | crt.sh, Shodan, Wappalyzer | Consulta CT | Se necesita leer nombres y fechas de certificados, no identificar una aplicación |

DEL-C02 ya aporta una muestra. Puede interpretarse con ella y dejar la obtención real para una pregunta equivalente sobre el objetivo autorizado.

## Trabajo guiado

| Pregunta | Dato disponible | Laguna | Dos opciones | Mejor herramienta y motivo | Qué no elegirías todavía |
|---|---|---|---|---|---|
| ¿Qué consta en el registro del dominio? | | | | | |
| ¿Qué destino se observó para un nombre? | | | | | |
| ¿Qué servicio vio un tercero y cuándo? | | | | | |
| ¿Cómo separar IP compartida de activo propio? | | | | | |
| ¿Cómo ordenar nombres, IP y certificados? | | | | | |
| ¿Cómo revisar muchos nombres de forma repetible? | | | | | |
| ¿Cómo comparar el destino de un nombre en varias fechas? | | | | | |
| ¿Qué página observó un servicio antes de la retirada? | | | | | |
| ¿Qué aporta un informe de reputación y relaciones? | | | | | |

Compara RDAP, DNS, CT, Maltego, SpiderFoot, Amass, Shodan, Censys, SecurityTrails, urlscan.io, VirusTotal y Wappalyzer por su función. No todas son necesarias para el mismo encargo. Para VirusTotal explica además qué procesamiento permite el alcance.

## La configuración también se elige

Para SpiderFoot, Amass o una transformación de Maltego, no basta con nombrar la herramienta. Indica qué fuentes o módulos permitirías, qué datos enviarías y qué acciones excluirías. El catálogo puede informar de capacidades; la configuración disponible se comprueba antes de ejecutar.

| Propuesta | Fuente que necesitaría | ¿Contactaría con el objetivo? | ¿Entra en el alcance? | Qué debes aclarar antes |
|---|---|---|---|---|
| Consultar un certificado ya registrado | | | | |
| Ejecutar todos los módulos disponibles | | | | |
| Pedir un escaneo nuevo desde un índice | | | | |
| Organizar DEL-D y DEL-C en un grafo | | | | |

## Plan posterior

Elige una opción principal, una herramienta de contraste y una alternativa de acceso. Anota entrada, salida esperada, fecha que conservarás y límite.

Antes de ejecutarlo, interpreta [Registro, DNS y certificados](03-registro-dns-y-certificados.md) con las muestras. La ejecución se realiza posteriormente en [Obtención con herramientas](04-obtencion-con-herramientas.md).
