import Scene from './Scene';

export default function App() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#020305', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: 'clamp(16px, 3vw, 40px)',
      boxSizing: 'border-box'
    }}>
      
      {/* Outer Executive Application Border Framework */}
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        border: '1px solid rgba(212, 175, 55, 0.12)', /* Fine gold frame */
        backgroundColor: '#06070a',
        overflow: 'hidden',
        boxShadow: '0 40px 120px rgba(0,0,0,0.85)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        
        {/* 3D Hardware Canvas Context */}
        <Scene />

        {/* 1. Global Navigation Bar Header Grid */}
        <header style={{
          width: '100%',
          padding: '40px 60px 0 60px',
          boxSizing: 'border-box',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: 'auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#00f0ff', boxShadow: '0 0 15px #00f0ff' }} />
            <span style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '0.25em', color: '#ffffff' }}>
              TXBIZ<span style={{ color: '#d4af37', fontWeight: 300 }}>ALLIANCE</span>
            </span>
          </div>
          
          <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {['Chapters', 'Referral Logic', 'Charter'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} style={{ 
                color: '#52525b', 
                textDecoration: 'none', 
                fontSize: '0.7rem', 
                fontWeight: 600, 
                letterSpacing: '0.18em',
                textTransform: 'uppercase'
              }}>
                {item}
              </a>
            ))}
          </nav>
        </header>

        {/* 2. Primary Split Content Container Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(450px, 620px) 1fr',
          alignItems: 'center',
          padding: '0 60px',
          position: 'relative',
          zIndex: 5,
          pointerEvents: 'none',
          flexGrow: 1
        }}>
          
          {/* Left Column: Asymmetrical Editorial Frame */}
          <div style={{ paddingRight: '20px' }}>
            <div style={{ 
              color: '#d4af37', 
              fontSize: '0.65rem', 
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              Private Membership Guild
            </div>

            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', 
              lineHeight: 1.15,
              color: '#ffffff'
            }}>
              Exclusive Industry Chairs. <br />
              <span style={{ fontStyle: 'italic', color: '#d4af37' }}>
                Uncompromising Alliance.
              </span>
            </h1>

            {/* Fine Geometric Separation Line */}
            <div style={{ width: '40px', height: '1px', backgroundColor: '#d4af37', margin: '30px 0' }} />
            
            <p style={{ 
              fontSize: '0.95rem', 
              color: '#a1a1aa', 
              lineHeight: 1.75, 
              letterSpacing: '0.01em',
              maxWidth: '520px',
              marginBottom: '36px'
            }}>
              TX Biz Alliance restricts access to exactly one top-tier executive or partner per vertical marketplace chair within each regional chapter. We combine elite local business knowledge with high group accountability to drive warm, high-stakes referral distribution streams.
            </p>

            {/* Content Cards Grid Architecture */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%', maxWidth: '520px' }}>
              <div style={{
                borderLeft: '1px solid rgba(212, 175, 55, 0.25)',
                paddingLeft: '16px'
              }}>
                <h5 style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Single Seat Rule</h5>
                <p style={{ color: '#71717a', fontSize: '0.75rem', marginTop: '6px', lineHeight: 1.45 }}>Complete protection from local marketplace competitor conflict within your chapter ring.</p>
              </div>
              <div style={{
                borderLeft: '1px solid rgba(0, 240, 255, 0.25)',
                paddingLeft: '16px'
              }}>
                <h5 style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Tracked Logistics</h5>
                <p style={{ color: '#71717a', fontSize: '0.75rem', marginTop: '6px', lineHeight: 1.45 }}>A rigorous operational culture built around cross-functional accountability metrics.</p>
              </div>
            </div>

            {/* Button Layout Group */}
            <div style={{ marginTop: '44px', display: 'flex', alignItems: 'center', gap: '32px', pointerEvents: 'auto' }}>
              <button style={{
                background: '#ffffff',
                color: '#06070a',
                border: 'none',
                padding: '14px 36px',
                fontSize: '0.75rem',
                fontWeight: 700,
                borderRadius: '0px', /* Strict premium square corners */
                cursor: 'pointer',
                letterSpacing: '0.18em',
                textTransform: 'uppercase'
              }}>
                Request Briefing
              </button>
              
              <a href="#charter" style={{
                color: '#d4af37',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textDecoration: 'none',
                textTransform: 'uppercase'
              }}>
                Review Charter Standards →
              </a>
            </div>
          </div>

          {/* Right Column: Kept clear to give the 3D scene room to balance the layout */}
          <div />

        </div>

        {/* 3. Institutional Bottom Data Strip */}
        <footer style={{
          width: '100%',
          padding: '0 60px 40px 60px',
          boxSizing: 'border-box',
          borderTop: '1px solid rgba(255, 255, 255, 0.02)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.6rem',
          color: '#3f3f46',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          zIndex: 10
        }}>
          <div>Houston • Dallas • Austin • San Antonio</div>
          <div>Capped Entry • Single Seat Governance</div>
        </footer>

      </div>

    </div>
  );
}
