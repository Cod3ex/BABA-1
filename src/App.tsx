import Scene from './Scene';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflowX: 'hidden', backgroundColor: '#090a0f' }}>
      
      {/* 3D Background Canvas */}
      <Scene />

      {/* Modern Header Navigation */}
      <header style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        padding: '32px 8%',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00f0ff', boxShadow: '0 0 15px #00f0ff' }}></div>
          <span style={{ color: '#ffffff', fontWeight: 900, fontSize: '1.4rem', letterSpacing: '0.05em' }}>
            TXBIZ<span style={{ color: '#00f0ff' }}>ALLIANCE</span>
          </span>
        </div>
        
        <nav style={{ display: 'flex', gap: '36px' }}>
          {['Chapters', 'Referral Matrix', 'Accountability', 'Apply'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.2s' }}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Dynamic Content Columns */}
      <main style={{ 
        position: 'relative', 
        zIndex: 5, 
        pointerEvents: 'none', 
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        alignItems: 'center',
        height: '100%',
        padding: '0 8%',
        paddingTop: '60px'
      }}>
        
        {/* Left Side Content Area */}
        <div style={{ maxWidth: '640px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            backgroundColor: 'rgba(0, 240, 255, 0.05)', 
            border: '1px solid rgba(0, 240, 255, 0.15)', 
            padding: '6px 16px', 
            borderRadius: '30px', 
            color: '#00f0ff', 
            fontSize: '0.75rem', 
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}>
            Vetted Professional Network
          </div>

          <h1 style={{ 
            fontSize: '4.2rem', 
            fontWeight: 800, 
            color: '#ffffff', 
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginTop: '24px'
          }}>
            Where Texas Leaders <br />
            <span style={{ background: 'linear-gradient(to right, #ffffff 30%, #38bdf8, #00f0ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Exchange Revenue.
            </span>
          </h1>
          
          <p style={{ fontSize: '1.15rem', color: '#9ca3af', marginTop: '24px', lineHeight: 1.7, fontWeight: 400 }}>
            We are an exclusive, high-accountability business networking alliance. By unlocking shared local knowledge, capping entry to one elite professional per industry chair, and tracking direct word-of-mouth referral pipelines, we build trusted partnerships that scale commercial enterprises.
          </p>

          {/* Premium Cards Representing Real Core Pillars Instead of Loose Lists */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '36px' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', borderRadius: '12px' }}>
              <div style={{ fontSize: '1.25rem', marginBottom: '6px' }}>🤝</div>
              <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>Exclusive Industry Chairs</h4>
              <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '4px', lineHeight: 1.4 }}>Lock out local competitors entirely within your chapter region.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', borderRadius: '12px' }}>
              <div style={{ fontSize: '1.25rem', marginBottom: '6px' }}>📈</div>
              <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>Tracked Referral Pipelines</h4>
              <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '4px', lineHeight: 1.4 }}>Uncover qualified warm introductions engineered to close sales paths.</p>
            </div>
          </div>
          
          {/* Action Blocks */}
          <div style={{ marginTop: '40px', display: 'flex', gap: '20px', pointerEvents: 'auto' }}>
            <button style={{
              background: '#00f0ff',
              color: '#090a0f',
              border: 'none',
              padding: '16px 36px',
              fontSize: '0.95rem',
              fontWeight: 700,
              borderRadius: '8px',
              boxShadow: '0 8px 30px rgba(0, 240, 255, 0.25)',
              cursor: 'pointer',
              letterSpacing: '0.02em'
            }}>
              Apply to Join Chapter
            </button>
            <button style={{
              background: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              padding: '16px 32px',
              fontSize: '0.95rem',
              fontWeight: 600,
              borderRadius: '8px',
              cursor: 'pointer',
              backdropFilter: 'blur(12px)'
            }}>
              Our Accountability
            </button>
          </div>
        </div>

        {/* Right Column Layout Frame is purposefully kept clear to highlight the abstract network depth */}
        <div></div>

      </main>

    </div>
  );
}
