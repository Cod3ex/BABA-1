import Scene from './Scene';

export default function App() {
  return (
    /* Styled with absolute theme parameters directly inside the utility matrix */
    <div className="w-screen h-screen bg-[#030407] flex items-center justify-center p-4 md:p-8 box-border select-none">
      
      {/* Outer Executive Canvas Framing */}
      <div className="w-full h-full relative border border-[rgba(212,175,55,0.15)] rounded-xl bg-[#06070a] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.85)] flex flex-col justify-between">
        
        {/* 3D Hardware Accelerated Nexus Environment */}
        <Scene />

        {/* 1. Global Membership Header Grid Bar */}
        <header className="w-full px-8 md:px-16 pt-10 z-10 flex justify-between items-center relative pointer-events-auto">
          <div className="flex items-center gap-3.5">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_15px_#00f0ff]" />
            <span style={{ fontFamily: 'serif' }} className="font-extrabold text-lg tracking-[0.25em] uppercase text-white">
              TXBIZ<span style={{ color: '#d4af37' }} className="font-light tracking-[0.1em]">ALLIANCE</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            {['Chapters', 'Referral Logic', 'Charter Standards'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-zinc-500 hover:text-[#d4af37] transition-colors duration-300 text-[11px] font-bold tracking-[0.2em] uppercase no-underline"
              >
                {item}
              </a>
            ))}
          </nav>
        </header>

        {/* 2. Main Asymmetrical Content Column Split */}
        <div className="w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center relative z-5 pointer-events-none flex-grow">
          
          <div className="max-w-[580px] pt-12 lg:pt-0">
            <div style={{ color: '#d4af37' }} className="text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
              Private Membership Guild
            </div>

            <h1 style={{ fontFamily: 'serif' }} className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-white tracking-tight">
              Exclusive Industry Chairs. <br />
              <span style={{ color: '#d4af37' }} className="italic font-normal">
                Uncompromising Alliance.
              </span>
            </h1>

            {/* Geometric luxury break separator marker */}
            <div style={{ backgroundColor: '#d4af37' }} className="w-10 h-[1px] my-8 opacity-60" />
            
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide max-w-[500px] mb-9 font-sans">
              TX Biz Alliance restricts access to exactly one top-tier executive or partner per vertical marketplace chair within each regional chapter. We combine elite local business knowledge with high group accountability to drive warm, high-stakes referral distribution streams.
            </p>

            {/* Premium Grid Cards Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[520px] w-full">
              <div className="border-l-2 border-[rgba(212,175,55,0.4)] pl-4 py-1">
                <h5 className="text-white text-xs font-bold tracking-wider uppercase">Single Seat Rule</h5>
                <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">
                  Complete protection from local marketplace competitor conflict within your chapter ring.
                </p>
              </div>
              
              <div className="border-l-2 border-cyan-400/40 pl-4 py-1">
                <h5 className="text-white text-xs font-bold tracking-wider uppercase">Tracked Logistics</h5>
                <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">
                  A rigorous operational culture built around cross-functional accountability metrics.
                </p>
              </div>
            </div>

            {/* Call to Actions Controls Panel */}
            <div className="mt-10 flex flex-wrap items-center gap-8 pointer-events-auto">
              <button className="bg-white hover:bg-[#d4af37] text-[#030407] px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.05)] cursor-pointer">
                Request Briefing
              </button>
              
              <a 
                style={{ color: '#d4af37' }}
                href="#charter" 
                className="hover:text-white transition-colors duration-300 text-xs font-bold tracking-wider uppercase no-underline flex items-center gap-2"
              >
                Review Charter Standards →
              </a>
            </div>
          </div>

          {/* Right column left completely clear to float context directly over the 3D core canvas window */}
          <div className="hidden lg:block" />

        </div>

        {/* 3. Bottom Institutional Geographic Ribbon */}
        <footer className="w-full px-8 md:px-16 pb-10 border-t border-white/[0.02] flex flex-col md:flex-row justify-between gap-4 text-[10px] text-zinc-600 tracking-[0.2em] uppercase z-10 relative">
          <div>Houston • Dallas • Austin • San Antonio</div>
          <div>Capped Entry • Single Seat Governance</div>
        </footer>

      </div>

    </div>
  );
}
