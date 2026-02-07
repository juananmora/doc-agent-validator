import React from 'react';
import MermaidDiagram from '../components/MermaidDiagram';
import { 
    Shield, 
    FileText, 
    Play, 
    CheckCircle, 
    XCircle, 
    AlertTriangle,
    Zap,
    Clock,
    BarChart3,
    Code,
    BookOpen,
    Lightbulb,
    Terminal,
    Settings,
    Target,
    Layers
} from 'lucide-react';

const ValidatorGuide = () => {
    return (
        <div className="content-wrapper fade-in">
            {/* Hero Header */}
            <div className="header-hero">
                <div>
                    <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>
                        <BookOpen size={12} /> Technical Documentation
                    </span>
                    <h1>Guía del Validador de Agentes</h1>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px' }}>
                        Documentación completa sobre cómo funciona el <strong style={{ color: '#fff' }}>Agent Validator</strong>, 
                        una herramienta enterprise para evaluar y validar custom agents de GitHub Copilot.
                    </p>
                </div>
                <img src="/assets/detective.png" alt="Detective Banana" className="hero-img" style={{ borderRadius: '12px' }} />
            </div>

            {/* Table of Contents */}
            <section className="pro-card" style={{ marginBottom: '3rem' }}>
                <h3 style={{ marginTop: 0, color: '#A100FF' }}>
                    <Layers size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Tabla de Contenidos
                </h3>
                <div className="grid grid-3" style={{ gap: '1rem', marginTop: '1rem' }}>
                    <TOCItem number="1" title="Visión General" />
                    <TOCItem number="2" title="Estructura de un Agente" />
                    <TOCItem number="3" title="Test Cases" />
                    <TOCItem number="4" title="Flujo de Ejecución" />
                    <TOCItem number="5" title="Sistema de Puntuación" />
                    <TOCItem number="6" title="LLM-as-Judge" />
                    <TOCItem number="7" title="Outputs y Reportes" />
                    <TOCItem number="8" title="Best Practices" />
                    <TOCItem number="9" title="Troubleshooting" />
                </div>
            </section>

            {/* Section 1: Overview */}
            <section className="pro-card">
                <SectionHeader number="1" title="Visión General" icon={<Target size={24} />} />
                
                <p>
                    El <strong>Agent Validator</strong> es una herramienta de línea de comandos que permite validar 
                    automáticamente el comportamiento de custom agents de GitHub Copilot. Está diseñado para 
                    integrarse en pipelines de CI/CD y garantizar que los agentes cumplan con estándares de calidad 
                    antes de ser desplegados.
                </p>

                <div className="grid grid-2" style={{ gap: '2rem', marginTop: '2rem' }}>
                    <div>
                        <h3 style={{ color: '#10b981' }}>
                            <CheckCircle size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Qué Puede Hacer
                        </h3>
                        <ul style={{ paddingLeft: '1.5rem' }}>
                            <li><strong>Definir agentes</strong> en formato Markdown con casos de prueba embebidos</li>
                            <li><strong>Ejecutar tests automatizados</strong> contra el agente en sesiones aisladas</li>
                            <li><strong>Comparar con baseline</strong> (respuestas del agente sin personalizar)</li>
                            <li><strong>Evaluar semánticamente</strong> usando LLM-as-Judge</li>
                            <li><strong>Detectar regresiones</strong> comparando con ejecuciones históricas</li>
                            <li><strong>Generar reportes</strong> detallados en JSON y Markdown</li>
                            <li><strong>Mantener histórico</strong> de todas las ejecuciones para trazabilidad</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 style={{ color: '#ef4444' }}>
                            <XCircle size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Limitaciones Actuales
                        </h3>
                        <ul style={{ paddingLeft: '1.5rem' }}>
                            <li>Requiere <code>gh copilot</code> CLI instalado y autenticado</li>
                            <li>No soporta validación de herramientas custom en tiempo real</li>
                            <li>Las evaluaciones LLM tienen costo asociado por token</li>
                            <li>Tiempo de ejecución variable según carga del servicio</li>
                        </ul>
                    </div>
                </div>

                <div className="diagram-block" style={{ marginTop: '2rem' }}>
                    <MermaidDiagram
                        caption="Arquitectura de Alto Nivel del Validador"
                        chart={`
                    flowchart LR
                        subgraph INPUT[" "]
                            A["📄 agent.md<br/>(definición)"]
                        end
                        
                        subgraph PROCESS[" "]
                            B["🐍 Validator<br/>(Python)"]
                            C["🤖 LLM Judge<br/>(Copilot)"]
                        end
                        
                        subgraph OUTPUT[" "]
                            D["📊 report.md"]
                            E["📋 report.json"]
                            F["📁 history/*.json"]
                        end
                        
                        A --> B
                        B --> C
                        B --> D
                        B --> E
                        B --> F
                        C --> B
                        
                        style A fill:#4CAF50,stroke:#2E7D32,color:#fff
                        style B fill:#2196F3,stroke:#1565C0,color:#fff
                        style C fill:#9C27B0,stroke:#6A1B9A,color:#fff
                        style D fill:#FF9800,stroke:#EF6C00,color:#fff
                        style E fill:#FF9800,stroke:#EF6C00,color:#fff
                        style F fill:#FF9800,stroke:#EF6C00,color:#fff
                    `}
                    />
                </div>
            </section>

            {/* Section 2: Agent Structure */}
            <section>
                <SectionHeader number="2" title="Estructura de un Agente" icon={<FileText size={24} />} />
                
                <p>
                    Un agente se define en un archivo Markdown (<code>.md</code>) con una estructura específica 
                    que incluye metadata YAML, system prompt, y casos de prueba. Esta estructura permite 
                    que el agente y sus tests vivan juntos, versionados en Git.
                </p>

                <div className="pro-card" style={{ marginTop: '2rem' }}>
                    <h3 style={{ marginTop: 0, color: '#00E5FF' }}>
                        <Code size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                        2.1 Metadata (YAML Frontmatter)
                    </h3>
                    <p>
                        La metadata define propiedades esenciales del agente y se especifica al inicio del archivo 
                        entre delimitadores <code>---</code>.
                    </p>
                    
                    <pre>
                        <code>{`---
name: mi_agente_especializado
description: Agente especializado en revisión de código Python
version: 1.2.0
author: equipo-platform
tags:
  - python
  - code-review
  - security
tools:
  - bash          # Permite ejecutar comandos shell
  - create        # Permite crear archivos
  - edit          # Permite editar archivos existentes
  - fetch         # Permite hacer peticiones HTTP
permissions:
  - read_files
  - write_files
---`}</code>
                    </pre>

                    <div className="table-wrapper" style={{ marginTop: '1.5rem' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Campo</th>
                                    <th>Tipo</th>
                                    <th>Requerido</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>name</code></td>
                                    <td>string</td>
                                    <td>✅</td>
                                    <td>Identificador único del agente (snake_case)</td>
                                </tr>
                                <tr>
                                    <td><code>description</code></td>
                                    <td>string</td>
                                    <td>✅</td>
                                    <td>Descripción breve del propósito del agente</td>
                                </tr>
                                <tr>
                                    <td><code>version</code></td>
                                    <td>semver</td>
                                    <td>✅</td>
                                    <td>Versión semántica (major.minor.patch)</td>
                                </tr>
                                <tr>
                                    <td><code>tools</code></td>
                                    <td>array</td>
                                    <td>❌</td>
                                    <td>Lista de herramientas habilitadas para el agente</td>
                                </tr>
                                <tr>
                                    <td><code>author</code></td>
                                    <td>string</td>
                                    <td>❌</td>
                                    <td>Autor o equipo responsable</td>
                                </tr>
                                <tr>
                                    <td><code>tags</code></td>
                                    <td>array</td>
                                    <td>❌</td>
                                    <td>Etiquetas para categorización</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="pro-card">
                    <h3 style={{ marginTop: 0, color: '#00E5FF' }}>
                        <Terminal size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                        2.2 System Prompt
                    </h3>
                    <p>
                        El system prompt define la personalidad, conocimientos y comportamientos base del agente. 
                        Se escribe después de la metadata como contenido Markdown regular.
                    </p>
                    
                    <pre>
                        <code>{`# System Prompt

Eres un asistente experto en revisión de código Python. Tu rol es:

1. **Analizar código** en busca de problemas de calidad
2. **Identificar vulnerabilidades** de seguridad comunes
3. **Sugerir mejoras** siguiendo PEP8 y best practices
4. **Explicar tus sugerencias** de forma clara y educativa

## Reglas Importantes

- Siempre proporciona ejemplos de código corregido
- Prioriza problemas de seguridad sobre estilo
- Sé constructivo, no crítico
- Si no estás seguro, indícalo claramente`}</code>
                    </pre>
                    
                    <div className="alert alert-info" style={{ marginTop: '1.5rem' }}>
                        <Lightbulb size={20} color="#3b82f6" />
                        <div>
                            <strong>Tip:</strong> Un buen system prompt es específico, estructurado y establece 
                            límites claros. Evita instrucciones vagas como "sé útil" sin contexto adicional.
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Test Cases */}
            <section>
                <SectionHeader number="3" title="Definición de Test Cases" icon={<CheckCircle size={24} />} />
                
                <p>
                    Los casos de prueba se definen en una sección especial del archivo Markdown. Cada test case 
                    especifica un prompt de entrada y las expectativas sobre la respuesta del agente.
                </p>

                <div className="pro-card" style={{ marginTop: '2rem' }}>
                    <h3 style={{ marginTop: 0, color: '#00E5FF' }}>Estructura de un Test Case</h3>
                    
                    <pre>
                        <code>{`## Test Cases

### test_detecta_sql_injection
**prompt**: Revisa este código: \`query = f"SELECT * FROM users WHERE id = {user_id}"\`
**expected_contains**: 
- SQL injection
- vulnerabilidad
- parameterized
**expected_not_contains**:
- "el código está bien"
- "no hay problemas"
**expected_behavior**: El agente debe identificar la vulnerabilidad de SQL injection, 
explicar el riesgo y proporcionar una versión corregida usando queries parametrizadas.
**timeout**: 30
**tags**: security, sql

### test_sugiere_type_hints
**prompt**: ¿Cómo mejorarías esta función? \`def calculate(a, b): return a + b\`
**expected_contains**:
- type hint
- -> 
**expected_behavior**: Debe sugerir añadir type hints para mejorar la legibilidad 
y el soporte del IDE, mostrando un ejemplo con tipos.
**severity**: warning`}</code>
                    </pre>
                </div>

                <div className="grid grid-2" style={{ gap: '2rem', marginTop: '2rem' }}>
                    <div className="pro-card" style={{ marginBottom: 0 }}>
                        <h3 style={{ marginTop: 0, color: '#10b981' }}>
                            <CheckCircle size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Campos de Expectativa
                        </h3>
                        
                        <div style={{ marginTop: '1rem' }}>
                            <FieldDoc 
                                name="expected_contains"
                                type="array"
                                description="Keywords que DEBEN aparecer en la respuesta (case-insensitive). El test pasa si TODAS las keywords están presentes."
                            />
                            <FieldDoc 
                                name="expected_not_contains"
                                type="array"
                                description="Keywords que NO DEBEN aparecer. Útil para detectar respuestas incorrectas o peligrosas."
                            />
                            <FieldDoc 
                                name="expected_behavior"
                                type="string"
                                description="Descripción en lenguaje natural del comportamiento esperado. Evaluado por LLM-as-Judge."
                            />
                        </div>
                    </div>
                    
                    <div className="pro-card" style={{ marginBottom: 0 }}>
                        <h3 style={{ marginTop: 0, color: '#f59e0b' }}>
                            <Settings size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Campos de Configuración
                        </h3>
                        
                        <div style={{ marginTop: '1rem' }}>
                            <FieldDoc 
                                name="timeout"
                                type="number"
                                description="Tiempo máximo de espera en segundos (default: 60). El test falla si se excede."
                            />
                            <FieldDoc 
                                name="tags"
                                type="array"
                                description="Etiquetas para categorizar el test. Útil para ejecutar subconjuntos de tests."
                            />
                            <FieldDoc 
                                name="severity"
                                type="enum"
                                description="Severidad del test: 'critical' | 'error' | 'warning'. Afecta el score final."
                            />
                            <FieldDoc 
                                name="skip"
                                type="boolean"
                                description="Si es true, el test se omite durante la ejecución."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Execution Flow */}
            <section className="pro-card">
                <SectionHeader number="4" title="Flujo de Ejecución" icon={<Play size={24} />} />
                
                <p>
                    Para cada caso de prueba, el validador sigue un proceso estructurado que garantiza 
                    consistencia y reproducibilidad en las evaluaciones.
                </p>

                <div className="diagram-block" style={{ marginTop: '2rem' }}>
                    <MermaidDiagram
                        caption="Ciclo de Vida Detallado de un Test Case"
                        chart={`
                    flowchart TD
                        subgraph SETUP["⚙️ Setup"]
                            S1["1. Parsear agent.md"]
                            S2["2. Extraer test case"]
                            S3["3. Crear sesión aislada"]
                        end
                        
                        subgraph EXEC["▶️ Ejecución"]
                            E1["4. Enviar prompt al agente"]
                            E2["5. Capturar respuesta completa"]
                            E3["6. Medir tiempo de respuesta"]
                        end
                        
                        subgraph BASELINE["📊 Baseline"]
                            B1["7. Ejecutar mismo prompt sin agent"]
                            B2["8. Comparar respuestas"]
                        end
                        
                        subgraph EVAL["🔍 Evaluación"]
                            V1["9. Validar expected_contains"]
                            V2["10. Validar expected_not_contains"]
                            V3{"11. ¿Hay expected_behavior?"}
                            V4["12. Evaluar con LLM-as-Judge"]
                        end
                        
                        subgraph RESULT["📋 Resultado"]
                            R1["13. Calcular scores parciales"]
                            R2["14. Registrar en histórico"]
                            R3["15. Generar output"]
                        end
                        
                        S1 --> S2 --> S3 --> E1 --> E2 --> E3
                        E3 --> B1 --> B2
                        B2 --> V1 --> V2 --> V3
                        V3 -->|Sí| V4 --> R1
                        V3 -->|No| R1
                        R1 --> R2 --> R3
                        
                        style S1 fill:#2196F3,stroke:#1565C0,color:#fff
                        style E1 fill:#4CAF50,stroke:#2E7D32,color:#fff
                        style B1 fill:#FF9800,stroke:#EF6C00,color:#fff
                        style V4 fill:#9C27B0,stroke:#6A1B9A,color:#fff
                        style R3 fill:#00BCD4,stroke:#00838F,color:#fff
                    `}
                    />
                </div>

                <div className="grid grid-3" style={{ gap: '1rem', marginTop: '2rem' }}>
                    <ProcessStep 
                        icon={<Settings size={20} />}
                        phase="Setup"
                        description="Inicialización del entorno, parsing del agente y creación de sesión aislada con el CLI."
                        color="#2196F3"
                    />
                    <ProcessStep 
                        icon={<Play size={20} />}
                        phase="Ejecución"
                        description="Envío del prompt, captura de respuesta completa y métricas de tiempo."
                        color="#4CAF50"
                    />
                    <ProcessStep 
                        icon={<BarChart3 size={20} />}
                        phase="Evaluación"
                        description="Validación de keywords, evaluación semántica y cálculo de scores."
                        color="#9C27B0"
                    />
                </div>
            </section>

            {/* Section 5: Scoring System */}
            <section>
                <SectionHeader number="5" title="Sistema de Puntuación" icon={<BarChart3 size={24} />} />
                
                <p>
                    El score final (0-100) se calcula usando fórmulas ponderadas que consideran múltiples 
                    dimensiones de calidad. El sistema soporta dos modos de cálculo según si se usa 
                    evaluación LLM o no.
                </p>

                <div className="grid grid-2" style={{ gap: '2rem', marginTop: '2rem' }}>
                    <div style={{ 
                        background: 'linear-gradient(135deg, rgba(161,0,255,0.1) 0%, rgba(161,0,255,0.05) 100%)',
                        border: '1px solid rgba(161,0,255,0.3)',
                        borderRadius: '12px',
                        padding: '2rem'
                    }}>
                        <h3 style={{ marginTop: 0, color: '#A100FF' }}>Modo Legacy (Sin LLM)</h3>
                        <p style={{ fontSize: '0.95rem' }}>
                            Para tests que solo usan validación por keywords, sin <code>expected_behavior</code>.
                        </p>
                        <pre style={{ background: 'rgba(0,0,0,0.3)' }}>
                            <code style={{ color: '#e0e0e0' }}>{`Score = (Success × 0.60) 
      + (Latency × 0.20) 
      + (Security × 0.20)`}</code>
                        </pre>
                    </div>
                    
                    <div style={{ 
                        background: 'linear-gradient(135deg, rgba(0,229,255,0.1) 0%, rgba(0,229,255,0.05) 100%)',
                        border: '1px solid rgba(0,229,255,0.3)',
                        borderRadius: '12px',
                        padding: '2rem'
                    }}>
                        <h3 style={{ marginTop: 0, color: '#00E5FF' }}>Modo Advanced (Con LLM)</h3>
                        <p style={{ fontSize: '0.95rem' }}>
                            Para tests que incluyen <code>expected_behavior</code> y evaluación semántica.
                        </p>
                        <pre style={{ background: 'rgba(0,0,0,0.3)' }}>
                            <code style={{ color: '#e0e0e0' }}>{`Score = (Success × 0.40) 
      + (LLM_Eval × 0.25) 
      + (Latency × 0.15) 
      + (Security × 0.20)`}</code>
                        </pre>
                    </div>
                </div>

                <div className="table-wrapper" style={{ marginTop: '2rem' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Componente</th>
                                <th>Peso (Legacy)</th>
                                <th>Peso (Advanced)</th>
                                <th>Cálculo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Success Rate</strong></td>
                                <td>60%</td>
                                <td>40%</td>
                                <td><code>(tests_passed / total_tests) × 100</code></td>
                            </tr>
                            <tr>
                                <td><strong>LLM Evaluation</strong></td>
                                <td>—</td>
                                <td>25%</td>
                                <td><code>avg(llm_scores) × 100</code></td>
                            </tr>
                            <tr>
                                <td><strong>Latency Score</strong></td>
                                <td>20%</td>
                                <td>15%</td>
                                <td><code>100 - (avg_latency_ms / threshold_ms × 100)</code></td>
                            </tr>
                            <tr>
                                <td><strong>Security Score</strong></td>
                                <td>20%</td>
                                <td>20%</td>
                                <td><code>(secure_tests / total_tests) × 100</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="alert alert-warning" style={{ marginTop: '2rem' }}>
                    <AlertTriangle size={20} color="#f59e0b" />
                    <div>
                        <strong>Quality Gate:</strong> Por defecto, un agente necesita un score mínimo de 
                        <strong> 70/100</strong> para pasar la validación en CI/CD. Este umbral es configurable.
                    </div>
                </div>
            </section>

            {/* Section 6: LLM-as-Judge */}
            <section className="pro-card">
                <SectionHeader number="6" title="Evaluación LLM-as-Judge" icon={<Zap size={24} />} />
                
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                        <p>
                            <strong>LLM-as-Judge</strong> es una técnica que utiliza un modelo de lenguaje para evaluar 
                            semánticamente si la respuesta del agente cumple con el comportamiento esperado, 
                            más allá de simples coincidencias de keywords.
                        </p>
                        
                        <h3 style={{ color: '#9C27B0' }}>¿Cómo Funciona?</h3>
                        <ol style={{ paddingLeft: '1.5rem' }}>
                            <li>Se construye un prompt con el contexto completo del test</li>
                            <li>Se envía a Copilot con instrucciones de evaluación</li>
                            <li>El LLM retorna un score (0-1) y una explicación</li>
                            <li>El score se incorpora al cálculo final</li>
                        </ol>

                        <h3 style={{ color: '#9C27B0' }}>Criterios de Evaluación</h3>
                        <ul style={{ paddingLeft: '1.5rem' }}>
                            <li><strong>Cumplimiento:</strong> ¿La respuesta satisface el comportamiento esperado?</li>
                            <li><strong>Corrección:</strong> ¿El código o información proporcionada es correcta?</li>
                            <li><strong>Completitud:</strong> ¿Se abordan todos los aspectos solicitados?</li>
                            <li><strong>Best Practices:</strong> ¿Se siguen las mejores prácticas mencionadas?</li>
                            <li><strong>Claridad:</strong> ¿La explicación es clara y útil?</li>
                        </ul>
                    </div>
                    <img src="/assets/judge.png" alt="Judge Banana" style={{ width: '180px', flexShrink: 0 }} />
                </div>

                <div style={{ 
                    background: 'var(--bg-code)', 
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    marginTop: '2rem'
                }}>
                    <h4 style={{ marginTop: 0, color: '#9C27B0', fontSize: '0.9rem' }}>
                        Ejemplo de Prompt para LLM-as-Judge
                    </h4>
                    <pre style={{ margin: 0, border: 'none', padding: 0, background: 'transparent' }}>
                        <code>{`Evalúa la siguiente respuesta de un agente de IA.

## Contexto del Test
**Prompt enviado:** Revisa este código para SQL injection
**Comportamiento esperado:** Debe identificar la vulnerabilidad y sugerir corrección

## Respuesta del Agente
{respuesta_capturada}

## Instrucciones
Evalúa del 0 al 1 si la respuesta cumple con el comportamiento esperado.
Responde en formato JSON:
{
  "score": 0.85,
  "explanation": "La respuesta identifica correctamente el problema...",
  "suggestions": ["Podría incluir más contexto sobre..."]
}`}</code>
                    </pre>
                </div>
            </section>

            {/* Section 7: Outputs */}
            <section>
                <SectionHeader number="7" title="Outputs y Reportes" icon={<FileText size={24} />} />
                
                <p>
                    El validador genera múltiples tipos de output para diferentes casos de uso: 
                    análisis humano, integración con CI/CD, y trazabilidad histórica.
                </p>

                <div className="grid grid-3" style={{ gap: '1.5rem', marginTop: '2rem' }}>
                    <OutputCard 
                        title="report.md"
                        description="Reporte legible para humanos con resumen ejecutivo, detalles por test, y recomendaciones."
                        icon="📊"
                        format="Markdown"
                    />
                    <OutputCard 
                        title="report.json"
                        description="Datos estructurados para procesamiento automatizado e integración con otras herramientas."
                        icon="📋"
                        format="JSON"
                    />
                    <OutputCard 
                        title="history/*.json"
                        description="Histórico de ejecuciones para análisis de tendencias y detección de regresiones."
                        icon="📁"
                        format="JSON"
                    />
                </div>

                <div className="pro-card" style={{ marginTop: '2rem' }}>
                    <h3 style={{ marginTop: 0 }}>Ejemplo de Output JSON</h3>
                    <pre>
                        <code>{`{
  "agent": {
    "name": "mi_agente",
    "version": "1.2.0"
  },
  "execution": {
    "timestamp": "2024-01-15T10:30:00Z",
    "duration_ms": 45230,
    "environment": "ci-runner-01"
  },
  "summary": {
    "total_tests": 12,
    "passed": 10,
    "failed": 2,
    "score": 83.5,
    "grade": "B"
  },
  "tests": [
    {
      "name": "test_detecta_sql_injection",
      "status": "passed",
      "duration_ms": 2340,
      "keywords_found": ["SQL injection", "vulnerabilidad"],
      "llm_eval": {
        "score": 0.92,
        "explanation": "Identificó correctamente el problema..."
      }
    }
    // ... más tests
  ],
  "recommendations": [
    "Considerar añadir más tests de seguridad",
    "El test_X falló por timeout - revisar complejidad"
  ]
}`}</code>
                    </pre>
                </div>
            </section>

            {/* Section 8: Best Practices */}
            <section className="pro-card">
                <SectionHeader number="8" title="Best Practices" icon={<Lightbulb size={24} />} />
                
                <div className="grid grid-2" style={{ gap: '2rem' }}>
                    <div>
                        <h3 style={{ color: '#10b981', marginTop: 0 }}>
                            <CheckCircle size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Recomendado
                        </h3>
                        <ul style={{ paddingLeft: '1.5rem' }}>
                            <li><strong>Tests específicos:</strong> Un test, un comportamiento a validar</li>
                            <li><strong>Keywords diversas:</strong> Usa sinónimos y variaciones</li>
                            <li><strong>Expected behavior claro:</strong> Describe qué, no cómo</li>
                            <li><strong>Casos edge:</strong> Incluye inputs inválidos y límites</li>
                            <li><strong>Seguridad primero:</strong> Tests de prompt injection obligatorios</li>
                            <li><strong>Versionado:</strong> Usa semver para tracking de cambios</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 style={{ color: '#ef4444', marginTop: 0 }}>
                            <XCircle size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Evitar
                        </h3>
                        <ul style={{ paddingLeft: '1.5rem' }}>
                            <li><strong>Tests frágiles:</strong> Keywords muy específicas que cambian frecuentemente</li>
                            <li><strong>Sobre-testing:</strong> Validar lo mismo en múltiples tests</li>
                            <li><strong>Prompts ambiguos:</strong> Si tú no entiendes qué esperas, el agente tampoco</li>
                            <li><strong>Timeouts cortos:</strong> Operaciones complejas necesitan tiempo</li>
                            <li><strong>Ignorar fallos:</strong> Cada test fallido debe investigarse</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 9: Troubleshooting */}
            <section>
                <SectionHeader number="9" title="Troubleshooting" icon={<AlertTriangle size={24} />} />
                
                <div style={{ marginTop: '2rem' }}>
                    <TroubleshootItem 
                        problem="El test falla por timeout pero la respuesta parece correcta"
                        causes={[
                            "El agente está generando una respuesta muy larga",
                            "Latencia alta del servicio de Copilot",
                            "Timeout configurado demasiado bajo"
                        ]}
                        solutions={[
                            "Aumentar el timeout en el test case",
                            "Simplificar el prompt para respuestas más concisas",
                            "Verificar conectividad y estado del servicio"
                        ]}
                    />
                    
                    <TroubleshootItem 
                        problem="Keywords no encontradas pero la respuesta es correcta"
                        causes={[
                            "El agente usa sinónimos o variaciones",
                            "La keyword tiene typos o diferente capitalización",
                            "La respuesta está en otro idioma"
                        ]}
                        solutions={[
                            "Añadir sinónimos a expected_contains",
                            "Usar expected_behavior para evaluación semántica",
                            "Revisar y actualizar las keywords"
                        ]}
                    />
                    
                    <TroubleshootItem 
                        problem="LLM-as-Judge da scores inconsistentes"
                        causes={[
                            "El expected_behavior es ambiguo",
                            "Variabilidad natural del LLM",
                            "Contexto insuficiente en el prompt"
                        ]}
                        solutions={[
                            "Hacer el expected_behavior más específico",
                            "Ejecutar múltiples veces y promediar (en desarrollo)",
                            "Añadir más contexto y criterios de evaluación"
                        ]}
                    />
                </div>
            </section>

        </div>
    );
};

// Helper Components
const SectionHeader = ({ number, title, icon }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ 
            width: '40px', 
            height: '40px', 
            background: 'rgba(161, 0, 255, 0.15)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#A100FF'
        }}>
            {icon}
        </div>
        <h2 style={{ margin: 0 }}>{number}. {title}</h2>
    </div>
);

const TOCItem = ({ number, title }) => (
    <a href={`#section-${number}`} style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.75rem',
        padding: '0.75rem 1rem',
        background: 'rgba(255,255,255,0.02)',
        borderRadius: '8px',
        textDecoration: 'none',
        color: 'var(--text-muted)',
        transition: 'all 0.2s ease'
    }}>
        <span style={{ 
            width: '24px', 
            height: '24px', 
            background: 'var(--primary)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
            fontWeight: '700',
            color: '#fff'
        }}>{number}</span>
        <span style={{ fontSize: '0.9rem' }}>{title}</span>
    </a>
);

const FieldDoc = ({ name, type, description }) => (
    <div style={{ 
        padding: '0.75rem 0',
        borderBottom: '1px solid var(--border-color)'
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <code style={{ fontSize: '0.9rem' }}>{name}</code>
            <span className="badge badge-info" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>{type}</span>
        </div>
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{description}</p>
    </div>
);

const ProcessStep = ({ icon, phase, description, color }) => (
    <div style={{ 
        padding: '1.25rem',
        background: 'var(--bg-elevated)',
        borderRadius: '8px',
        borderLeft: `3px solid ${color}`
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color }}>
            {icon}
            <strong style={{ fontSize: '0.9rem' }}>{phase}</strong>
        </div>
        <p style={{ margin: 0, fontSize: '0.85rem' }}>{description}</p>
    </div>
);

const OutputCard = ({ title, description, icon, format }) => (
    <div style={{ 
        padding: '1.5rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px'
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>{icon}</span>
            <div>
                <h4 style={{ margin: 0, color: '#fff', fontSize: '1rem' }}>{title}</h4>
                <span className="badge badge-info" style={{ fontSize: '0.6rem', marginTop: '4px' }}>{format}</span>
            </div>
        </div>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>{description}</p>
    </div>
);

const TroubleshootItem = ({ problem, causes, solutions }) => (
    <div style={{ 
        marginBottom: '1.5rem',
        padding: '1.5rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px'
    }}>
        <h4 style={{ margin: '0 0 1rem 0', color: '#fff' }}>
            <AlertTriangle size={16} color="#f59e0b" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            {problem}
        </h4>
        <div className="grid grid-2" style={{ gap: '1.5rem' }}>
            <div>
                <strong style={{ color: '#ef4444', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>
                    Posibles Causas
                </strong>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    {causes.map((cause, i) => (
                        <li key={i} style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>{cause}</li>
                    ))}
                </ul>
            </div>
            <div>
                <strong style={{ color: '#10b981', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>
                    Soluciones
                </strong>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    {solutions.map((solution, i) => (
                        <li key={i} style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>{solution}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default ValidatorGuide;
