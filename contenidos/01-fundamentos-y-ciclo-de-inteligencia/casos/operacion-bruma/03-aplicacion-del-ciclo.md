# Operación Bruma · Aplicación del ciclo

El requerimiento de Operación Bruma puede representarse como una secuencia de trabajo en la que cada fase produce un resultado utilizable por la siguiente.

## Recorrido propuesto

| Fase | Trabajo en el caso | Resultado verificable |
|---|---|---|
| **Dirección y planificación** | Validar destinatario, decisión, preguntas, alcance y plazo | Requerimiento aprobado y prioridades |
| **Obtención** | Incorporar mensajes, avisos, resolución pasiva y resumen de accesos ya autorizados | Conjunto de datos identificado por origen y hora |
| **Procesamiento** | Normalizar asuntos, extraer dominios, ordenar la cronología y relacionar identificadores | Tabla común de mensajes, infraestructura e interacción |
| **Análisis y producción** | Comparar explicaciones, estimar impacto y registrar límites | Valoración con confianza, lagunas y medidas propuestas |
| **Difusión** | Preparar el nivel de detalle adecuado para cada destinatario | Nota de situación y alerta técnica |
| **Retroalimentación** | Recoger nuevas prioridades y comprobar la utilidad del producto | Actualización del requerimiento o cierre documentado |

## Un retorno entre fases

Durante el análisis se observa que faltan cabeceras de seis mensajes. La laguna no se oculta ni se resuelve suponiendo que todos comparten el mismo origen:

```text
análisis detecta una laguna
  → dirección decide si es prioritaria
    → obtención solicita las cabeceras autorizadas
      → procesamiento incorpora y normaliza el nuevo material
        → análisis revisa la valoración
```

Este retorno muestra que el ciclo sirve para organizar decisiones y trazabilidad; no obliga a completar una fase una única vez.

## Registro de trabajo

El estudiante completará el recorrido con referencias concretas al expediente:

| Fase | Entrada utilizada | Decisión o tarea | Salida | Siguiente fase |
|---|---|---|---|---|
| Dirección | Petición inicial | | | |
| Obtención | Muestras autorizadas | | | |
| Procesamiento | | | | |
| Análisis | | | | |
| Difusión | | | | |
| Retroalimentación | | | | |

La tabla debe incluir al menos una vuelta justificada a una fase anterior y distinguir una tarea de la herramienta que podría utilizarse para realizarla.

La explicación general continúa en [El ciclo de inteligencia](../../README.md#el-ciclo-de-inteligencia).
