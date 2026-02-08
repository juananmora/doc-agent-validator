import React from 'react';
import MermaidDiagram from '../components/MermaidDiagram';
import {
    Code,
    BookOpen,
    Zap,
    Settings,
    Package,
    Terminal,
    FileCode,
    Shield,
    Clock,
    Layers,
    Play,
    CheckCircle,
    AlertTriangle,
    Lightbulb,
    ArrowRight,
    RefreshCw,
    Wifi,
    Lock
} from 'lucide-react';

const SdkGuide = () => {
    return (
        <div className="content-wrapper fade-in">
            {/* Hero Header */}
            <div className="header-hero">
                <div>
                    <span className="badge badge-info" style={{ marginBottom: '1rem' }}>
                        <Code size={12} /> API Reference
                    </span>
                    <h1>GitHub Copilot SDK<br />para Python</h1>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '550px' }}>
                        SDK asíncrono moderno para interactuar con el CLI de GitHub Copilot. 
                        Crea sesiones conversacionales, gestiona herramientas y recibe eventos en tiempo real.
                    </p>
                </div>
                <img src={`${import.meta.env.BASE_URL}assets/teacher.png`} alt="Teacher Banana" className="hero-img" style={{ borderRadius: '12px' }} />
            </div>

            {/* Quick Stats */}
            <section style={{ marginBottom: '3rem' }}>
                <div className="grid grid-4" style={{ gap: '1rem' }}>
                    <QuickStat icon={<Zap size={20} />} value="Async" label="Native asyncio" />
                    <QuickStat icon={<Shield size={20} />} value="Type Safe" label="Full typing" />
                    <QuickStat icon={<Package size={20} />} value="0 deps" label="Solo stdlib" />
                    <QuickStat icon={<Clock size={20} />} value="< 100ms" label="Latencia init" />
                </div>
            </section>

            {/* Table of Contents */}
            <section className="pro-card" style={{ marginBottom: '3rem' }}>
                <h3 style={{ marginTop: 0, color: '#00E5FF' }}>
                    <Layers size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Contenidos
                </h3>
                <div className="grid grid-4" style={{ gap: '0.75rem', marginTop: '1rem' }}>
                    <TOCItem number="1" title="Instalación" />
                    <TOCItem number="2" title="Quick Start" />
                    <TOCItem number="3" title="Arquitectura" />
                    <TOCItem number="4" title="CopilotClient" />
                    <TOCItem number="5" title="CopilotSession" />
                    <TOCItem number="6" title="Custom Tools" />
                    <TOCItem number="7" title="Eventos" />
                    <TOCItem number="8" title="Ejemplos" />
                </div>
            </section>

            {/* Section 1: Installation */}
            <section className="pro-card">
                <SectionHeader number="1" title="Instalación y Requisitos" icon={<Package size={24} />} />
                
                <div className="grid grid-2" style={{ gap: '2rem' }}>
                    <div>
                        <h3 style={{ marginTop: 0, color: '#10b981' }}>Requisitos Previos</h3>
                        <ul style={{ paddingLeft: '1.5rem' }}>
                            <li><strong>Python 3.10+</strong> con soporte asyncio nativo</li>
                            <li><strong>GitHub CLI</strong> instalado y autenticado</li>
                            <li><strong>GitHub Copilot</strong> extensión CLI habilitada</li>
                            <li><strong>Licencia activa</strong> de GitHub Copilot</li>
                        </ul>
                        
                        <div className="alert alert-info" style={{ marginTop: '1.5rem' }}>
                            <Lightbulb size={18} color="#3b82f6" />
                            <div>
                                <strong>Tip:</strong> Verifica la instalación con <code>gh copilot --version</code>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 style={{ marginTop: 0, color: '#00E5FF' }}>Instalación</h3>
                        <pre>
                            <code>{`# Clonar el repositorio
git clone https://github.com/accenture/copilot-sdk
cd copilot-sdk

# Crear entorno virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\\Scripts\\activate   # Windows

# Instalar dependencias
pip install -r requirements.txt

# Verificar instalación
python -c "from copilot import CopilotClient; print('OK')"
`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Section 2: Quick Start */}
            <section>
                <SectionHeader number="2" title="Quick Start" icon={<Play size={24} />} />
                
                <p>
                    El SDK está diseñado para ser intuitivo. Con unas pocas líneas de código puedes 
                    crear una sesión y enviar mensajes a Copilot.
                </p>

                <div className="pro-card" style={{ marginTop: '2rem' }}>
                    <h3 style={{ marginTop: 0, color: '#00E5FF' }}>Ejemplo Básico</h3>
                    <pre>
                        <code>{`import asyncio
from copilot import CopilotClient, SessionConfig

async def main():
    # Crear cliente
    client = CopilotClient()
    
    # Iniciar proceso CLI
    await client.start()
    
    try:
        # Crear sesión con configuración
        config = SessionConfig(
            agent_name="mi_agente",           # Nombre del custom agent
            instructions="Eres un asistente experto en Python.",
            tools=["bash", "create", "edit"]  # Herramientas habilitadas
        )
        
        session = await client.create_session(config)
        
        # Enviar mensaje y esperar respuesta
        response = await session.send("¿Cómo creo un decorador en Python?")
        
        print(f"Respuesta: {response.content}")
        print(f"Tiempo: {response.duration_ms}ms")
        
    finally:
        # Limpiar recursos
        await client.stop()

# Ejecutar
asyncio.run(main())`}</code>
                    </pre>
                </div>

                <div className="grid grid-3" style={{ gap: '1rem', marginTop: '2rem' }}>
                    <StepCard 
                        step="1"
                        title="Crear Cliente"
                        description="Instancia CopilotClient que gestiona la conexión con el CLI."
                    />
                    <StepCard 
                        step="2"
                        title="Crear Sesión"
                        description="Configura y crea una sesión conversacional con el agente."
                    />
                    <StepCard 
                        step="3"
                        title="Enviar Mensajes"
                        description="Usa send() para enviar prompts y recibir respuestas."
                    />
                </div>
            </section>

            {/* Section 3: Architecture */}
            <section>
                <SectionHeader number="3" title="Arquitectura del Sistema" icon={<Layers size={24} />} />
                
                <p>
                    El SDK sigue una arquitectura en capas que separa las responsabilidades 
                    y facilita el testing y la extensibilidad.
                </p>

                <div className="diagram-block" style={{ marginTop: '2rem' }}>
                    <MermaidDiagram
                        caption="Componentes y Flujo de Datos del SDK"
                        chart={`
                    graph TB
                        subgraph App["🖥️ Tu Aplicación"]
                            APP[Código de Usuario]
                        end
                        
                        subgraph SDK["📦 SDK Python"]
                            CLIENT[CopilotClient<br/>Gestión de conexión]
                            SESSION[CopilotSession<br/>Gestión de conversación]
                            TOOLS[ToolRegistry<br/>Herramientas custom]
                            TYPES[Types & Models<br/>Dataclasses tipados]
                            
                            CLIENT --> SESSION
                            SESSION --> TOOLS
                            CLIENT --> TYPES
                            SESSION --> TYPES
                            TOOLS --> TYPES
                        end
                        
                        subgraph Transport["🔌 Transporte"]
                            JSONRPC[JSON-RPC Layer<br/>Serialización/Parsing]
                            PIPE[Pipe Handler<br/>stdin/stdout]
                        end
                        
                        subgraph CLI["⚙️ GitHub Copilot CLI"]
                            PROCESS[Proceso CLI]
                            ENGINE[Motor IA<br/>GPT-4]
                            PROCESS --> ENGINE
                        end
                        
                        APP --> CLIENT
                        CLIENT --> JSONRPC
                        SESSION --> JSONRPC
                        JSONRPC --> PIPE
                        PIPE -->|stdio| PROCESS
                        PROCESS -->|eventos| PIPE
                        
                        style CLIENT fill:#4CAF50,stroke:#2E7D32,color:#fff
                        style SESSION fill:#2196F3,stroke:#1565C0,color:#fff
                        style TOOLS fill:#FF9800,stroke:#E65100,color:#fff
                        style JSONRPC fill:#9C27B0,stroke:#6A1B9A,color:#fff
                        style PROCESS fill:#607D8B,stroke:#455A64,color:#fff
                    `}
                    />
                </div>

                <div className="grid grid-2" style={{ gap: '2rem', marginTop: '2rem' }}>
                    <ComponentCard 
                        name="CopilotClient"
                        description="Punto de entrada principal. Gestiona el ciclo de vida del proceso CLI, conexiones y creación de sesiones."
                        file="client.py"
                        color="#4CAF50"
                    />
                    <ComponentCard 
                        name="CopilotSession"
                        description="Representa una conversación activa. Maneja el envío de mensajes, recepción de eventos y estado de la sesión."
                        file="session.py"
                        color="#2196F3"
                    />
                    <ComponentCard 
                        name="ToolRegistry"
                        description="Registro de herramientas personalizadas. Permite definir funciones que el agente puede invocar."
                        file="tools.py"
                        color="#FF9800"
                    />
                    <ComponentCard 
                        name="JSON-RPC Layer"
                        description="Capa de transporte que serializa/deserializa mensajes JSON-RPC 2.0 entre Python y el CLI."
                        file="jsonrpc.py"
                        color="#9C27B0"
                    />
                </div>
            </section>

            {/* Section 4: CopilotClient API */}
            <section className="pro-card">
                <SectionHeader number="4" title="CopilotClient API" icon={<Terminal size={24} />} />
                
                <p>
                    <code>CopilotClient</code> es la clase principal para interactuar con el CLI de Copilot. 
                    Gestiona el proceso subyacente y proporciona métodos para crear sesiones.
                </p>

                <div className="table-wrapper" style={{ marginTop: '2rem' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Método</th>
                                <th>Tipo</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>__init__(config?)</code></td>
                                <td>sync</td>
                                <td>Constructor. Acepta ClientConfig opcional para personalizar comportamiento.</td>
                            </tr>
                            <tr>
                                <td><code>start()</code></td>
                                <td>async</td>
                                <td>Inicia el proceso CLI de Copilot. Debe llamarse antes de crear sesiones.</td>
                            </tr>
                            <tr>
                                <td><code>stop()</code></td>
                                <td>async</td>
                                <td>Detiene el proceso CLI y libera recursos. Llamar siempre al finalizar.</td>
                            </tr>
                            <tr>
                                <td><code>create_session(config)</code></td>
                                <td>async</td>
                                <td>Crea una nueva sesión conversacional con la configuración especificada.</td>
                            </tr>
                            <tr>
                                <td><code>get_session(id)</code></td>
                                <td>async</td>
                                <td>Obtiene una sesión existente por su ID.</td>
                            </tr>
                            <tr>
                                <td><code>list_sessions()</code></td>
                                <td>async</td>
                                <td>Lista todas las sesiones activas.</td>
                            </tr>
                            <tr>
                                <td><code>is_running</code></td>
                                <td>property</td>
                                <td>Indica si el proceso CLI está activo.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 style={{ color: '#00E5FF', marginTop: '2rem' }}>ClientConfig</h3>
                <pre>
                    <code>{`from copilot import CopilotClient, ClientConfig

config = ClientConfig(
    cli_path="/usr/local/bin/gh",  # Path al CLI (default: auto-detect)
    timeout=60,                     # Timeout global en segundos
    max_retries=3,                  # Reintentos en caso de error
    log_level="INFO",               # Nivel de logging
    env={                           # Variables de entorno adicionales
        "COPILOT_DEBUG": "true"
    }
)

client = CopilotClient(config)`}</code>
                </pre>
            </section>

            {/* Section 5: CopilotSession API */}
            <section>
                <SectionHeader number="5" title="CopilotSession API" icon={<RefreshCw size={24} />} />
                
                <p>
                    <code>CopilotSession</code> representa una conversación activa con el agente. 
                    Mantiene el contexto y permite enviar mensajes y recibir eventos.
                </p>

                <div className="pro-card" style={{ marginTop: '2rem' }}>
                    <h3 style={{ marginTop: 0, color: '#00E5FF' }}>SessionConfig</h3>
                    <pre>
                        <code>{`from copilot import SessionConfig, Permission

config = SessionConfig(
    # Identidad del agente
    agent_name="code_reviewer",           # Nombre del custom agent
    instructions="Eres un experto...",    # System prompt
    
    # Herramientas disponibles
    tools=["bash", "create", "edit", "fetch"],
    
    # Permisos granulares
    permissions=[
        Permission.READ_FILES,
        Permission.WRITE_FILES,
        Permission.EXECUTE_COMMANDS
    ],
    
    # Configuración de sesión
    timeout=120,                          # Timeout por mensaje
    max_turns=50,                         # Máximo de turnos
    stream=True,                          # Streaming de respuestas
    
    # Contexto inicial
    context={
        "project": "mi-proyecto",
        "language": "python"
    }
)`}</code>
                    </pre>
                </div>

                <div className="table-wrapper" style={{ marginTop: '2rem' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Método</th>
                                <th>Tipo</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>send(message)</code></td>
                                <td>async</td>
                                <td>Envía un mensaje y espera la respuesta completa.</td>
                            </tr>
                            <tr>
                                <td><code>stream(message)</code></td>
                                <td>async generator</td>
                                <td>Envía un mensaje y recibe la respuesta en chunks (streaming).</td>
                            </tr>
                            <tr>
                                <td><code>on(event, handler)</code></td>
                                <td>sync</td>
                                <td>Registra un handler para eventos específicos. Retorna función unsubscribe.</td>
                            </tr>
                            <tr>
                                <td><code>cancel()</code></td>
                                <td>async</td>
                                <td>Cancela la operación actual si está en progreso.</td>
                            </tr>
                            <tr>
                                <td><code>close()</code></td>
                                <td>async</td>
                                <td>Cierra la sesión y libera recursos.</td>
                            </tr>
                            <tr>
                                <td><code>history</code></td>
                                <td>property</td>
                                <td>Lista de mensajes de la conversación.</td>
                            </tr>
                            <tr>
                                <td><code>id</code></td>
                                <td>property</td>
                                <td>Identificador único de la sesión.</td>
                            </tr>
                            <tr>
                                <td><code>is_idle</code></td>
                                <td>property</td>
                                <td>Indica si la sesión está esperando input.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="diagram-block" style={{ marginTop: '2rem' }}>
                    <MermaidDiagram
                        caption="Diagrama de Secuencia: Flujo de una Conversación"
                        chart={`
                    sequenceDiagram
                        participant App as 🖥️ Aplicación
                        participant Client as 📦 CopilotClient
                        participant Session as 💬 CopilotSession
                        participant RPC as 🔌 JSON-RPC
                        participant CLI as ⚙️ Copilot CLI
                        
                        App->>Client: CopilotClient()
                        App->>Client: await start()
                        Client->>CLI: Iniciar proceso
                        CLI-->>Client: ✓ Proceso listo
                        
                        App->>Client: await create_session(config)
                        Client->>RPC: session.create
                        RPC->>CLI: Crear sesión
                        CLI-->>RPC: session_id
                        RPC-->>Client: session_id
                        Client->>Session: Crear instancia
                        Client-->>App: session
                        
                        App->>Session: on("chunk", handler)
                        Session-->>App: unsubscribe()
                        
                        App->>Session: await send(prompt)
                        Session->>RPC: session.send
                        RPC->>CLI: Enviar mensaje
                        
                        loop Procesamiento
                            CLI-->>RPC: chunk event
                            RPC-->>Session: Notificación
                            Session->>App: handler(chunk)
                        end
                        
                        CLI-->>RPC: session.idle
                        RPC-->>Session: Respuesta completa
                        Session-->>App: Response
                    `}
                    />
                </div>
            </section>

            {/* Section 6: Custom Tools */}
            <section className="pro-card">
                <SectionHeader number="6" title="Herramientas Personalizadas" icon={<Settings size={24} />} />
                
                <p>
                    El SDK permite definir herramientas personalizadas que el agente puede invocar durante 
                    la conversación. Usa el decorador <code>@define_tool</code> para registrar funciones.
                </p>

                <div className="grid grid-2" style={{ gap: '2rem', marginTop: '2rem' }}>
                    <div>
                        <h3 style={{ marginTop: 0, color: '#FF9800' }}>Definir una Herramienta</h3>
                        <pre>
                            <code>{`from pydantic import BaseModel, Field
from copilot import define_tool, ToolResult

# Definir esquema de parámetros
class CalculatorParams(BaseModel):
    """Parámetros para la calculadora."""
    operation: str = Field(
        description="Operación: add, sub, mul, div"
    )
    a: float = Field(description="Primer operando")
    b: float = Field(description="Segundo operando")

# Registrar herramienta
@define_tool(
    name="calculator",
    description="Realiza operaciones matemáticas básicas"
)
def calculator(params: CalculatorParams) -> ToolResult:
    """Ejecuta la operación solicitada."""
    ops = {
        "add": lambda: params.a + params.b,
        "sub": lambda: params.a - params.b,
        "mul": lambda: params.a * params.b,
        "div": lambda: params.a / params.b if params.b != 0 else "Error: división por cero"
    }
    
    if params.operation not in ops:
        return ToolResult.error(f"Operación '{params.operation}' no soportada")
    
    result = ops[params.operation]()
    return ToolResult.success(f"Resultado: {result}")`}</code>
                        </pre>
                    </div>
                    
                    <div>
                        <h3 style={{ marginTop: 0, color: '#FF9800' }}>Usar la Herramienta</h3>
                        <pre>
                            <code>{`from copilot import CopilotClient, SessionConfig
from my_tools import calculator  # Importar herramienta

async def main():
    client = CopilotClient()
    await client.start()
    
    # Registrar herramienta en la sesión
    config = SessionConfig(
        agent_name="math_assistant",
        instructions="Usa la herramienta calculator para operaciones.",
        custom_tools=[calculator]  # Pasar herramienta
    )
    
    session = await client.create_session(config)
    
    # El agente puede invocar calculator
    response = await session.send(
        "¿Cuánto es 15 multiplicado por 7?"
    )
    
    print(response.content)
    # Output: "15 × 7 = 105"
    
    await client.stop()`}</code>
                        </pre>
                        
                        <div className="alert alert-warning" style={{ marginTop: '1.5rem' }}>
                            <AlertTriangle size={18} color="#f59e0b" />
                            <div>
                                <strong>Seguridad:</strong> Las herramientas se ejecutan con los permisos 
                                de tu aplicación. Valida siempre los inputs.
                            </div>
                        </div>
                    </div>
                </div>

                <h3 style={{ color: '#FF9800', marginTop: '2rem' }}>Herramientas Asíncronas</h3>
                <pre>
                    <code>{`@define_tool(description="Obtiene datos de una API externa")
async def fetch_api_data(params: FetchParams) -> ToolResult:
    """Herramienta asíncrona para llamadas HTTP."""
    async with aiohttp.ClientSession() as session:
        async with session.get(params.url) as response:
            if response.status == 200:
                data = await response.json()
                return ToolResult.success(json.dumps(data, indent=2))
            else:
                return ToolResult.error(f"HTTP {response.status}")`}</code>
                </pre>
            </section>

            {/* Section 7: Events */}
            <section>
                <SectionHeader number="7" title="Sistema de Eventos" icon={<Wifi size={24} />} />
                
                <p>
                    El SDK emite eventos durante el procesamiento que permiten reaccionar a diferentes 
                    estados de la conversación. Usa <code>session.on()</code> para suscribirte.
                </p>

                <div className="table-wrapper" style={{ marginTop: '2rem' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Evento</th>
                                <th>Payload</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>chunk</code></td>
                                <td><code>ChunkEvent</code></td>
                                <td>Fragmento de texto de la respuesta (streaming).</td>
                            </tr>
                            <tr>
                                <td><code>tool_call</code></td>
                                <td><code>ToolCallEvent</code></td>
                                <td>El agente quiere invocar una herramienta.</td>
                            </tr>
                            <tr>
                                <td><code>tool_result</code></td>
                                <td><code>ToolResultEvent</code></td>
                                <td>Resultado de la ejecución de una herramienta.</td>
                            </tr>
                            <tr>
                                <td><code>thinking</code></td>
                                <td><code>ThinkingEvent</code></td>
                                <td>El agente está "pensando" (chain of thought).</td>
                            </tr>
                            <tr>
                                <td><code>idle</code></td>
                                <td><code>IdleEvent</code></td>
                                <td>La sesión está lista para recibir nuevo input.</td>
                            </tr>
                            <tr>
                                <td><code>error</code></td>
                                <td><code>ErrorEvent</code></td>
                                <td>Ocurrió un error durante el procesamiento.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="pro-card" style={{ marginTop: '2rem' }}>
                    <h3 style={{ marginTop: 0, color: '#00E5FF' }}>Ejemplo: Streaming con Eventos</h3>
                    <pre>
                        <code>{`async def interactive_session():
    client = CopilotClient()
    await client.start()
    
    session = await client.create_session(SessionConfig(
        agent_name="assistant",
        stream=True
    ))
    
    # Registrar handlers de eventos
    def on_chunk(event):
        print(event.content, end="", flush=True)
    
    def on_thinking(event):
        print(f"\\n💭 {event.thought}\\n")
    
    def on_tool_call(event):
        print(f"\\n🔧 Llamando: {event.tool_name}({event.args})\\n")
    
    def on_error(event):
        print(f"\\n❌ Error: {event.message}\\n")
    
    # Suscribirse a eventos
    session.on("chunk", on_chunk)
    session.on("thinking", on_thinking)
    session.on("tool_call", on_tool_call)
    session.on("error", on_error)
    
    # Enviar mensaje
    await session.send("Explica qué es un closure en Python")
    
    await client.stop()`}</code>
                    </pre>
                </div>
            </section>

            {/* Section 8: Examples */}
            <section className="pro-card">
                <SectionHeader number="8" title="Ejemplos Completos" icon={<FileCode size={24} />} />
                
                <div className="grid grid-2" style={{ gap: '2rem' }}>
                    <div>
                        <h3 style={{ marginTop: 0, color: '#10b981' }}>Code Review Automatizado</h3>
                        <pre style={{ fontSize: '0.85rem' }}>
                            <code>{`async def review_code(file_path: str):
    """Revisa un archivo de código con Copilot."""
    client = CopilotClient()
    await client.start()
    
    # Leer archivo
    with open(file_path) as f:
        code = f.read()
    
    session = await client.create_session(SessionConfig(
        agent_name="code_reviewer",
        instructions="""
        Eres un revisor de código experto.
        Identifica:
        1. Bugs potenciales
        2. Problemas de seguridad
        3. Mejoras de rendimiento
        4. Violaciones de estilo
        
        Sé específico y constructivo.
        """
    ))
    
    response = await session.send(f"""
    Revisa el siguiente código Python:
    
    \`\`\`python
    {code}
    \`\`\`
    """)
    
    print(response.content)
    await client.stop()

# Uso
asyncio.run(review_code("src/main.py"))`}</code>
                        </pre>
                    </div>
                    
                    <div>
                        <h3 style={{ marginTop: 0, color: '#3b82f6' }}>Chatbot Interactivo</h3>
                        <pre style={{ fontSize: '0.85rem' }}>
                            <code>{`async def chatbot():
    """Chatbot interactivo en terminal."""
    client = CopilotClient()
    await client.start()
    
    session = await client.create_session(SessionConfig(
        agent_name="assistant",
        instructions="Eres un asistente amigable.",
        stream=True
    ))
    
    # Handler para streaming
    session.on("chunk", lambda e: print(e.content, end=""))
    
    print("🤖 ¡Hola! Escribe 'salir' para terminar.\\n")
    
    while True:
        try:
            user_input = input("\\n👤 Tú: ")
            
            if user_input.lower() == "salir":
                break
            
            print("\\n🤖 Copilot: ", end="")
            await session.send(user_input)
            print()  # Nueva línea
            
        except KeyboardInterrupt:
            break
    
    await client.stop()
    print("\\n👋 ¡Hasta luego!")

asyncio.run(chatbot())`}</code>
                        </pre>
                    </div>
                </div>

                <h3 style={{ color: '#f59e0b', marginTop: '2rem' }}>Testing de Agentes</h3>
                <pre>
                    <code>{`import pytest
from copilot import CopilotClient, SessionConfig

@pytest.fixture
async def copilot_session():
    """Fixture para sesiones de test."""
    client = CopilotClient()
    await client.start()
    
    session = await client.create_session(SessionConfig(
        agent_name="test_agent",
        timeout=30
    ))
    
    yield session
    
    await session.close()
    await client.stop()

@pytest.mark.asyncio
async def test_agent_responds_correctly(copilot_session):
    """Test que el agente responde correctamente."""
    response = await copilot_session.send("¿Qué es Python?")
    
    assert response.status == "success"
    assert "lenguaje" in response.content.lower()
    assert "programación" in response.content.lower()

@pytest.mark.asyncio
async def test_agent_handles_errors(copilot_session):
    """Test que el agente maneja errores gracefully."""
    response = await copilot_session.send("")
    
    # Debería manejar input vacío sin crashear
    assert response.status in ["success", "error"]`}</code>
                </pre>
            </section>

            {/* Best Practices */}
            <section style={{ marginTop: '3rem' }}>
                <h2>Best Practices</h2>
                
                <div className="grid grid-2" style={{ gap: '2rem', marginTop: '2rem' }}>
                    <div className="pro-card" style={{ marginBottom: 0 }}>
                        <h3 style={{ marginTop: 0, color: '#10b981' }}>
                            <CheckCircle size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Recomendado
                        </h3>
                        <ul style={{ paddingLeft: '1.5rem' }}>
                            <li>Usa <code>async with</code> para manejo automático de recursos</li>
                            <li>Implementa timeouts apropiados para tu caso de uso</li>
                            <li>Valida inputs en herramientas custom</li>
                            <li>Usa streaming para respuestas largas</li>
                            <li>Maneja errores con try/except específicos</li>
                            <li>Cierra sesiones cuando ya no las necesites</li>
                        </ul>
                    </div>
                    
                    <div className="pro-card" style={{ marginBottom: 0 }}>
                        <h3 style={{ marginTop: 0, color: '#ef4444' }}>
                            <AlertTriangle size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Evitar
                        </h3>
                        <ul style={{ paddingLeft: '1.5rem' }}>
                            <li>No crear múltiples clientes simultáneamente</li>
                            <li>No ignorar excepciones del SDK</li>
                            <li>No usar sync code en handlers de eventos</li>
                            <li>No almacenar credenciales en código</li>
                            <li>No hacer sesiones infinitas sin limpiar historia</li>
                            <li>No confiar ciegamente en outputs del LLM</li>
                        </ul>
                    </div>
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
            background: 'rgba(0, 229, 255, 0.15)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#00E5FF'
        }}>
            {icon}
        </div>
        <h2 style={{ margin: 0 }}>{number}. {title}</h2>
    </div>
);

const QuickStat = ({ icon, value, label }) => (
    <div style={{ 
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '1.25rem',
        textAlign: 'center'
    }}>
        <div style={{ color: '#00E5FF', marginBottom: '0.5rem' }}>{icon}</div>
        <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff' }}>{value}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{label}</div>
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
            background: '#00E5FF',
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

const StepCard = ({ step, title, description }) => (
    <div style={{ 
        padding: '1.25rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        position: 'relative'
    }}>
        <div style={{ 
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '28px',
            height: '28px',
            background: 'linear-gradient(135deg, #00E5FF, #0097A7)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.8rem',
            fontWeight: '700',
            color: '#000'
        }}>{step}</div>
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>{title}</h4>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>{description}</p>
    </div>
);

const ComponentCard = ({ name, description, file, color }) => (
    <div style={{ 
        padding: '1.5rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderLeft: `4px solid ${color}`,
        borderRadius: '8px'
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <h4 style={{ margin: 0, color: '#fff' }}>{name}</h4>
            <code style={{ fontSize: '0.75rem', opacity: 0.7 }}>{file}</code>
        </div>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>{description}</p>
    </div>
);

export default SdkGuide;
