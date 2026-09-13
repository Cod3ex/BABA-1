import Scene from './Scene';

export default function App() {
  return (
    <div className="w-screen min-h-screen bg-[#050609] text-white flex flex-col justify-between p-6 md:p-12 font-sans overflow-x-hidden selection:bg-[#d4af37]/20 selection:text-[#d4af37]">
      
      {/* Structural 3D Background Context */}
      <div className="fixed inset-0 w-full h-full z-0 opacity-40 pointer-events-none">
        <Scene />
      </div>

      {/* 1. Rigid Navigation Header Panel */}
      <header className="w-full max-w-7xl mx-auto z-10 flex justify-between items-center relative pointer-events-auto border-b border-white/[0.03] pb-8">
        <div className="flex items-center gap-3">
          <div className="w-1 h-1 rounded-full bg-[#d4af37] shadow-[0_0_15px_#d4af37]" />
          <span style={{ fontFamily: 'serif' }} className="font-bold text-base tracking-[0.25em] uppercase text-white">
            TXBIZ<span className="text-[#d4af37] font-light tracking-[0.15em]">ALLIANCE</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          {['Chapters', 'Referral Logic', 'Charter'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-[#52525b] hover:text-[#d4af37] transition-all duration-300 text-[10px] font-bold tracking-[0.2em] uppercase no-underline"
            >
              {item}
            </a>
          ))}
          <span className="text-white/10 text-xs">|</span>
          <button className="text-white hover:text-[#d4af37] text-[10px] font-bold tracking-[0.2em] uppercase transition-colors cursor-pointer">
            Apply For Invitation
          </button>
        </nav>
      </header>

      {/* 2. Primary Editorial Asymmetric Main Frame */}
      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.10fr_0.90fr] items-center relative z-5 pointer-events-none flex-grow my-12">
        
        {/* Left Presentation Layout Grid */}
        <div className="max-w-[640px] pointer-events-auto">
          <div className="text-[#d4af37] text-[9px] font-bold tracking-[0.4em] uppercase mb-6 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#d4af37]/40"></span>
            Private Business Alliance
          </div>

          <h1 style={{ fontFamily: 'serif' }} className="text-4xl md:text-5xl lg:text-[4rem] font-light leading-[1.1] text-white tracking-tight">
            Vetted Referrals. <br />
            <span className="italic text-[#d4af37] font-normal">
              Shared Growth.
            </span>
          </h1>

          <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed tracking-wide mt-8 mb-12 max-w-[520px] font-sans font-light">
            TX Biz Alliance restricts access to exactly one top-tier executive or partner per vertical marketplace chair within each regional chapter. We combine elite local business knowledge with high group accountability to drive warm, high-stakes referral distribution streams.
          </p>

          {/* Premium Cards Structural Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[560px] w-full border-t border-white/[0.04] pt-8">
            <div className="border-l border-[#d4af37]/30 pl-4">
              <span className="text-[10px] text-zinc-600 tracking-widest font-mono">01 / CAP</span>
              <h5 className="text-white text-xs font-bold tracking-wider uppercase mt-1">Single Seat Rule</h5>
              <p className="text-zinc-500 text-xs mt-2 leading-relaxed font-light">
                Complete protection from local marketplace competitor conflict within your chapter ring.
              </p>
            </div>
            
            <div className="border-l border-zinc-800 pl-4">
              <span className="text-[10px] text-zinc-600 tracking-widest font-mono">02 / FLOW</span>
              <h5 className="text-white text-xs font-bold tracking-wider uppercase mt-1">Tracked Logistics</h5>
              <p className="text-zinc-500 text-xs mt-2 leading-relaxed font-light">
                A rigorous operational culture built around cross-functional accountability metrics.
              </p>
            </div>
          </div>

          {/* Action Call Controls Group */}
          <div className="mt-12 flex items-center gap-8">
            <button className="bg-white hover:bg-[#d4af37] text-[#050609] px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase rounded-none transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.02)] cursor-pointer">
              Request Briefing
            </button>
            <a 
              href="#charter" 
              className="text-zinc-500 hover:text-white transition-colors text-[10px] font-bold tracking-[0.2em] uppercase no-underline"
            >
              Review Charter Standards →
            </a>
          </div>
        </div>

        {/* Right Frame Window: Balancing Space */}
        <div className="hidden lg:block w-full h-full" />

      </main>

      {/* 3. Bottom Geographic Data Tape Ribbon */}
      <footer className="w-full max-w-7xl mx-auto border-t border-white/[0.03] pt-8 flex flex-col md:flex-row justify-between gap-4 text-[9px] text-[#3f3f46] tracking-[0.25em] uppercase z-10 relative">
        <div className="flex gap-4">
          <span>Houston</span>
          <span className="text-zinc-800">•</span>
          <span>Dallas</span>
          <span className="text-zinc-800">•</span>
          <span>Austin</span>
          <span className="text-zinc-800">•</span>
          <span>San Antonio</span>
        </div>
        <div>Capped Entry • Single Seat Governance</div>
      </footer>

    </div>
  );
}
