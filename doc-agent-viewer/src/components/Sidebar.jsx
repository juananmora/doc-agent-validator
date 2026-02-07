import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    BookOpen,
    ShieldCheck,
    Activity,
    Home,
    ChevronRight,
    Code2,
    ExternalLink
} from 'lucide-react';

// Logo ">" de Accenture
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

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* Header with Accenture Logo */}
            <div className="sidebar-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '42px',
                        height: '42px',
                        background: 'linear-gradient(135deg, #A100FF 0%, #7a00c4 100%)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(161, 0, 255, 0.3)'
                    }}>
                        <AccentureLogo size={18} color="#fff" />
                    </div>
                    <div>
                        <h1 className="sidebar-logo">
                            DOC-AGENT<span className="sidebar-logo-accent">.</span>
                        </h1>
                        <p className="sidebar-version">Validator Suite v1.0</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="sidebar-nav">
                {/* Overview Section */}
                <div className="nav-section">
                    <small className="nav-section-title">Overview</small>
                    <NavItem to="/" Icon={Home} label="Inicio" badge={null} />
                </div>

                {/* Documentation Section */}
                <div className="nav-section">
                    <small className="nav-section-title">Documentación</small>
                    <NavItem to="/validator" Icon={ShieldCheck} label="Agent Validator" badge="Core" badgeColor="#A100FF" />
                    <NavItem to="/cicd" Icon={Activity} label="CI/CD Pipeline" badge="DevOps" badgeColor="#FF9800" />
                </div>

                {/* Technical Section */}
                <div className="nav-section">
                    <small className="nav-section-title">Técnico</small>
                    <NavItem to="/sdk" Icon={Code2} label="Python SDK" badge="API" badgeColor="#00E5FF" />
                </div>

                {/* Resources Section */}
                <div className="nav-section">
                    <small className="nav-section-title">Recursos</small>
                    <ExternalLinkItem
                        href="https://github.com/juananmora/doc-agent-validator"
                        Icon={ExternalLink}
                        label="Repositorio GitHub"
                    />
                    <ExternalLinkItem
                        href="https://docs.github.com/en/copilot"
                        Icon={BookOpen}
                        label="Copilot Docs"
                    />
                </div>
            </nav>

            {/* Footer with User Info */}
            <div className="sidebar-footer">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '38px',
                        height: '38px',
                        background: 'linear-gradient(135deg, #A100FF 0%, #7a00c4 100%)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        fontSize: '14px',
                        color: 'white'
                    }}>
                        AC
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'white' }}>Accenture User</div>
                        <div style={{
                            fontSize: '0.7rem',
                            color: 'var(--text-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            <span style={{
                                width: '6px',
                                height: '6px',
                                background: '#10b981',
                                borderRadius: '50%',
                                display: 'inline-block'
                            }} />
                            Admin Access
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div style={{
                    marginTop: '1rem',
                    padding: '0.75rem',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '8px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.5rem'
                }}>
                    <MiniStat label="Agentes" value="12" />
                    <MiniStat label="Tests" value="48" />
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ to, Icon, label, badge, badgeColor }) => (
    <NavLink
        to={to}
        className={({ isActive }) => isActive ? "nav-item-active" : "nav-item"}
    >
        {({ isActive }) => (
            <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Icon
                        size={18}
                        color={isActive ? '#A100FF' : 'currentColor'}
                        strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span style={{
                        fontSize: '0.9rem',
                        fontWeight: isActive ? '600' : '400'
                    }}>
                        {label}
                    </span>
                    {badge && (
                        <span style={{
                            fontSize: '0.6rem',
                            fontWeight: '700',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            background: `${badgeColor}20`,
                            color: badgeColor,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}>
                            {badge}
                        </span>
                    )}
                </div>
                {isActive && (
                    <ChevronRight
                        size={14}
                        color="#A100FF"
                        style={{
                            opacity: 0.8,
                            animation: 'slideIn 0.2s ease'
                        }}
                    />
                )}
            </>
        )}
    </NavLink>
);

const ExternalLinkItem = ({ href, Icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 12px',
            textDecoration: 'none',
            color: 'var(--text-muted)',
            transition: 'all 0.2s ease',
            borderRadius: '8px',
            marginBottom: '4px'
        }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Icon size={16} />
            <span style={{ fontSize: '0.85rem' }}>{label}</span>
        </div>
        <ExternalLink size={12} style={{ opacity: 0.5 }} />
    </a>
);

const MiniStat = ({ label, value }) => (
    <div style={{ textAlign: 'center' }}>
        <div style={{
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#A100FF'
        }}>
            {value}
        </div>
        <div style={{
            fontSize: '0.65rem',
            color: 'var(--text-subtle)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
        }}>
            {label}
        </div>
    </div>
);

export default Sidebar;
