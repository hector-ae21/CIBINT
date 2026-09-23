# Operación Umbral · Incidente y trazabilidad

Este apartado corresponde a la sesión de taller. Trabaja sobre la [bitácora del primer día](datos/bitacora-borrador.csv), redactada por un miembro del equipo que actuó con buena intención y demasiada prisa.

## Lo que pasó a las 11:05

Buscando información general, el analista encontró un pegado público con una lista de cuentas del dominio `orvalia.example` (entrada `B04`). Lo que hizo a continuación, copiar la lista a un documento compartido con un fragmento de contraseña incluido y anotar como siguiente paso «comprobar cuáles funcionan» (`B05`), es exactamente lo que el tema enseña a evitar.

### Qué debería haber ocurrido

| Momento | Actuación correcta | Motivo |
|---|---|---|
| Al ver la lista | Detenerse. No copiar, no descargar y no reenviar el contenido | Cada copia es una exposición más de algo que debe dejar de existir; tratándose de credenciales ajenas, conservarlas puede tener además relevancia penal (art. 197 ter CP) |
| Inmediatamente después | Registrar en la bitácora **que existe** una exposición, dónde y cuándo se vio, y cuántas cuentas aparentaba contener, sin reproducir ningún dato | Se documenta la referencia a la exposición, no el dato expuesto |
| En los minutos siguientes | Avisar al responsable de seguridad por el canal interno previsto | La decisión no corresponde a quien la encuentra |
| Esa misma mañana | Forzar el cambio de contraseña de las cuentas afectadas desde los sistemas propios de Orvalia, sin necesidad de probar ninguna | Protege a las personas afectadas sin acceder a nada ajeno |
| En ningún momento | Comprobar si las credenciales funcionan | No aporta nada que el cambio de contraseña no resuelva, supone entrar en cuentas de otras personas con lo que implica para su intimidad (art. 87 LOPDGDD) y puede alterar evidencias que necesite la investigación policial. Si hace falta saber si una cuenta se utilizó, se revisan los registros del sistema |

### Una obligación que aparece por el camino

La lista y el organigrama publicado contienen datos personales de empleados de Orvalia. Eso puede constituir una **violación de la seguridad de los datos personales** en el sentido del RGPD. En ese caso, Orvalia como responsable del tratamiento debe notificarla a la Agencia Española de Protección de Datos sin dilación indebida y, si es posible, en un plazo de 72 horas desde que tuvo constancia, salvo que sea improbable que suponga un riesgo para las personas (art. 33 RGPD). Si el riesgo es alto, debe informar además a los afectados (art. 34 RGPD).

La decisión de notificar no la toma el analista, pero el analista sí es quien tiene que hacer llegar la información a tiempo al delegado de protección de datos. Una bitácora sin horas, como la de este caso, complica precisamente saber cuándo empezó a contar ese plazo.

## Revisión de la bitácora

### Ejemplo resuelto

| Entrada | Problema | Corrección |
|---|---|---|
| `B01` | La captura se guarda en el escritorio y se envía a un grupo de mensajería: sin huella del archivo, sin dirección exacta y fuera del canal autorizado | Registrar la dirección, la fecha y hora con zona horaria y la huella SHA-256; guardar en el repositorio de evidencias del caso; compartir solo por el canal previsto |
| `B05` | Contiene un dato sensible y anuncia una acción ilícita como siguiente paso | Eliminar el dato de la bitácora y de cualquier copia; sustituir la entrada por una descripción de la exposición; registrar la decisión de no comprobar las credenciales y el aviso al responsable |

### Trabajo guiado

Se debe revisar el resto de las entradas y proponer su versión corregida:

| Entrada | Problema o problemas | Versión corregida |
|---|---|---|
| `B02` | | |
| `B03` | | |
| `B04` | | |
| `B06` | | |
| `B07` | | |

Pistas para no pasar nada por alto:

- Hay entradas incompletas y hay entradas completas pero con decisiones que no debieron tomarse. Las dos cosas son problemas distintos.
- Una entrada puede estar bien registrada y describir una acción fuera del alcance.
- `B07` conecta con una de las peticiones de la reunión. Conviene revisar qué se decidió sobre ella en el apartado 1.

## Preservar una evidencia

Para cerrar el taller, se debe describir paso a paso cómo se conservaría correctamente la publicación de la cuenta anónima (acción `OB02`), usando la [plantilla de bitácora](../../../../plantillas/plantilla-bitacora-investigacion.md). La descripción debe incluir:

1. qué se registra antes de obtener la evidencia;
2. cómo se obtiene sin interactuar con la cuenta;
3. cómo se calcula y se anota la huella del archivo;
4. dónde se guarda y quién puede acceder;
5. qué se hace con los datos personales de terceros que aparezcan en la publicación.

La descripción es metodológica. No es necesario ni procede realizarla sobre ninguna publicación real.

La explicación general continúa en [Trazabilidad](../../README.md#trazabilidad-poder-demostrar-lo-que-se-hizo).
