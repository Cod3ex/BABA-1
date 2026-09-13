import Scene from './Scene';

export default function App() {
  return (
    <div className="w-screen h-screen relative overflow-hidden select-none font-sans text-white bg-[#040508] antialiased">
      
      {/* Full-Screen Immersive 3D Spatial Environment Canvas Window */}
      <Scene />

      {/* Global Luxury Navigation Interface */}
      <header className="absolute top-0 left-0 w-full px-8 md:px-16 pt-10 z-10 flex justify-between items-center pointer-events-auto mix-blend-difference">
        <div className="flex items-center gap-3">
          <span style={{ fontFamily: 'serif' }} className="font-bold text-base tracking-[0.35em] uppercase text-white">
            TXBIZ<span className="text-[#d4af37] font-light tracking-[0.2em]">ALLIANCE</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-12">
          {['Chapters', 'Referral Logic', 'Charter Standards'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-zinc-500 hover:text-white transition-colors duration-300 text-[10px] font-bold tracking-[0.25em] uppercase no-underline"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Structural Typography Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16 z-5 pointer-events-none">
        
        {/* Top Text Spacing Segment */}
        <div className="hidden md:block" />

        {/* Center-Left Asymmetrical Editorial Frame Header */}
        <div className="max-w-[540px] pointer-events-auto bg-black/10 backdrop-blur-sm p-8 rounded-xl border border-white/[0.02] shadow-2xl">
          <div className="text-[#d4af37] text-[9px] font-bold tracking-[0.45em] uppercase mb-4">
            Private Membership Guild
          </div>

          <h1 style={{ fontFamily: 'serif' }} className="text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.1] text-white tracking-tight">
            Vetted Leadership. <br />
            <span className="italic text-[#d4af37] font-normal font-serif">
              Exclusive Chair Matrix.
            </span>
          </h1>

          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed tracking-wide mt-6 max-w-[460px] font-light">
            TX Biz Alliance restricts entry to exactly one elite partner per vertical industry chair per chapter circle [Sat, Aug 29, 2026 @ 08:04 AM]. Hover and click the spatial cards inside the 3D environment layout to review our core transaction logistics.
          </p>
        </div>

        {/* Bottom Geographical Institutional Tape Ribbon */}
        <footer className="w-full flex flex-col md:flex-row justify-between gap-4 text-[9px] text-zinc-600 tracking-[0.25em] uppercase pointer-events-auto">
          <div className="flex gap-4">
            <span>Houston</span>
            <span>•</span>
            <span>Dallas</span>
            <span>•</span>
            <span>Austin</span>
            <span>•</span>
            <span>San Antonio</span>
          </div>
          <div>Capped Entry • Single Seat Governance • © 2026</div>
        </footer>

      </div>

    </div>
  );
}
