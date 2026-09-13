import Scene from './Scene';

export default function App() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#050508', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '40px',
      boxSizing: 'border-box'
    }}>
      
      {/* The Master Application Frame Layer */}
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        border: '1px solid rgba(212, 175, 55, 0.15)', // Fine gold frame
        borderRadius: '12px',
        backgroundColor: '#07080d',
        overflow: 'hidden',
        boxShadow: '0 50px 100px rgba(0,0,0,0.8)'
      }}>
        
        {/* 3D Context */}
        <Scene />

        {/* Top Header Grid */}
        <header style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          padding: '48px 64px',
          boxSizing: 'border-box',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ 
              fontWeight: 800, 
              fontSize: '1.25rem', 
              letterSpacing: '0.3em', 
              fontFamily: 'serif',
              color: '#ffffff'
            }}>
              TXBIZ<span style={{ fontWeight: 300, color: '#d4af37' }}>ALLIANCE</span>
            </span>
          </div>
          
          <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {['Chapters', 'Referral Logic', 'Directorship'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ 
                color: '#6b7280', 
                textDecoration: 'none', 
                fontSize: '0.75rem', 
                fontWeight: 600, 
                letterSpacing: '0.2em',
                textTransform: 'uppercase'
              }}>
                {item}
              </a>
            ))}
          </nav>
        </header>

        {/* Main Content Layout Block */}
        <div style={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          alignItems: 'center',
          padding: '0 64px',
          position: 'relative',
          zIndex: 5,
          pointerEvents: 'none'
        }}>
          
          <div style={{ maxWidth: '580px', marginTop: '40px' }}>
            <div style={{ 
              color: '#d4af37', 
              fontSize: '0.7rem', 
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase'
            }}>
              Private Membership Guild
            </div>

            <h1 style={{ 
              fontSize: '3.6rem', 
              fontWeight: 400, 
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              marginTop: '24px',
              fontFamily: 'serif',
              color: '#ffffff'
            }}>
              Exclusive Industry Chairs. <br />
              <span style={{ fontStyle: 'italic', color: '#d4af37', fontWeight: 300 }}>
                Uncompromising Alliance.
              </span>
            </h1>

            <div style={{ width: '60px', height: '1px', backgroundColor: '#d4af37', margin: '32px 0' }} />
            
            <p style={{ 
              fontSize: '1.05rem', 
              color: '#9ca3af', 
              lineHeight: 1.8, 
              fontFamily: 'sans-serif',
              letterSpacing: '0.01em'
            }}>
              TX Biz Alliance restricts access to exactly one top-tier executive or partner per vertical marketplace chair within each regional chapter. We combine elite local business knowledge with high group accountability to drive warm, high-stakes referral distribution streams.
            </p>

            {/* Premium Button Elements */}
            <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '32px', pointerEvents: 'auto' }}>
              <button style={{
                background: '#ffffff',
                color: '#07080d',
                border: 'none',
                padding: '16px 40px',
                fontSize: '0.8rem',
                fontWeight: 700,
                borderRadius: '0px', // Strict square high-end corners
                cursor: 'pointer',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease'
              }}>
                Request Briefing
              </button>
              
              <a href="#how" style={{
                color: '#d4af37',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textDecoration: 'none',
                textTransform: 'uppercase'
              }}>
                Review Charter Standards →
              </a>
            </div>
          </div>

          <div></div>

        </div>

        {/* Institutional Bottom Banner */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '32px 64px',
          boxSizing: 'border-box',
          borderTop: '1px solid rgba(255,255,255,0.03)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.65rem',
          color: '#4b5563',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          zIndex: 10
        }}>
          <div>Houston • Dallas • Austin • San Antonio</div>
          <div>Capped Entry • Single Seat Governance</div>
        </div>

      </div>

    </div>
  );
}
