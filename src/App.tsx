import Scene from './Scene';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white relative select-none font-sans antialiased">
      
      {/* 3D Hardware Canvas Background Background Context */}
      <Scene />

      {/* Structural Swiss Grid Lines Overlay Backdrop */}
      <div className="swiss-grid-line left-[10%] hidden md:block" />
      <div className="swiss-grid-line left-[50%] hidden lg:block" />
      <div className="swiss-grid-line right-[10%] hidden md:block" />

      {/* 1. Global Navigation Architecture */}
      <header className="w-full border-b border-white/[0.04] relative z-10 pointer-events-auto bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-[#d4af37] shadow-[0_0_12px_#d4af37]" />
            <span style={{ fontFamily: 'serif' }} className="font-bold text-sm tracking-[0.3em] uppercase text-white">
              TXBIZ<span className="text-[#d4af37] font-light tracking-[0.2em]">ALLIANCE</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-12">
            {['Chapters', 'Referral Logic', 'Charter', 'Directory'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-zinc-500 hover:text-white transition-colors duration-300 text-[10px] font-bold tracking-[0.2em] uppercase no-underline"
              >
                {item}
              </a>
            ))}
            <span className="text-white/10 text-xs">|</span>
            <button className="text-[#d4af37] hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-colors cursor-pointer bg-transparent border-none">
              Apply For Invite
            </button>
          </nav>
        </div>
      </header>

      {/* 2. Section 01: Hero Presentation Entry Gate */}
      <section className="w-full min-h-[calc(100vh-96px)] flex items-center relative z-5 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.04]">
        <div className="max-w-3xl py-12">
          <div className="text-[#d4af37] text-[10px] font-bold tracking-[0.4em] uppercase mb-8 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#d4af37]/40"></span>
            Private Business Alliance
          </div>

          <h1 style={{ fontFamily: 'serif' }} className="text-4xl md:text-6xl lg:text-[4.8rem] font-light leading-[1.05] text-white tracking-tight">
            We Build Networks. <br />
            <span className="italic text-[#d4af37] font-normal">
              Then We Lock The Doors.
            </span>
          </h1>

          <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed tracking-wide mt-10 mb-12 max-w-[560px] font-light">
            TX Biz Alliance restricts access to exactly one top-tier partner per industry vertical chair within each local market chapter [Sat, Aug 29, 2026 @ 08:04 AM]. No competitor overlap. No diluted introductions. Just rigid group accountability engineered to exchange high-stakes corporate revenue.
          </p>

          <div className="flex items-center gap-8">
            <button className="bg-white hover:bg-[#d4af37] text-black px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase rounded-none transition-all duration-300 cursor-pointer shadow-[0_5px_20px_rgba(255,255,255,0.02)]">
              Request Chapter Briefing
            </button>
          </div>
        </div>
      </section>

      {/* 3. Section 02: Rigid Tactical Core Infrastructure (Pillars) */}
      <section id="chapters" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-16 border-b border-white/[0.04] relative z-5">
        <div>
          <span className="text-[10px] text-zinc-600 tracking-[0.3em] uppercase block mb-4">Governance / 02</span>
          <h2 style={{ fontFamily: 'serif' }} className="text-2xl md:text-4xl text-white font-light tracking-tight leading-snug">
            Uncompromising <br /><span className="text-[#d4af37] italic">Operational Design.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {[
            { id: '.01', title: 'Single Seat Rule', desc: 'Absolute market exclusivity. Capping entrance to exactly one leader per specific industry vertical chair to maximize internal trust pipelines.' },
            { id: '.02', title: 'Tracked Referral Logic', desc: 'Every warm introduction, qualified connection, and successful referral closed is fully logged to monitor performance visibility numbers.' },
            { id: '.03', title: 'Shared Local Intelligence', desc: 'Weekly strategic boardroom sessions focusing on localized market movements, commercial asset pipelines, and collaborative scaling hurdles.' },
            { id: '.04', title: 'Cross Accountability', desc: 'A strict performance culture structured on active transaction metrics, consistent meeting attendance parameters, and direct peer verification safeguards.' }
          ].map((item, idx) => (
            <div key={idx} className="border-t border-white/[0.06] pt-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] text-zinc-600 font-mono tracking-widest block mb-4">{item.id}</span>
                <h4 className="text-white text-xs font-bold tracking-[0.15em] uppercase mb-3">{item.title}</h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Section 03: Executive Metrics Dashboard */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32 border-b border-white/[0.04] relative z-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '1', suffix: 'Chair', label: 'Per Industry, Per Chapter' },
            { value: '98', suffix: '%', label: 'Attendance Enforcement' },
            { value: '4', suffix: 'Hubs', label: 'Major Texas Metros' },
            { value: '100', suffix: '%', label: 'Vetted Peer Network' }
          ].map((metric, idx) => (
            <div key={idx} className="border-l border-white/[0.06] pl-6 py-2">
              <div className="text-3xl md:text-5xl font-light font-serif text-white tracking-tight flex items-baseline gap-1">
                {metric.value}<span className="text-xs text-[#d4af37] font-sans font-bold tracking-wider uppercase">{metric.suffix}</span>
              </div>
              <div className="text-[10px] text-zinc-500 tracking-widest uppercase mt-3 font-semibold">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom Geographic Data Tape Ribbon */}
      <footer className="w-full border-t border-white/[0.04] relative z-10 bg-black/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between gap-6 text-[10px] text-zinc-600 tracking-[0.25em] uppercase">
          <div className="flex gap-6 flex-wrap">
            <span>Houston</span>
            <span className="text-zinc-800">•</span>
            <span>Dallas</span>
            <span className="text-zinc-800">•</span>
            <span>Austin</span>
            <span className="text-zinc-800">•</span>
            <span>San Antonio</span>
          </div>
          <div>Capped Entry • Single Seat Governance • © 2026</div>
        </div>
      </footer>

    </div>
  );
}
