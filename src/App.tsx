import Scene from './Scene';

export default function App() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative', 
      overflowX: 'hidden', 
      backgroundColor: '#050609', // Deep luxurious obsidian background
      color: '#ffffff'
    }}>
      
      {/* Premium Ambient 3D Context Layer */}
      <Scene />

      {/* Decorative Luxury Radial Glow Backing */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '50vw',
        height: '50vh',
        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        zIndex: 2
      }} />

      {/* Luxury Minimal Navigation Header */}
      <header style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        padding: '40px 10%',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00f0ff', boxShadow: '0 0 20px #00f0ff' }}></div>
          <span style={{ 
            fontWeight: 900, 
            fontSize: '1.5rem', 
            letterSpacing: '0.15em', 
            fontFamily: 'serif',
            background: 'linear-gradient(to right, #ffffff, #d4af37)', // Subtle white-to-gold luxury shimmer
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            TXBIZ<span style={{ fontWeight: 300, letterSpacing: '0.05em' }}>ALLIANCE</span>
          </span>
        </div>
        
        <nav style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          {['Chapters', 'Referral Network', 'Accountability Hub'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ 
              color: '#9ca3af', 
              textDecoration: 'none', 
              fontSize: '0.85rem', 
              fontWeight: 500, 
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'color 0.3s ease' 
            }}>
              {item}
            </a>
          ))}
          <button style={{
            background: 'transparent',
            border: '1px solid #d4af37', // Gold fine line border
            color: '#d4af37',
            padding: '10px 24px',
            fontSize: '0.8rem',
            fontWeight: 600,
            borderRadius: '4px',
            letterSpacing: '0.08em',
            cursor: 'pointer',
            textTransform: 'uppercase'
          }}>
            Apply An Invitation
          </button>
        </nav>
      </header>

      {/* Hero Presentation Split Content Panel */}
      <main style={{ 
        position: 'relative', 
        zIndex: 5, 
        pointerEvents: 'none', 
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        alignItems: 'center',
        height: '100%',
        padding: '0 10%',
      }}>
        
        {/* Left Column Area */}
        <div style={{ maxWidth: '680px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px', 
            borderLeft: '2px solid #d4af37', // Gold structural accent border
            paddingLeft: '14px',
            color: '#a3a3a3', 
            fontSize: '0.85rem', 
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            By Invitation Only
          </div>

          <h1 style={{ 
            fontSize: '4.8rem', 
            fontWeight: 700, 
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginTop: '28px',
            fontFamily: 'serif', // Luxury high-contrast typeface framing
            color: '#ffffff'
          }}>
            The Private Nexus of <br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: '#d4af37' }}>
              Texas Commerce.
            </span>
          </h1>
          
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#a3a3a3', 
            marginTop: '28px', 
            lineHeight: 1.75, 
            maxWidth: '560px',
            fontFamily: 'sans-serif'
          }}>
            An exclusive, high-accountability business networking alliance. We allocate exactly one elite seat per industry chair within each local market chapter, driving premium referral logic, locking out competitors, and accelerating collective business knowledge.
          </p>

          {/* Luxury Frosted Glass Cards (Wix-Killer UI) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)', 
              border: '1px solid rgba(255,255,255,0.06)', 
              padding: '24px', 
              borderRadius: '8px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}>
              <h4 style={{ color: '#d4af37', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Locked Industry Chairs</h4>
              <p style={{ color: '#737373', fontSize: '0.85rem', marginTop: '8px', lineHeight: 1.5 }}>Uncompromising industry exclusivity rules guarantee complete protection from competitor noise within your local chapter circle.</p>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)', 
              border: '1px solid rgba(255,255,255,0.06)', 
              padding: '24px', 
              borderRadius: '8px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}>
              <h4 style={{ color: '#00f0ff', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Shared Knowledge</h4>
              <p style={{ color: '#737373', fontSize: '0.85rem', marginTop: '8px', lineHeight: 1.5 }}>A rigorous culture built on cross-functional accountability metrics and structured local referral pipelines that turn introductions into revenue assets.</p>
            </div>
          </div>
          
          {/* Main Call to Action Elements */}
          <div style={{ marginTop: '44px', display: 'flex', gap: '24px', pointerEvents: 'auto' }}>
            <button style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #aa8416 100%)', // Premium solid gold button
              color: '#050609',
              border: 'none',
              padding: '16px 38px',
              fontSize: '0.9rem',
              fontWeight: 700,
              borderRadius: '4px',
              boxShadow: '0 10px 30px rgba(212, 175, 55, 0.2)',
              cursor: 'pointer',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Request Chapter Invite
            </button>
          </div>
        </div>

        {/* Right side left open for the clean 3D roundtable matrix scene overlay */}
        <div></div>

      </main>

    </div>
  );
}
