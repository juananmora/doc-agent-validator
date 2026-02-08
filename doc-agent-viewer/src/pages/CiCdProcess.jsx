import React from 'react';
import MermaidDiagram from '../components/MermaidDiagram';
import {
    GitBranch,
    GitPullRequest,
    Play,
    CheckCircle,
    XCircle,
    AlertTriangle,
    Settings,
    FileCode,
    Terminal,
    Shield,
    Clock,
    BarChart3,
    Zap,
    Lock,
    Eye,
    RefreshCw,
    Layers,
    ArrowRight,
    Lightbulb,
    Activity
} from 'lucide-react';

const CiCdProcess = () => {
    return (
        <div className="content-wrapper fade-in">
            {/* Hero Header */}
            <div className="header-hero">
                <div>
                    <span className="badge badge-warning" style={{ marginBottom: '1rem' }}>
                        <Activity size={12} /> DevOps Pipeline
                    </span>
                    <h1>Validación Automática<br />en CI/CD</h1>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '550px' }}>
                        Integra el validador de agentes en tu pipeline de GitHub Actions para garantizar 
                        que ningún cambio problemático llegue a producción.
                    </p>
                </div>
                <img src={`${import.meta.env.BASE_URL}assets/builder.png`} alt="Builder Banana" className="hero-img" style={{ borderRadius: '12px' }} />
            </div>

            {/* Quick Overview */}
            <section style={{ marginBottom: '3rem' }}>
                <div className="grid grid-4" style={{ gap: '1rem' }}>
                    <OverviewCard 
                        icon={<GitPullRequest size={24} />}
                        title="PR-based"
                        description="Validación en cada Pull Request"
                        color="#A100FF"
                    />
                    <OverviewCard 
                        icon={<Shield size={24} />}
                        title="Quality Gates"
                        description="Bloqueo automático si falla"
                        color="#ef4444"
                    />
                    <OverviewCard 
                        icon={<BarChart3 size={24} />}
                        title="Reportes"
                        description="Comentarios automáticos en PR"
                        color="#10b981"
                    />
                    <OverviewCard 
                        icon={<RefreshCw size={24} />}
                        title="Histórico"
                        description="Tracking de tendencias"
                        color="#3b82f6"
                    />
                </div>
            </section>

            {/* Table of Contents */}
            <section className="pro-card" style={{ marginBottom: '3rem' }}>
                <h3 style={{ marginTop: 0, color: '#00E5FF' }}>
                    <Layers size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Contenidos
                </h3>
                <div className="grid grid-4" style={{ gap: '0.75rem', marginTop: '1rem' }}>
                    <TOCItem number="1" title="Visión General" />
                    <TOCItem number="2" title="Configuración" />
                    <TOCItem number="3" title="Workflow YAML" />
                    <TOCItem number="4" title="Quality Gates" />
                    <TOCItem number="5" title="Reportes" />
                    <TOCItem number="6" title="Secretos" />
                    <TOCItem number="7" title="Optimización" />
                    <TOCItem number="8" title="Troubleshooting" />
                </div>
            </section>

            {/* Section 1: Overview */}
            <section className="pro-card">
                <SectionHeader number="1" title="Visión General del Pipeline" icon={<Eye size={24} />} />
                
                <p>
                    El proceso de CI/CD asegura que <strong>ningún agente llegue a producción sin pasar por 
                    un estricto control de calidad</strong>. Cada vez que se abre o actualiza un Pull Request 
                    que modifica archivos de agentes, el pipeline se ejecuta automáticamente.
                </p>

                {/* Imagen del Workflow */}
                <div style={{ 
                    marginTop: '2rem',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    <img 
                        src={`${import.meta.env.BASE_URL}assets/workflowci.png`} 
                        alt="Diagrama del Proceso de Validación Automática de Agentes"
                        style={{ 
                            width: '100%', 
                            height: 'auto',
                            display: 'block'
                        }}
                    />
                </div>

                <p style={{ 
                    textAlign: 'center', 
                    fontSize: '0.9rem', 
                    color: 'var(--text-muted)',
                    marginTop: '1rem',
                    fontWeight: '500'
                }}>
                    📊 Diagrama: Proceso de Validación Automática de Agentes - Flujo End-to-End
                </p>
            </section>

            {/* Explicación detallada del diagrama */}
            <section style={{ marginTop: '2rem' }}>
                <h2>Explicación del Flujo de Validación</h2>
                <p>
                    El diagrama anterior muestra el proceso completo de validación automática. 
                    A continuación se detalla cada fase:
                </p>

                <div className="grid grid-2" style={{ gap: '1.5rem', marginTop: '2rem' }}>
                    {/* Fase 1 */}
                    <div className="pro-card" style={{ marginBottom: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <span style={{ 
                                width: '32px', height: '32px', 
                                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                                borderRadius: '8px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#fff', fontWeight: '700', fontSize: '0.9rem'
                            }}>1</span>
                            <h3 style={{ margin: 0, color: '#3b82f6' }}>Configuración & Requisitos</h3>
                        </div>
                        <p style={{ fontSize: '0.95rem' }}>
                            Antes de ejecutar el pipeline, se requiere configurar:
                        </p>
                        <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
                            <li><strong>Variables de entorno:</strong> <code>COPILOT_TOKEN</code>, <code>QUALITY_THRESHOLD</code>, <code>ENABLE_LLM_JUDGE</code></li>
                            <li><strong>Setup GitHub:</strong> Crear Action, configurar Secrets, activar Branch Protection en main</li>
                        </ul>
                    </div>

                    {/* Fase 2 */}
                    <div className="pro-card" style={{ marginBottom: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <span style={{ 
                                width: '32px', height: '32px', 
                                background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                                borderRadius: '8px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#fff', fontWeight: '700', fontSize: '0.9rem'
                            }}>2</span>
                            <h3 style={{ margin: 0, color: '#8b5cf6' }}>Inicio & Disparador</h3>
                        </div>
                        <p style={{ fontSize: '0.95rem' }}>
                            El workflow se activa cuando:
                        </p>
                        <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
                            <li>El desarrollador hace <strong>Push/PR a main</strong></li>
                            <li>Los cambios afectan archivos <code>agents/*.md</code></li>
                            <li>El <strong>trigger</strong> detecta modificaciones y lanza el workflow</li>
                        </ul>
                    </div>

                    {/* Fase 3 */}
                    <div className="pro-card" style={{ marginBottom: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <span style={{ 
                                width: '32px', height: '32px', 
                                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                                borderRadius: '8px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#fff', fontWeight: '700', fontSize: '0.9rem'
                            }}>3</span>
                            <h3 style={{ margin: 0, color: '#06b6d4' }}>Flujo de Ejecución</h3>
                        </div>
                        <p style={{ fontSize: '0.95rem' }}>
                            El pipeline ejecuta 4 pasos secuenciales:
                        </p>
                        <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
                            <li><strong>Setup:</strong> Configura entorno, dependencias y SDK</li>
                            <li><strong>Detección:</strong> Filtra archivos .md modificados</li>
                            <li><strong>Validación:</strong> Ejecuta <code>agent_validator.py</code> con Tests + LLM Judge</li>
                            <li><strong>Output:</strong> Genera reporte JSON/MD y comenta en la PR</li>
                        </ul>
                        <div style={{ 
                            display: 'flex', gap: '1rem', marginTop: '1rem', 
                            padding: '0.75rem', background: 'rgba(6,182,212,0.1)', 
                            borderRadius: '8px', justifyContent: 'center'
                        }}>
                            <MetricIcon icon="✓" label="Success Rate" />
                            <MetricIcon icon="🧠" label="LLM Score" />
                            <MetricIcon icon="⏱" label="Latency" />
                            <MetricIcon icon="🛡" label="Security" />
                        </div>
                    </div>

                    {/* Fase 4 */}
                    <div className="pro-card" style={{ marginBottom: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <span style={{ 
                                width: '32px', height: '32px', 
                                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                                borderRadius: '8px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#fff', fontWeight: '700', fontSize: '0.9rem'
                            }}>4</span>
                            <h3 style={{ margin: 0, color: '#f59e0b' }}>Quality Gate & Puntuación</h3>
                        </div>
                        <p style={{ fontSize: '0.95rem' }}>
                            El score se calcula con la fórmula ponderada:
                        </p>
                        <pre style={{ fontSize: '0.8rem', padding: '0.75rem', margin: '0.5rem 0' }}>
                            <code>{`Score = (Success × 0.40) + (LLM × 0.25)
      + (Latency × 0.15) + (Security × 0.20)`}</code>
                        </pre>
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                            <span className="badge" style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)' }}>🔴 Estricto: 85+</span>
                            <span className="badge" style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' }}>🟡 Estándar: 70+</span>
                            <span className="badge badge-success">🟢 Permisivo: 50+</span>
                        </div>
                    </div>
                </div>

                {/* Resultados */}
                <div className="grid grid-2" style={{ gap: '1.5rem', marginTop: '1.5rem' }}>
                    {/* Resultado Aprobado */}
                    <div style={{ 
                        background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.05) 100%)',
                        border: '1px solid rgba(16,185,129,0.3)',
                        borderRadius: '12px',
                        padding: '1.5rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <CheckCircle size={24} color="#10b981" />
                            <h3 style={{ margin: 0, color: '#10b981' }}>5a. Resultado: Aprobado</h3>
                        </div>
                        <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', margin: 0 }}>
                            <li><strong>PR Check:</strong> Success ✓</li>
                            <li><strong>Reporte:</strong> Positivo con métricas detalladas</li>
                            <li><strong>Merge:</strong> Habilitado (Branch Protection OK)</li>
                        </ul>
                    </div>

                    {/* Resultado Bloqueado */}
                    <div style={{ 
                        background: 'linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.05) 100%)',
                        border: '1px solid rgba(239,68,68,0.3)',
                        borderRadius: '12px',
                        padding: '1.5rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <XCircle size={24} color="#ef4444" />
                            <h3 style={{ margin: 0, color: '#ef4444' }}>5b. Resultado: Bloqueado</h3>
                        </div>
                        <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', margin: 0 }}>
                            <li><strong>PR Check:</strong> Failure ✗</li>
                            <li><strong>Reporte:</strong> Áreas de mejora identificadas</li>
                            <li><strong>Merge:</strong> Bloqueado hasta corrección</li>
                        </ul>
                    </div>
                </div>

                {/* Gestión de Fallos */}
                <div className="alert alert-info" style={{ marginTop: '1.5rem' }}>
                    <RefreshCw size={20} color="#3b82f6" />
                    <div>
                        <strong>Gestión de Fallos (Iterate):</strong> Si el agente falla la validación, 
                        el ciclo es: <strong>Analizar</strong> (Score/LLM/Timeout/Security) → <strong>Mejorar</strong> Agente/Tests 
                        → <strong>Push</strong> Nuevos Cambios → <strong>Re-validar</strong>
                    </div>
                </div>
            </section>

            {/* Section 2: Configuration */}
            <section>
                <SectionHeader number="2" title="Configuración del Repositorio" icon={<Settings size={24} />} />
                
                <p>
                    Antes de configurar el workflow, necesitas preparar tu repositorio con la estructura 
                    correcta y los archivos de configuración necesarios.
                </p>

                <div className="grid grid-2" style={{ gap: '2rem', marginTop: '2rem' }}>
                    <div className="pro-card" style={{ marginBottom: 0 }}>
                        <h3 style={{ marginTop: 0, color: '#00E5FF' }}>
                            <FileCode size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Estructura del Repositorio
                        </h3>
                        <pre>
                            <code>{`mi-proyecto/
├── .github/
│   └── workflows/
│       └── validate-agents.yml   # Workflow principal
│
├── agents/                        # Directorio de agentes
│   ├── code-reviewer.md
│   ├── sql-expert.md
│   └── ...
│
├── validator/                     # Herramienta de validación
│   ├── agent_validator.py
│   ├── requirements.txt
│   └── config.yaml
│
├── reports/                       # Reportes generados
│   └── .gitkeep
│
└── history/                       # Histórico de validaciones
    └── .gitkeep`}</code>
                        </pre>
                    </div>
                    
                    <div className="pro-card" style={{ marginBottom: 0 }}>
                        <h3 style={{ marginTop: 0, color: '#00E5FF' }}>
                            <Settings size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Archivo de Configuración
                        </h3>
                        <p style={{ fontSize: '0.95rem' }}>
                            <code>validator/config.yaml</code> define parámetros globales del validador.
                        </p>
                        <pre>
                            <code>{`# config.yaml
validation:
  threshold: 70           # Score mínimo para aprobar
  timeout: 120            # Timeout por test (segundos)
  parallel: true          # Ejecutar tests en paralelo
  
scoring:
  weights:
    success_rate: 0.40
    llm_eval: 0.25
    latency: 0.15
    security: 0.20

output:
  format: ["json", "markdown"]
  dir: "./reports"
  history: "./history"

github:
  post_comment: true      # Comentar en la PR
  set_status: true        # Actualizar status check`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Section 3: Workflow YAML */}
            <section className="pro-card">
                <SectionHeader number="3" title="Workflow de GitHub Actions" icon={<GitBranch size={24} />} />
                
                <p>
                    El siguiente workflow YAML configura la validación automática de agentes. 
                    Cópialo en <code>.github/workflows/validate-agents.yml</code>.
                </p>

                <pre style={{ marginTop: '2rem', maxHeight: '600px', overflow: 'auto' }}>
                    <code>{`name: Validate Copilot Agents

on:
  pull_request:
    paths:
      - 'agents/**/*.md'      # Solo cambios en agentes
    types: [opened, synchronize, reopened]
  
  workflow_dispatch:          # Permite ejecución manual
    inputs:
      agent_path:
        description: 'Path al agente (opcional, valida todos si vacío)'
        required: false

env:
  PYTHON_VERSION: '3.11'
  THRESHOLD: 70

jobs:
  validate:
    name: Validate Agents
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write    # Para comentar en la PR
      statuses: write         # Para actualizar status checks
    
    steps:
      # ============ SETUP ============
      - name: Checkout código
        uses: actions/checkout@v4
        with:
          fetch-depth: 0      # Necesario para detectar cambios
      
      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: \${{ env.PYTHON_VERSION }}
          cache: 'pip'
      
      - name: Instalar dependencias
        run: |
          pip install -r validator/requirements.txt
      
      - name: Setup GitHub CLI
        run: |
          gh auth setup-git
          gh extension install github/gh-copilot
        env:
          GH_TOKEN: \${{ secrets.GH_TOKEN }}
      
      # ============ DETECTION ============
      - name: Detectar agentes modificados
        id: detect
        run: |
          if [ -n "\${{ github.event.inputs.agent_path }}" ]; then
            # Ejecución manual con path específico
            echo "agents=\${{ github.event.inputs.agent_path }}" >> \$GITHUB_OUTPUT
          else
            # Detectar cambios en PR
            CHANGED_AGENTS=$(git diff --name-only \${{ github.event.pull_request.base.sha }} HEAD -- 'agents/**/*.md' | tr '\\n' ' ')
            echo "agents=\$CHANGED_AGENTS" >> \$GITHUB_OUTPUT
          fi
      
      - name: Verificar agentes a validar
        run: |
          echo "📋 Agentes a validar: \${{ steps.detect.outputs.agents }}"
          if [ -z "\${{ steps.detect.outputs.agents }}" ]; then
            echo "⚠️ No se detectaron agentes modificados"
            exit 0
          fi
      
      # ============ VALIDATION ============
      - name: Ejecutar validación
        id: validate
        run: |
          python validator/agent_validator.py \\
            --agents \${{ steps.detect.outputs.agents }} \\
            --config validator/config.yaml \\
            --output reports/ \\
            --format json markdown
        env:
          COPILOT_API_KEY: \${{ secrets.COPILOT_API_KEY }}
          GH_TOKEN: \${{ secrets.GH_TOKEN }}
      
      # ============ RESULTS ============
      - name: Leer resultados
        id: results
        run: |
          SCORE=$(jq -r '.summary.score' reports/report.json)
          PASSED=$(jq -r '.summary.passed' reports/report.json)
          TOTAL=$(jq -r '.summary.total_tests' reports/report.json)
          GRADE=$(jq -r '.summary.grade' reports/report.json)
          
          echo "score=\$SCORE" >> \$GITHUB_OUTPUT
          echo "passed=\$PASSED" >> \$GITHUB_OUTPUT
          echo "total=\$TOTAL" >> \$GITHUB_OUTPUT
          echo "grade=\$GRADE" >> \$GITHUB_OUTPUT
      
      - name: Comentar en PR
        if: github.event_name == 'pull_request'
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const report = fs.readFileSync('reports/report.md', 'utf8');
            
            const score = '\${{ steps.results.outputs.score }}';
            const threshold = '\${{ env.THRESHOLD }}';
            const passed = score >= threshold;
            
            const emoji = passed ? '✅' : '❌';
            const status = passed ? 'APROBADA' : 'BLOQUEADA';
            
            const body = \`## \${emoji} Validación de Agentes: \${status}

**Score:** \${score}/100 (mínimo: \${threshold})
**Tests:** \${{ steps.results.outputs.passed }}/\${{ steps.results.outputs.total }} pasados
**Grado:** \${{ steps.results.outputs.grade }}

<details>
<summary>📊 Ver reporte completo</summary>

\${report}

</details>
\`;
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: body
            });
      
      # ============ QUALITY GATE ============
      - name: Quality Gate
        run: |
          SCORE=\${{ steps.results.outputs.score }}
          THRESHOLD=\${{ env.THRESHOLD }}
          
          echo "📊 Score: \$SCORE / 100"
          echo "🎯 Threshold: \$THRESHOLD"
          
          if (( $(echo "\$SCORE < \$THRESHOLD" | bc -l) )); then
            echo "❌ Quality Gate FAILED: Score \$SCORE está por debajo del threshold \$THRESHOLD"
            exit 1
          else
            echo "✅ Quality Gate PASSED"
          fi
      
      # ============ ARTIFACTS ============
      - name: Upload reportes
        uses: actions/upload-artifact@v4
        with:
          name: validation-reports
          path: reports/
          retention-days: 30
      
      - name: Upload histórico
        uses: actions/upload-artifact@v4
        with:
          name: validation-history
          path: history/
          retention-days: 90`}</code>
                </pre>
            </section>

            {/* Section 4: Quality Gates */}
            <section>
                <SectionHeader number="4" title="Quality Gates y Scoring" icon={<Shield size={24} />} />
                
                <p>
                    El sistema utiliza una matriz de decisión basada en el score final para determinar 
                    si la PR puede ser mergeada o debe ser bloqueada para correcciones.
                </p>

                <div className="grid grid-4" style={{ gap: '1rem', marginTop: '2rem' }}>
                    <ScoreCard 
                        label="Success Rate"
                        weight="40%"
                        color="#2196F3"
                        description="Tests que pasan / Total tests"
                    />
                    <ScoreCard 
                        label="LLM Evaluation"
                        weight="25%"
                        color="#9C27B0"
                        description="Promedio de scores LLM-as-Judge"
                    />
                    <ScoreCard 
                        label="Latency"
                        weight="15%"
                        color="#FF9800"
                        description="Penalización por tiempos altos"
                    />
                    <ScoreCard 
                        label="Security"
                        weight="20%"
                        color="#4CAF50"
                        description="Tests de seguridad pasados"
                    />
                </div>

                <div className="diagram-block" style={{ marginTop: '2rem' }}>
                    <MermaidDiagram
                        caption="Distribución de Pesos en el Score Final"
                        chart={`
                    pie title Composición del Score Final
                        "Success Rate (40%)" : 40
                        "LLM Evaluation (25%)" : 25
                        "Latency (15%)" : 15
                        "Security (20%)" : 20
                    `}
                    />
                </div>

                <div className="pro-card" style={{ marginTop: '2rem' }}>
                    <h3 style={{ marginTop: 0, color: '#f59e0b' }}>Umbrales y Grados</h3>
                    
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Score</th>
                                    <th>Grado</th>
                                    <th>Status</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>90-100</strong></td>
                                    <td><span className="badge badge-success">A</span></td>
                                    <td>Excelente</td>
                                    <td>✅ Auto-merge permitido</td>
                                </tr>
                                <tr>
                                    <td><strong>80-89</strong></td>
                                    <td><span className="badge badge-success">B</span></td>
                                    <td>Bueno</td>
                                    <td>✅ Merge con revisión recomendada</td>
                                </tr>
                                <tr>
                                    <td><strong>70-79</strong></td>
                                    <td><span className="badge badge-warning">C</span></td>
                                    <td>Aceptable</td>
                                    <td>✅ Merge con advertencias</td>
                                </tr>
                                <tr>
                                    <td><strong>60-69</strong></td>
                                    <td><span className="badge badge-warning">D</span></td>
                                    <td>Mejorable</td>
                                    <td>❌ Bloqueado - correcciones requeridas</td>
                                </tr>
                                <tr>
                                    <td><strong>&lt; 60</strong></td>
                                    <td><span className="badge" style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)' }}>F</span></td>
                                    <td>Fallo</td>
                                    <td>❌ Bloqueado - revisión mayor necesaria</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 5: Reports */}
            <section className="pro-card">
                <SectionHeader number="5" title="Reportes Automáticos" icon={<BarChart3 size={24} />} />
                
                <p>
                    El pipeline genera reportes detallados que se publican como comentarios en la PR 
                    y se guardan como artifacts para análisis posterior.
                </p>

                <div className="grid grid-2" style={{ gap: '2rem', marginTop: '2rem' }}>
                    <div>
                        <h3 style={{ marginTop: 0, color: '#10b981' }}>Contenido del Reporte</h3>
                        <ul style={{ paddingLeft: '1.5rem' }}>
                            <li><strong>Resumen ejecutivo:</strong> Score, grado, tests pasados/fallidos</li>
                            <li><strong>Detalle por test:</strong> Status, duración, keywords encontradas</li>
                            <li><strong>Evaluaciones LLM:</strong> Score y explicación del juez</li>
                            <li><strong>Métricas de rendimiento:</strong> Tiempos de respuesta</li>
                            <li><strong>Problemas de seguridad:</strong> expected_not_contains fallidos</li>
                            <li><strong>Recomendaciones:</strong> Sugerencias de mejora</li>
                            <li><strong>Comparativa histórica:</strong> Tendencia vs ejecuciones anteriores</li>
                        </ul>
                    </div>
                    
                    <div style={{ 
                        background: 'var(--bg-code)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        padding: '1.5rem'
                    }}>
                        <h4 style={{ marginTop: 0, color: '#fff', fontSize: '0.9rem' }}>
                            Ejemplo de Comentario en PR
                        </h4>
                        <div style={{ 
                            background: 'rgba(16,185,129,0.1)',
                            border: '1px solid rgba(16,185,129,0.3)',
                            borderRadius: '6px',
                            padding: '1rem',
                            marginTop: '1rem'
                        }}>
                            <p style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#fff' }}>
                                ✅ <strong>Validación de Agentes: APROBADA</strong>
                            </p>
                            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                                <strong>Score:</strong> 85/100 (mínimo: 70)<br />
                                <strong>Tests:</strong> 11/12 pasados<br />
                                <strong>Grado:</strong> B
                            </p>
                            <details style={{ marginTop: '0.5rem' }}>
                                <summary style={{ cursor: 'pointer', color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>
                                    📊 Ver reporte completo
                                </summary>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Secrets */}
            <section>
                <SectionHeader number="6" title="Configuración de Secretos" icon={<Lock size={24} />} />
                
                <p>
                    El workflow requiere ciertos secretos configurados en el repositorio para autenticarse 
                    con GitHub y el servicio de Copilot.
                </p>

                <div className="pro-card" style={{ marginTop: '2rem' }}>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Secreto</th>
                                    <th>Descripción</th>
                                    <th>Cómo Obtenerlo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>GH_TOKEN</code></td>
                                    <td>Personal Access Token con permisos de Copilot</td>
                                    <td>Settings → Developer Settings → PAT (classic)</td>
                                </tr>
                                <tr>
                                    <td><code>COPILOT_API_KEY</code></td>
                                    <td>API Key para acceso programático a Copilot</td>
                                    <td>Contactar al equipo de plataforma</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="alert alert-warning" style={{ marginTop: '1.5rem' }}>
                        <AlertTriangle size={20} color="#f59e0b" />
                        <div>
                            <strong>Seguridad:</strong> Nunca expongas estos secretos en logs o código. 
                            Usa siempre <code>secrets.NOMBRE</code> en el workflow.
                        </div>
                    </div>

                    <h3 style={{ color: '#00E5FF', marginTop: '2rem' }}>Configurar Secretos</h3>
                    <ol style={{ paddingLeft: '1.5rem' }}>
                        <li>Ve a <strong>Settings</strong> del repositorio</li>
                        <li>Selecciona <strong>Secrets and variables → Actions</strong></li>
                        <li>Click en <strong>New repository secret</strong></li>
                        <li>Añade cada secreto con su valor correspondiente</li>
                    </ol>
                </div>
            </section>

            {/* Section 7: Optimization */}
            <section className="pro-card">
                <SectionHeader number="7" title="Optimización del Pipeline" icon={<Zap size={24} />} />
                
                <div className="grid grid-2" style={{ gap: '2rem' }}>
                    <div>
                        <h3 style={{ marginTop: 0, color: '#10b981' }}>
                            <CheckCircle size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Best Practices
                        </h3>
                        <ul style={{ paddingLeft: '1.5rem' }}>
                            <li><strong>Caché de dependencias:</strong> Usa <code>cache: 'pip'</code> para acelerar setup</li>
                            <li><strong>Paralelización:</strong> Habilita <code>parallel: true</code> en config</li>
                            <li><strong>Filtrado inteligente:</strong> Solo valida agentes modificados</li>
                            <li><strong>Timeouts ajustados:</strong> Configura timeouts realistas por test</li>
                            <li><strong>Artifacts con retención:</strong> Configura días de retención apropiados</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 style={{ marginTop: 0, color: '#3b82f6' }}>
                            <Clock size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Métricas de Referencia
                        </h3>
                        <div style={{ marginTop: '1rem' }}>
                            <MetricBar label="Setup (~30s)" value={30} max={180} color="#2196F3" />
                            <MetricBar label="Detección (~5s)" value={5} max={180} color="#4CAF50" />
                            <MetricBar label="Validación (~60-120s)" value={90} max={180} color="#FF9800" />
                            <MetricBar label="Reporte (~10s)" value={10} max={180} color="#9C27B0" />
                        </div>
                        <p style={{ fontSize: '0.85rem', marginTop: '1rem', color: 'var(--text-muted)' }}>
                            Tiempo total típico: <strong>2-3 minutos</strong> por agente
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 8: Troubleshooting */}
            <section>
                <SectionHeader number="8" title="Troubleshooting" icon={<AlertTriangle size={24} />} />
                
                <div style={{ marginTop: '2rem' }}>
                    <TroubleshootItem 
                        problem="El workflow no se ejecuta al crear la PR"
                        causes={[
                            "No hay cambios en archivos agents/**/*.md",
                            "El workflow file tiene errores de sintaxis",
                            "Los permisos del workflow no están configurados"
                        ]}
                        solutions={[
                            "Verifica que los archivos modificados coincidan con el path filter",
                            "Valida el YAML con una herramienta online",
                            "Revisa Settings → Actions → General → Workflow permissions"
                        ]}
                    />
                    
                    <TroubleshootItem 
                        problem="Error de autenticación con Copilot CLI"
                        causes={[
                            "GH_TOKEN no tiene permisos suficientes",
                            "El token ha expirado",
                            "La extensión de Copilot no está instalada"
                        ]}
                        solutions={[
                            "Genera un nuevo PAT con scopes: copilot, repo, workflow",
                            "Actualiza el secreto con el nuevo token",
                            "Añade el step de instalación de gh-copilot"
                        ]}
                    />
                    
                    <TroubleshootItem 
                        problem="Tests fallan por timeout"
                        causes={[
                            "Timeout configurado muy bajo",
                            "Servicio de Copilot con alta latencia",
                            "Prompts muy complejos que requieren más tiempo"
                        ]}
                        solutions={[
                            "Aumenta el timeout en config.yaml o por test",
                            "Implementa retry logic en el validador",
                            "Simplifica los prompts de prueba"
                        ]}
                    />
                    
                    <TroubleshootItem 
                        problem="El comentario no aparece en la PR"
                        causes={[
                            "Permisos pull-requests: write no configurados",
                            "Error en el script de actions/github-script",
                            "El workflow falla antes del step de comentario"
                        ]}
                        solutions={[
                            "Añade permissions: pull-requests: write al job",
                            "Revisa los logs del step para errores específicos",
                            "Asegura que los steps anteriores completen correctamente"
                        ]}
                    />
                </div>
            </section>

            {/* CTA */}
            <section style={{ 
                textAlign: 'center', 
                padding: '3rem 2rem',
                background: 'linear-gradient(135deg, rgba(255,152,0,0.1) 0%, rgba(161,0,255,0.05) 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(255,152,0,0.2)',
                marginTop: '3rem'
            }}>
                <h2 style={{ marginTop: 0, marginBottom: '1rem' }}>¿Necesitas Ayuda?</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', textAlign: 'center' }}>
                    Si tienes problemas configurando el pipeline o necesitas asistencia, 
                    contacta al equipo de Platform Engineering.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#" className="btn btn-primary">
                        Abrir Ticket de Soporte <ArrowRight size={18} />
                    </a>
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
            background: 'rgba(255, 152, 0, 0.15)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FF9800'
        }}>
            {icon}
        </div>
        <h2 style={{ margin: 0 }}>{number}. {title}</h2>
    </div>
);

const TOCItem = ({ number, title }) => (
    <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem',
        padding: '0.5rem 0.75rem',
        background: 'rgba(255,255,255,0.02)',
        borderRadius: '6px',
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
    }}>
        <span style={{ 
            width: '20px', 
            height: '20px', 
            background: '#FF9800',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.7rem',
            fontWeight: '700',
            color: '#000'
        }}>{number}</span>
        <span>{title}</span>
    </div>
);

const OverviewCard = ({ icon, title, description, color }) => (
    <div style={{ 
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '1.25rem',
        textAlign: 'center'
    }}>
        <div style={{ color, marginBottom: '0.75rem' }}>{icon}</div>
        <h4 style={{ margin: '0 0 0.25rem 0', color: '#fff', fontSize: '1rem' }}>{title}</h4>
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>{description}</p>
    </div>
);

const PhaseCard = ({ phase, description, icon, color }) => (
    <div style={{ 
        padding: '1.25rem',
        background: 'var(--bg-elevated)',
        borderRadius: '8px',
        borderTop: `3px solid ${color}`
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color }}>
            {icon}
            <strong>{phase}</strong>
        </div>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>{description}</p>
    </div>
);

const ScoreCard = ({ label, weight, color, description }) => (
    <div style={{ 
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '1.5rem',
        textAlign: 'center'
    }}>
        <h3 style={{ margin: 0, color, fontSize: '1rem' }}>{label}</h3>
        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fff', margin: '0.5rem 0' }}>{weight}</div>
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>{description}</p>
    </div>
);

const MetricBar = ({ label, value, max, color }) => (
    <div style={{ marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{label}</span>
        </div>
        <div style={{ 
            height: '8px', 
            background: 'var(--bg-code)', 
            borderRadius: '4px',
            overflow: 'hidden'
        }}>
            <div style={{ 
                width: `${(value / max) * 100}%`, 
                height: '100%', 
                background: color,
                borderRadius: '4px',
                transition: 'width 0.5s ease'
            }} />
        </div>
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

const MetricIcon = ({ icon, label }) => (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: '0.25rem'
    }}>
        <span style={{ fontSize: '1.25rem' }}>{icon}</span>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500' }}>{label}</span>
    </div>
);

export default CiCdProcess;
