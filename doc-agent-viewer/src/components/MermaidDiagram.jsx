import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

// Logo ">" de Accenture como componente SVG
const AccentureLogo = ({ size = 20, color = "white" }) => (
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

// Configuración Global de Mermaid con tema Accenture
mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: 13,
    flowchart: {
        htmlLabels: true,
        curve: 'basis',
        padding: 15,
        nodeSpacing: 40,
        rankSpacing: 50,
        useMaxWidth: true,
        defaultRenderer: 'dagre-wrapper',
    },
    sequence: {
        diagramMarginX: 40,
        diagramMarginY: 10,
        actorMargin: 40,
        width: 140,
        height: 55,
        boxMargin: 8,
        boxTextMargin: 4,
        noteMargin: 8,
        messageMargin: 30,
        mirrorActors: true,
        useMaxWidth: true,
        wrap: true,
    },
    pie: {
        useMaxWidth: true,
        textPosition: 0.65,
    },
    themeVariables: {
        // === COLORES ACCENTURE ===
        // Primary Purple
        primaryColor: '#f3e8ff',
        primaryBorderColor: '#A100FF',
        primaryTextColor: '#1e1e2f',
        
        // Secondary - Cyan accent
        secondaryColor: '#e0f7fa',
        secondaryBorderColor: '#00bcd4',
        secondaryTextColor: '#1e1e2f',
        
        // Tertiary - Orange accent  
        tertiaryColor: '#fff3e0',
        tertiaryBorderColor: '#ff9800',
        tertiaryTextColor: '#1e1e2f',
        
        // Background y líneas
        background: '#ffffff',
        mainBkg: '#ffffff',
        lineColor: '#A100FF',
        textColor: '#1e1e2f',
        
        // Nodos
        nodeBkg: '#ffffff',
        nodeBorder: '#A100FF',
        nodeTextColor: '#1e1e2f',
        
        // Clusters/Grupos - con toque Accenture
        clusterBkg: '#faf5ff',
        clusterBorder: '#A100FF',
        titleColor: '#A100FF',
        
        // Edge labels
        edgeLabelBackground: '#ffffff',
        
        // === SEQUENCE DIAGRAM ===
        actorBkg: '#f3e8ff',
        actorBorder: '#A100FF',
        actorTextColor: '#1e1e2f',
        actorLineColor: '#A100FF',
        signalColor: '#A100FF',
        signalTextColor: '#1e1e2f',
        labelBoxBkgColor: '#faf5ff',
        labelBoxBorderColor: '#A100FF',
        labelTextColor: '#1e1e2f',
        loopTextColor: '#A100FF',
        noteBkgColor: '#fff3e0',
        noteBorderColor: '#ff9800',
        noteTextColor: '#1e1e2f',
        activationBkgColor: '#e0f7fa',
        activationBorderColor: '#00bcd4',
        sequenceNumberColor: '#ffffff',
        
        // === PIE CHART - Paleta Accenture ===
        pie1: '#A100FF',      // Accenture Purple
        pie2: '#00bcd4',      // Cyan
        pie3: '#ff9800',      // Orange
        pie4: '#4caf50',      // Green
        pie5: '#e91e63',      // Pink
        pie6: '#9c27b0',      // Deep Purple
        pie7: '#03a9f4',      // Light Blue
        pie8: '#ff5722',      // Deep Orange
        pieStrokeColor: '#ffffff',
        pieStrokeWidth: '3px',
        pieTitleTextSize: '16px',
        pieTitleTextColor: '#1e1e2f',
        pieSectionTextSize: '12px',
        pieSectionTextColor: '#ffffff',
        pieLegendTextSize: '13px',
        pieLegendTextColor: '#1e1e2f',
        pieOpacity: '1',
    }
});

const MermaidDiagram = ({ chart, caption }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.innerHTML = '';
            const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

            mermaid.render(id, chart).then(({ svg }) => {
                containerRef.current.innerHTML = svg;

                // Post-procesamiento del SVG
                const svgElement = containerRef.current.querySelector('svg');
                if (svgElement) {
                    svgElement.style.maxWidth = '100%';
                    svgElement.style.height = 'auto';
                    svgElement.style.minHeight = '180px';

                    // Mejorar tipografía
                    const textNodes = svgElement.querySelectorAll('text, tspan');
                    textNodes.forEach(t => {
                        t.style.fontFamily = 'Inter, -apple-system, sans-serif';
                        t.style.fontWeight = '500';
                        const fill = t.getAttribute('fill');
                        if (!fill || fill === 'none' || fill === '#333' || fill === 'rgb(51, 51, 51)') {
                            t.setAttribute('fill', '#1e1e2f');
                        }
                    });

                    // Líneas con color Accenture
                    const paths = svgElement.querySelectorAll('.flowchart-link, .messageLine0, .messageLine1, .path');
                    paths.forEach(p => {
                        p.style.strokeWidth = '2px';
                        const stroke = p.getAttribute('stroke');
                        if (stroke === '#333' || stroke === 'rgb(51, 51, 51)' || stroke === '#000') {
                            p.setAttribute('stroke', '#A100FF');
                        }
                    });

                    // Nodos con sombra sutil
                    const nodes = svgElement.querySelectorAll('.node rect, .node polygon, .node circle, .node ellipse');
                    nodes.forEach(node => {
                        node.style.strokeWidth = '2px';
                        node.style.filter = 'drop-shadow(0 2px 4px rgba(161,0,255,0.15))';
                    });

                    // Clusters con estilo Accenture
                    const clusters = svgElement.querySelectorAll('.cluster rect');
                    clusters.forEach(c => {
                        c.style.strokeWidth = '2px';
                        c.setAttribute('stroke', '#A100FF');
                        c.setAttribute('fill', '#faf5ff');
                        c.setAttribute('rx', '12');
                        c.setAttribute('ry', '12');
                    });

                    // Títulos de clusters
                    const clusterLabels = svgElement.querySelectorAll('.cluster-label text');
                    clusterLabels.forEach(l => {
                        l.setAttribute('fill', '#A100FF');
                        l.style.fontWeight = '600';
                    });

                    // Flechas con color Accenture
                    const markers = svgElement.querySelectorAll('marker path');
                    markers.forEach(m => {
                        m.setAttribute('fill', '#A100FF');
                    });

                    // Actores en sequence diagrams
                    const actors = svgElement.querySelectorAll('.actor');
                    actors.forEach(a => {
                        a.setAttribute('stroke', '#A100FF');
                        a.style.strokeWidth = '2px';
                    });
                }

            }).catch(err => {
                console.error('Mermaid render error:', err);
                containerRef.current.innerHTML = `
                    <div style="
                        padding: 2rem; 
                        text-align: center; 
                        color: #A100FF;
                        background: #faf5ff;
                        border-radius: 12px;
                        border: 1px solid #e9d5ff;
                    ">
                        <p style="margin: 0; font-weight: 600;">Error renderizando diagrama</p>
                        <p style="margin: 0.5rem 0 0; font-size: 0.85rem; color: #7c3aed;">${err.message || 'Error desconocido'}</p>
                    </div>
                `;
            });
        }
    }, [chart]);

    return (
        <div className="accenture-diagram">
            {/* Header con logo Accenture */}
            <div className="diagram-header">
                <div className="diagram-header-left">
                    <AccentureLogo size={18} />
                    <span className="diagram-header-text">Technical Diagram</span>
                </div>
                <div className="diagram-header-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            {/* Contenedor del diagrama */}
            <div 
                ref={containerRef} 
                className="diagram-content"
            />

            {/* Caption */}
            {caption && (
                <div className="diagram-footer">
                    <span className="diagram-caption">{caption}</span>
                </div>
            )}

            <style>{`
                .accenture-diagram {
                    width: 100%;
                    border-radius: 16px;
                    overflow: hidden;
                    background: #ffffff;
                    box-shadow: 
                        0 4px 6px -1px rgba(161, 0, 255, 0.1),
                        0 2px 4px -2px rgba(161, 0, 255, 0.1),
                        0 0 0 1px rgba(161, 0, 255, 0.08);
                }
                
                .diagram-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 12px 16px;
                    background: linear-gradient(135deg, #A100FF 0%, #7c3aed 100%);
                    border-bottom: none;
                }
                
                .diagram-header-left {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .diagram-header-text {
                    font-size: 12px;
                    font-weight: 600;
                    color: white;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                .diagram-header-dots {
                    display: flex;
                    gap: 6px;
                }
                
                .diagram-header-dots span {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.3);
                }
                
                .diagram-header-dots span:first-child {
                    background: #ff5f57;
                }
                
                .diagram-header-dots span:nth-child(2) {
                    background: #febc2e;
                }
                
                .diagram-header-dots span:last-child {
                    background: #28c840;
                }
                
                .diagram-content {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 24px;
                    background: linear-gradient(180deg, #faf5ff 0%, #ffffff 100%);
                    min-height: 200px;
                    overflow-x: auto;
                }
                
                .diagram-content svg {
                    max-width: 100%;
                    height: auto;
                }
                
                /* Estilos generales para texto Mermaid */
                .diagram-content svg text {
                    font-family: 'Inter', -apple-system, sans-serif !important;
                    font-weight: 500 !important;
                }
                
                /* Nodos con estilo Accenture */
                .diagram-content .node rect,
                .diagram-content .node circle,
                .diagram-content .node polygon,
                .diagram-content .node ellipse {
                    stroke-width: 2px !important;
                    transition: all 0.2s ease;
                }
                
                /* Edge labels */
                .diagram-content .edgeLabel {
                    background-color: #ffffff !important;
                    padding: 4px 8px !important;
                    border-radius: 6px !important;
                    font-size: 12px !important;
                }
                
                /* Líneas de conexión */
                .diagram-content .flowchart-link,
                .diagram-content .path {
                    stroke-width: 2px !important;
                }
                
                /* Clusters con estilo Accenture */
                .diagram-content .cluster rect {
                    rx: 12px !important;
                    ry: 12px !important;
                    stroke-width: 2px !important;
                }
                
                /* Sequence diagram */
                .diagram-content .actor {
                    stroke-width: 2px !important;
                }
                
                .diagram-content .messageLine0,
                .diagram-content .messageLine1 {
                    stroke-width: 2px !important;
                }
                
                .diagram-content .loopLine {
                    stroke-width: 2px !important;
                    stroke-dasharray: 6, 4 !important;
                }
                
                .diagram-content .activation {
                    stroke-width: 1.5px !important;
                }
                
                /* Pie chart */
                .diagram-content .pieCircle {
                    stroke-width: 3px !important;
                    stroke: #ffffff !important;
                }
                
                /* Footer con caption */
                .diagram-footer {
                    padding: 12px 16px;
                    background: #faf5ff;
                    border-top: 1px solid rgba(161, 0, 255, 0.1);
                }
                
                .diagram-caption {
                    display: block;
                    font-size: 13px;
                    color: #6b21a8;
                    font-weight: 500;
                    text-align: center;
                }
                
                .diagram-caption::before {
                    content: '◆ ';
                    color: #A100FF;
                }
            `}</style>
        </div>
    );
};

export default MermaidDiagram;
