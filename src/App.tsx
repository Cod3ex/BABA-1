import Scene from './Scene';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Premium 3D WebGL Background Layer */}
      <Scene />

      {/* Global Interface Navigation Header */}
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
        background: 'linear-gradient(to bottom, rgba(11, 12, 16, 0.8) 0%, rgba(11, 12, 16, 0) 100%)',
        backdropFilter: 'blur(4px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#00f0ff', boxShadow: '0 0 10px #00f0ff' }}></div>
          <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.05em' }}>TXBIZ<span style={{ color: '#00f0ff' }}>ALLIANCE</span></span>
        </div>
        
        <nav style={{ display: 'flex', gap: '32px' }}>
          {['Network', 'Services', 'Intelligence', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Structural Hero Layout Grid Section */}
      <main style={{ 
        position: 'relative', 
        zIndex: 5, 
        pointerEvents: 'none', // Directs click operations smoothly down to the interactive 3D rings matrix
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        height: '100%',
        padding: '0 8%'
      }}>
        
        {/* Left Column Area: Value Proposition Core Content */}
        <div style={{ maxWidth: '560px', marginTop: '40px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            backgroundColor: 'rgba(56, 189, 248, 0.1)', 
            border: '1px solid rgba(56, 189, 248, 0.2)', 
            padding: '6px 16px', 
            borderRadius: '20px', 
            color: '#38bdf8', 
            fontSize: '0.85rem', 
            fontWeight: 600,
            letterSpacing: '0.05em'
          }}>
            TEXAS COMMERCE PLATFORM
          </div>

          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: 800, 
            color: '#ffffff', 
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginTop: '20px'
          }}>
            Scale Your <br />
            <span style={{ background: 'linear-gradient(to right, #ffffff, #38bdf8, #0dd3c5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Business Enterprise
            </span>
          </h1>
          
          <p style={{ fontSize: '1.15rem', color: '#9ca3af', marginTop: '24px', lineHeight: 1.65 }}>
            Connect with Texas's premier alliance network. We integrate modern cloud architecture, automation layers, and regional business intelligence pipelines into a centralized portal layer.
          </p>
          
          {/* Active Interactive Layout Controls */}
          <div style={{ marginTop: '40px', display: 'flex', gap: '16px', pointerEvents: 'auto' }}>
            <button style={{
              background: '#00f0ff',
              color: '#0b0c10',
              border: 'none',
              padding: '16px 36px',
              fontSize: '1rem',
              fontWeight: 700,
              borderRadius: '6px',
              boxShadow: '0 8px 20px rgba(0, 240, 255, 0.25)',
              cursor: 'pointer'
            }}>
              Join The Alliance
            </button>
            <button style={{
              background: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '16px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '6px',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }}>
              Explore Network
            </button>
          </div>
        </div>

        {/* Right Column Area: Left purposefully empty so the premium interactive 3D Nexus Rings shine through */}
        <div></div>

      </main>

    </div>
  );
}
