import Scene from './Scene';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* 3D WebGL Background Layer */}
      <Scene />

      {/* Navigation Header bar */}
      <header style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        padding: '24px 8%',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, rgba(11, 12, 16, 0.85) 0%, rgba(11, 12, 16, 0) 100%)',
        backdropFilter: 'blur(6px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#00f0ff', boxShadow: '0 0 12px #00f0ff' }}></div>
          <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '0.05em' }}>
            TXBIZ<span style={{ color: '#00f0ff' }}>ALLIANCE</span>
          </span>
        </div>
        
        <nav style={{ display: 'flex', gap: '28px' }}>
          {['Solutions', 'Infrastructure', 'Reputation', 'Automation'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Layout Split Grid */}
      <main style={{ 
        position: 'relative', 
        zIndex: 5, 
        pointerEvents: 'none', 
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        alignItems: 'center',
        height: '100%',
        padding: '0 8%'
      }}>
        
        {/* Left Side Content Area */}
        <div style={{ maxWidth: '620px', marginTop: '40px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            backgroundColor: 'rgba(0, 240, 255, 0.08)', 
            border: '1px solid rgba(0, 240, 255, 0.2)', 
            padding: '6px 14px', 
            borderRadius: '20px', 
            color: '#00f0ff', 
            fontSize: '0.8rem', 
            fontWeight: 600,
            letterSpacing: '0.06em'
          }}>
            TEXAS B2B INFRASTRUCTURE & SCALE
          </div>

          <h1 style={{ 
            fontSize: '3.8rem', 
            fontWeight: 800, 
            color: '#ffffff', 
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginTop: '20px'
          }}>
            Engineered for <br />
            <span style={{ background: 'linear-gradient(to right, #ffffff, #38bdf8, #00f0ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Service-Based Startups
            </span>
          </h1>
          
          <p style={{ fontSize: '1.1rem', color: '#9ca3af', marginTop: '20px', lineHeight: 1.65 }}>
            Deploy a complete operational core framework. We supply reliable business web hosting, high-tier domain provisioning, and secure professional email systems alongside smart local brand reputation management and automated client workflows.
          </p>

          {/* Grid list of distinct service solutions */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '28px', color: '#e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
              <span style={{ color: '#00f0ff' }}>✓</span> Web Hosting & Domains
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
              <span style={{ color: '#00f0ff' }}>✓</span> Reputation Management
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
              <span style={{ color: '#00f0ff' }}>✓</span> Professional Email
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
              <span style={{ color: '#00f0ff' }}>✓</span> Workflow Automation
            </div>
          </div>
          
          {/* Main Action Buttons */}
          <div style={{ marginTop: '36px', display: 'flex', gap: '16px', pointerEvents: 'auto' }}>
            <button style={{
              background: '#00f0ff',
              color: '#0b0c10',
              border: 'none',
              padding: '14px 32px',
              fontSize: '0.95rem',
              fontWeight: 700,
              borderRadius: '6px',
              boxShadow: '0 8px 24px rgba(0, 240, 255, 0.3)',
              cursor: 'pointer'
            }}>
              Launch Platform
            </button>
            <button style={{
              background: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '14px 28px',
              fontSize: '0.95rem',
              fontWeight: 600,
              borderRadius: '6px',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)'
            }}>
              View Packages
            </button>
          </div>
        </div>

        {/* Right column frame is kept empty to preserve full viewing visibility of your 3D Scene rings */}
        <div></div>

      </main>

    </div>
  );
}
