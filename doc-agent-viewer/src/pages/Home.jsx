import React from 'react';
import { Link } from 'react-router-dom';
import { 
    ArrowRight, 
    CheckCircle, 
    Shield, 
    Cpu, 
    Activity, 
    Zap, 
    Lock,
    BarChart3,
    GitBranch,
    Terminal,
    FileCode,
    Clock,
    Target,
    TrendingUp,
    AlertTriangle,
    Sparkles
} from 'lucide-react';

// Logo ">" de Accenture
const AccentureLogo = ({ size = 20, color = "#A100FF" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 26 34" 
        fill="none"
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
        <path 
            d="M0 0L17.5 17L0 34H8.5L26 17L8.5 0H0Z" 
            fill={color}
        />
    </svg>
);

const Home = () => {
    return (
        <div className="content-wrapper fade-in">

            {/* Hero Section */}
            <section style={{ padding: '1rem 0 4rem 0', maxWidth: '900px', position: 'relative' }}>
                <div style={{ 
                    position: 'absolute', 
                    top: '-50px', 
                    left: '-100px', 
                    width: '300px', 
                    height: '300px', 
                    background: 'radial-gradient(circle, rgba(161,0,255,0.15) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />
                
                {/* Accenture Badge */}
                <div style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    padding: '8px 16px 8px 12px',
                    background: 'linear-gradient(135deg, rgba(161,0,255,0.15) 0%, rgba(161,0,255,0.05) 100%)',
                    border: '1px solid rgba(161,0,255,0.3)',
                    borderRadius: '50px',
                    marginBottom: '1.5rem'
                }}>
                    <AccentureLogo size={16} color="#A100FF" />
                    <span style={{ 
                        fontSize: '0.8rem', 
                        fontWeight: '600', 
                        color: '#A100FF',
                        letterSpacing: '0.5px'
                    }}>
                        ACCENTURE ENTERPRISE SOLUTION
                    </span>
                </div>
                
                <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.05' }}>
                    Validación Inteligente<br />para Agentes de IA.
                </h1>
                
                <p style={{ fontSize: '1.35rem', color: '#b0b0b0', maxWidth: '700px', lineHeight: '1.7', marginBottom: '2rem' }}>
                    Framework de validación empresarial que garantiza la <strong style={{ color: '#fff' }}>fiabilidad</strong>, 
                    <strong style={{ color: '#fff' }}> seguridad</strong> y <strong style={{ color: '#fff' }}>rendimiento</strong> de 
                    tus Custom Agents de GitHub Copilot antes de llegar a producción.
                </p>
                
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link to="/validator" className="btn btn-primary">
                        Explorar Documentación <ArrowRight size={18} />
                    </Link>
                    <Link to="/cicd" className="btn btn-secondary">
                        Ver Pipeline CI/CD
                    </Link>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ marginBottom: '4rem' }}>
                <div className="grid grid-4" style={{ gap: '1rem' }}>
                    <StatCard value="100%" label="Cobertura de Tests" icon={<Target size={24} />} />
                    <StatCard value="< 2s" label="Tiempo de Validación" icon={<Clock size={24} />} />
                    <StatCard value="4" label="Tipos de Evaluación" icon={<BarChart3 size={24} />} />
                    <StatCard value="0" label="Falsos Positivos" icon={<Shield size={24} />} />
                </div>
            </section>

            {/* Problem/Solution Section */}
            <section className="pro-card" style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
                    <AlertTriangle size={28} color="#f59e0b" />
                    <div>
                        <h2 style={{ marginTop: 0 }}>El Desafío Empresarial</h2>
                    </div>
                </div>
                
                <div className="grid grid-2" style={{ gap: '3rem' }}>
                    <div>
                        <p style={{ fontSize: '1.1rem' }}>
                            A medida que escalamos la adopción de IA Generativa en la organización, confiar en 
                            <strong> "pruebas manuales"</strong> o <strong>"intuición"</strong> para validar 
                            el comportamiento de los Agentes es <span style={{ color: '#ef4444' }}>insuficiente y arriesgado</span>.
                        </p>
                        
                        <div style={{ 
                            background: 'rgba(239, 68, 68, 0.1)', 
                            border: '1px solid rgba(239, 68, 68, 0.2)',
                            borderLeft: '4px solid #ef4444',
                            padding: '1rem 1.25rem', 
                            borderRadius: '8px',
                            marginTop: '1.5rem'
                        }}>
                            <p style={{ margin: 0, fontSize: '0.95rem', color: '#fca5a5' }}>
                                <strong style={{ color: '#fca5a5' }}>Riesgos sin validación:</strong> Respuestas inconsistentes, 
                                alucinaciones de seguridad, regresiones de rendimiento, y exposición de datos sensibles.
                            </p>
                        </div>
                    </div>
                    
                    <div>
                        <div style={{ 
                            background: 'rgba(16, 185, 129, 0.1)', 
                            border: '1px solid rgba(16, 185, 129, 0.2)',
                            borderLeft: '4px solid #10b981',
                            padding: '1.5rem', 
                            borderRadius: '8px'
                        }}>
                            <h3 style={{ marginTop: 0, color: '#10b981', fontSize: '1.1rem' }}>
                                <Zap size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                La Solución
                            </h3>
                            <p style={{ margin: 0, fontSize: '0.95rem' }}>
                                Un <strong>suite de validación determinística</strong> que trata los prompts y 
                                comportamientos del agente como código—sujeto a testing automatizado riguroso, 
                                evaluación semántica con LLM-as-Judge, y quality gates en CI/CD.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section style={{ marginBottom: '4rem' }}>
                <h2>Capacidades Clave</h2>
                <div className="grid grid-3" style={{ marginTop: '2rem' }}>
                    <FeatureItem 
                        icon={<Lock size={22} color="#A100FF" />}
                        title="Mitigación de Riesgos"
                        description="Previene prompt injection y outputs dañinos mediante validaciones 'expected_not_contains' y análisis de seguridad."
                    />
                    <FeatureItem 
                        icon={<Sparkles size={22} color="#A100FF" />}
                        title="Evaluación Semántica"
                        description="Utiliza LLM-as-a-Judge para evaluar la calidad de las respuestas, más allá de simples keywords."
                    />
                    <FeatureItem 
                        icon={<TrendingUp size={22} color="#A100FF" />}
                        title="Detección de Regresiones"
                        description="Compara automáticamente el rendimiento contra baselines históricos para detectar degradaciones."
                    />
                    <FeatureItem 
                        icon={<GitBranch size={22} color="#A100FF" />}
                        title="Integración CI/CD"
                        description="Quality gates automáticos que bloquean PRs que no cumplan con los umbrales de calidad definidos."
                    />
                    <FeatureItem 
                        icon={<FileCode size={22} color="#A100FF" />}
                        title="Tests como Código"
                        description="Define casos de prueba en Markdown junto a tu agente, versionados y auditables en Git."
                    />
                    <FeatureItem 
                        icon={<BarChart3 size={22} color="#A100FF" />}
                        title="Reportes Detallados"
                        description="Genera reportes en JSON y Markdown con métricas, análisis y recomendaciones de mejora."
                    />
                </div>
            </section>

            {/* System Components */}
            <section style={{ marginBottom: '4rem' }}>
                <h2>Componentes del Sistema</h2>
                <p style={{ marginBottom: '2rem' }}>
                    El Doc-Agent Validator está compuesto por módulos especializados que trabajan en conjunto 
                    para proporcionar una validación completa de tus agentes.
                </p>
                
                <div className="grid grid-3" style={{ marginTop: '2rem' }}>
                    <Link to="/validator" style={{ textDecoration: 'none' }}>
                        <div className="feature-card" style={{ cursor: 'pointer' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                <div style={{ 
                                    width: '50px', 
                                    height: '50px', 
                                    background: 'rgba(161, 0, 255, 0.15)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Shield size={26} color="#A100FF" />
                                </div>
                                <img src="/assets/detective.png" style={{ width: '55px', borderRadius: '50%', border: '2px solid #333' }} alt="Detective" />
                            </div>
                            <h3 style={{ marginTop: 0, color: '#fff' }}>Validator Engine</h3>
                            <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                                Motor central en Python que parsea archivos <code>agent.md</code>, 
                                orquesta sesiones de prueba y ejecuta validaciones multi-capa.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span className="badge badge-info">Python</span>
                                <span className="badge badge-success">Async</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/cicd" style={{ textDecoration: 'none' }}>
                        <div className="feature-card" style={{ cursor: 'pointer' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                <div style={{ 
                                    width: '50px', 
                                    height: '50px', 
                                    background: 'rgba(161, 0, 255, 0.15)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Activity size={26} color="#A100FF" />
                                </div>
                                <img src="/assets/builder.png" style={{ width: '55px', borderRadius: '50%', border: '2px solid #333' }} alt="Builder" />
                            </div>
                            <h3 style={{ marginTop: 0, color: '#fff' }}>CI/CD Pipeline</h3>
                            <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                                Integración con GitHub Actions para ejecutar validaciones automáticas 
                                en cada PR y bloquear cambios que fallen los quality gates.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span className="badge badge-warning">GitHub Actions</span>
                                <span className="badge badge-primary">Quality Gates</span>
                            </div>
                        </div>
                    </Link>

                    <Link to="/sdk" style={{ textDecoration: 'none' }}>
                        <div className="feature-card" style={{ cursor: 'pointer' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                <div style={{ 
                                    width: '50px', 
                                    height: '50px', 
                                    background: 'rgba(161, 0, 255, 0.15)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Cpu size={26} color="#A100FF" />
                                </div>
                                <img src="/assets/teacher.png" style={{ width: '55px', borderRadius: '50%', border: '2px solid #333' }} alt="Teacher" />
                            </div>
                            <h3 style={{ marginTop: 0, color: '#fff' }}>Python SDK</h3>
                            <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                                Wrapper asíncrono moderno alrededor del CLI de Copilot para crear 
                                herramientas personalizadas y automatizaciones avanzadas.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span className="badge badge-info">asyncio</span>
                                <span className="badge badge-success">JSON-RPC</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Quick Start */}
            <section className="pro-card" style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Terminal size={28} color="#00E5FF" />
                    <h2 style={{ marginTop: 0, marginBottom: 0 }}>Quick Start</h2>
                </div>
                
                <p>Comienza a validar tus agentes en minutos con estos simples pasos:</p>
                
                <div className="grid grid-2" style={{ gap: '2rem', marginTop: '1.5rem' }}>
                    <div>
                        <h3 style={{ color: '#00E5FF', fontSize: '1rem' }}>1. Define tu Agente</h3>
                        <pre style={{ marginTop: '0.5rem' }}>
                            <code>{`---
name: mi_agente
description: Agente especializado en...
version: 1.0.0
tools:
  - bash
  - create
---

# System Prompt
Eres un asistente experto en...

## Test Cases

### test_saludo_basico
**prompt**: Hola, ¿cómo estás?
**expected_contains**:
- hola
- ayudar
**expected_behavior**: Debe responder 
de forma amigable y ofrecer ayuda.`}</code>
                        </pre>
                    </div>
                    
                    <div>
                        <h3 style={{ color: '#00E5FF', fontSize: '1rem' }}>2. Ejecuta el Validador</h3>
                        <pre style={{ marginTop: '0.5rem' }}>
                            <code>{`# Instalar dependencias
pip install -r requirements.txt

# Ejecutar validación
python agent_validator.py \\
  --agent agents/mi_agente.md \\
  --output reports/

# Ver resultados
cat reports/report.md`}</code>
                        </pre>
                        
                        <h3 style={{ color: '#00E5FF', fontSize: '1rem', marginTop: '1.5rem' }}>3. Revisa el Reporte</h3>
                        <p style={{ fontSize: '0.9rem' }}>
                            El validador genera reportes detallados en formato JSON y Markdown 
                            con métricas de éxito, tiempos de respuesta, evaluaciones LLM y recomendaciones.
                        </p>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section style={{ marginBottom: '4rem' }}>
                <h2>¿Cómo Funciona?</h2>
                <p style={{ marginBottom: '2rem' }}>
                    El proceso de validación sigue un flujo estructurado para garantizar la calidad de cada agente.
                </p>
                
                <div className="grid grid-4" style={{ gap: '1rem' }}>
                    <StepCard 
                        number="01"
                        title="Parseo"
                        description="El validador lee el archivo agent.md y extrae metadata, prompts y casos de prueba."
                    />
                    <StepCard 
                        number="02"
                        title="Ejecución"
                        description="Cada test case se ejecuta contra el agente y se captura la respuesta completa."
                    />
                    <StepCard 
                        number="03"
                        title="Evaluación"
                        description="Se evalúan keywords, comportamiento semántico (LLM) y métricas de rendimiento."
                    />
                    <StepCard 
                        number="04"
                        title="Reporte"
                        description="Se genera un reporte con score final, detalles por test y recomendaciones."
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ 
                textAlign: 'center', 
                padding: '4rem 2rem',
                background: 'linear-gradient(135deg, rgba(161,0,255,0.1) 0%, rgba(0,229,255,0.05) 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(161,0,255,0.2)'
            }}>
                <h2 style={{ marginTop: 0, marginBottom: '1rem' }}>¿Listo para Empezar?</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', textAlign: 'center' }}>
                    Explora la documentación completa para aprender a integrar el validador 
                    en tu flujo de desarrollo y garantizar la calidad de tus agentes.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link to="/validator" className="btn btn-primary">
                        Guía del Validador <ArrowRight size={18} />
                    </Link>
                    <Link to="/sdk" className="btn btn-secondary">
                        Documentación del SDK
                    </Link>
                </div>
            </section>

        </div>
    );
};

// Helper Components
const StatCard = ({ value, label, icon }) => (
    <div className="stat-card">
        <div style={{ color: '#A100FF', marginBottom: '0.5rem' }}>{icon}</div>
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
    </div>
);

const FeatureItem = ({ icon, title, description }) => (
    <div style={{ 
        padding: '1.5rem',
        background: 'rgba(255,255,255,0.02)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        transition: 'all 0.25s ease'
    }}>
        <div style={{ marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ marginTop: 0, fontSize: '1.1rem', color: '#fff' }}>{title}</h3>
        <p style={{ fontSize: '0.95rem', margin: 0 }}>{description}</p>
    </div>
);

const StepCard = ({ number, title, description }) => (
    <div style={{ 
        padding: '1.5rem',
        background: 'var(--bg-card)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden'
    }}>
        <div style={{ 
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            fontSize: '4rem',
            fontWeight: '800',
            color: 'rgba(161,0,255,0.1)',
            lineHeight: 1
        }}>
            {number}
        </div>
        <h3 style={{ marginTop: 0, fontSize: '1.1rem', color: '#fff', position: 'relative' }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', margin: 0, position: 'relative' }}>{description}</p>
    </div>
);

const ListItem = ({ title, text }) => (
    <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '15px' }}>
        <CheckCircle size={24} color="#A100FF" style={{ flexShrink: 0 }} />
        <div>
            <strong style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>{title}</strong>
            <span style={{ fontSize: '0.95rem' }}>{text}</span>
        </div>
    </li>
);

export default Home;
