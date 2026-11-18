# Herramientas · Fuentes cerradas y dark web

[Volver al tema](README.md) · [Definiciones](definiciones.md) · [Referencias](recursos.md)

La herramienta se elige después de definir la pregunta y el acceso permitido. Este catálogo distingue consulta de documentación, análisis de metadatos y acceso a un servicio. Las prácticas obligatorias se resuelven con Operación Umbral, sin cuentas externas, pagos ni credenciales reales.

## Selección según la pregunta

| Pregunta | Opción adecuada | Límite que debe registrarse |
|---|---|---|
| ¿Qué condiciones tiene una fuente? | Documentación, contrato o extracto autorizado | Permisos de acceso, exportación, conservación y difusión |
| ¿Qué representa una alerta? | Metadatos o informe legítimo ya disponible | Procedencia, cobertura y fechas desconocidas |
| ¿Varias alertas repiten un mismo origen? | CSV, hoja de cálculo o script local | Unidad de recuento y regla para identificar duplicados |
| ¿Qué permite Tor Browser? | Documentación oficial y demostración delimitada | Una conexión no acredita anonimato absoluto ni legitimidad del destino |
| ¿Cómo funciona una consulta por prefijo? | Demostración local con datos de prueba | No consulta un servicio real ni evalúa contraseñas personales |
| ¿Qué debe conservarse? | Registro del caso y huellas de archivos autorizados | No se conservan secretos ni muestras sustraídas |

## Tor Browser: documentación y demostración delimitada

La [documentación oficial de Tor Browser](https://support.torproject.org/tor-browser/getting-started/about-tor-browser/) permite preparar una demostración sin recurrir a directorios de enlaces. Si se autoriza una práctica de navegación, se utiliza una instalación preparada conforme a la documentación oficial y únicamente los destinos fijados en el alcance.

La demostración puede limitarse a:

1. Identificar navegador, versión y nivel de seguridad, sin modificar otros parámetros por ensayo.
2. Abrir el servicio oficial [check.torproject.org](https://check.torproject.org/) y observar si esa petición se reconoce como procedente de Tor.
3. Comparar el recorrido conceptual de una web convencional con el de un servicio onion a partir de la documentación, sin visitar mercados ni servicios desconocidos.
4. Registrar el resultado sin publicar la dirección IP mostrada, datos de la cuenta o información innecesaria del equipo.

El resultado de `check.torproject.org` se refiere a esa conexión; no certifica que todas las aplicaciones utilicen Tor ni que la investigación sea anónima. Si no hay entorno autorizado, se trabaja con la documentación y se registra que no hubo navegación propia. No se presenta una captura ajena como una consulta realizada.

Los [niveles de seguridad](https://support.torproject.org/tor-browser/features/security-levels/) y las [limitaciones del navegador](https://support.torproject.org/tor-browser/security/using-tb-safely/) deben leerse antes de proponer cambios. No se instalan complementos para «mejorar el anonimato» ni se abren archivos descargados fuera del procedimiento de trabajo.

## Have I Been Pwned: distinguir las funciones

**Have I Been Pwned (HIBP)** reúne referencias de brechas y ofrece distintas consultas. Su [FAQ](https://haveibeenpwned.com/FAQs) separa la exposición de una dirección de la consulta de contraseñas. No se utiliza para obtener los secretos de una cuenta.

| Función | Qué se estudia | Requisito para plantearla |
|---|---|---|
| Referencias de brechas para una cuenta | Relación de un identificador con incidentes conocidos por el servicio | Cuenta propia o autorización expresa y condiciones del servicio |
| Consulta de un dominio | Resultados dentro de un dominio autorizado | Verificaciones de control y permisos exigidos |
| Pwned Passwords | Coincidencia de un valor en el conjunto conocido por el servicio | En docencia, solo la demostración local con un valor de prueba |
| Metadatos de una brecha | Fecha, descripción y categorías declaradas | Interpretar cada campo y atribuirlo al proveedor |

La [API oficial](https://haveibeenpwned.com/api/v3) distingue funciones con autorización de las disponibles sin ella. No se presuponen permisos por disponer de una suscripción ni se publican claves de API. Las condiciones y campos se comprueban antes de un uso profesional; este tema no exige contratar servicios.

## Consulta por rango: lectura del procedimiento

En Pwned Passwords, el prefijo de cinco caracteres de SHA-1 selecciona un conjunto de sufijos. La comparación completa se efectúa localmente. La respuesta incluye un recuento asociado a la coincidencia; no identifica por sí sola una persona o cuenta.

La API contempla relleno de respuestas mediante `Add-Padding` y registros con recuento cero. Esos registros no se interpretan como exposiciones. Las [reglas de la consulta por rango](https://haveibeenpwned.com/api/v3#SearchingPwnedPasswordsByRange) deben consultarse si se implementa un cliente; no se extrapola el ejemplo local a producción.

Desde la raíz del repositorio se puede ejecutar:

```powershell
node contenidos/05-fuentes-cerradas-y-dark-web/casos/operacion-umbral/comprobar-expediente.mjs --demo-prefijo
```

La demostración utiliza únicamente `Solo-para-docencia-2026!`, un valor inventado y publicado para el ejercicio. No solicita entradas al usuario ni realiza conexiones. La respuesta de [rango-simulado.txt](casos/operacion-umbral/datos/rango-simulado.txt) es una muestra docente, no una respuesta descargada de HIBP.

Un resultado positivo simulado permite explicar la comparación. No demuestra que el valor figure realmente en una filtración. La ausencia de coincidencia tampoco sería una certificación de seguridad de una contraseña.

## Plataformas de inteligencia con licencia

Antes de utilizar un servicio cerrado se revisan procedencia, funciones contratadas, acciones permitidas y condiciones de conservación y difusión. Se compara lo que exige la pregunta con lo que permite el contrato. Una función visible en la interfaz no queda autorizada para cualquier objetivo.

En Umbral, los proveedores A y B son ficticios. Sus exportaciones permiten analizar dependencia y actualidad. No simulan una consulta auténtica a una marca comercial ni requieren cuentas de demostración.

Si una plataforma ofrece descargar secretos, contactar con vendedores o activar una comprobación de acceso, esa posibilidad queda fuera de la práctica. Se describe la limitación y se solicita una referencia mínima al responsable autorizado sin adquirir el contenido.

## Registro e integridad local

El [registro de práctica](casos/operacion-umbral/registro-practica.md) conserva las decisiones. Los CSV pueden abrirse con un editor o una hoja de cálculo, manteniendo los identificadores como texto. No se enriquecen los datos ficticios con información de personas reales.

Para comprobar el paquete:

```powershell
node contenidos/05-fuentes-cerradas-y-dark-web/casos/operacion-umbral/comprobar-expediente.mjs
```

El script comprueba formatos, referencias, orden temporal y las huellas SHA-256 y MD5 de los archivos del caso. No confirma las conclusiones ni autentica el relato. La regeneración de huellas se reserva al mantenimiento del material, después de revisar sus cambios.

[Volver al tema](README.md) · [Situación y recorrido de Umbral](casos/operacion-umbral/README.md)
