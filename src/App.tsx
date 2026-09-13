import Scene from './Scene';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#faf9f6] text-[#121316] relative select-none font-sans antialiased selection:bg-[#121316]/5">
      
      {/* 3D Tech Horizon Context Layer */}
      <Scene />

      {/* Structural Editorial Swiss Grid Overlays */}
      <div className="swiss-grid-line left-[8%] hidden md:block" />
      <div className="swiss-grid-line left-[50%] hidden lg:block" />
      <div className="swiss-grid-line right-[8%] hidden md:block" />

      {/* HEADER SECTION */}
      <header className="w-full border-b border-[#121316]/[0.06] relative z-10 bg-[#faf9f6]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex justify-between items-center">
          <div className="flex items-center gap-3.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#121316]" />
            <span style={{ fontFamily: 'serif' }} className="font-bold text-base tracking-[0.35em] uppercase text-[#121316]">
              TXBIZ<span className="font-light tracking-[0.2em] opacity-60">ALLIANCE</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-12">
            {['The Chapters', 'Referral Logic', 'Charter Standards', 'Directory'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-zinc-400 hover:text-black transition-colors duration-300 text-[10px] font-bold tracking-[0.2em] uppercase no-underline"
              >
                {item}
              </a>
            ))}
            <span className="text-zinc-200 text-xs">|</span>
            <button className="text-black hover:opacity-60 text-[10px] font-bold tracking-[0.2em] uppercase transition-opacity cursor-pointer bg-transparent border-none">
              Apply For Briefing
            </button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="w-full min-h-[calc(100vh-96px)] flex items-center relative z-5 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#121316]/[0.06]">
        <div className="max-w-3xl py-16 md:py-24">
          <div className="text-zinc-400 text-[9px] font-bold tracking-[0.45em] uppercase mb-8 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-zinc-300"></span>
            Regional Membership Group
          </div>

          <h1 style={{ fontFamily: 'serif' }} className="text-5xl md:text-7xl lg:text-[5.2rem] font-light leading-[1.05] text-[#121316] tracking-tight">
            Exchange Revenue. <br />
            <span className="italic text-zinc-400 font-normal font-serif">
              Lock Out Competitors.
            </span>
          </h1>

          <p className="text-zinc-500 text-sm md:text-base leading-relaxed tracking-wide mt-10 mb-14 max-w-[560px] font-light">
            TX Biz Alliance restricts access to exactly one top-tier executive or partner per vertical marketplace chair within each regional chapter. We combine elite local business knowledge with high group accountability to drive warm, high-stakes referral distribution streams.
          </p>

          <div className="flex items-center gap-8">
            <button className="bg-[#121316] hover:opacity-80 text-white px-10 py-4.5 text-[10px] font-bold tracking-[0.25em] uppercase rounded-none transition-all duration-300 cursor-pointer shadow-lg shadow-black/5">
              Locate Local Chapter
            </button>
          </div>
        </div>
      </section>

      {/* CORE INFRASTRUCTURE DATA GRID */}
      <section id="chapters" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-16 border-b border-[#121316]/[0.06] relative z-5">
        <div>
          <span className="text-[10px] text-zinc-400 tracking-[0.3em] uppercase block mb-4">Governance / 02</span>
          <h2 style={{ fontFamily: 'serif' }} className="text-3xl md:text-4xl text-[#121316] font-light tracking-tight leading-snug">
            Strategic <br /><span className="text-zinc-400 italic">Alliance Architecture.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {[
            { id: '.01', title: 'Single Seat Rule', desc: 'Absolute market exclusivity. Capping entrance to exactly one leader per specific industry vertical chair to maximize internal trust pipelines.' },
            { id: '.02', title: 'Tracked Referral Logic', desc: 'Every warm introduction, qualified connection, and successful referral closed is fully logged to monitor performance visibility numbers.' },
            { id: '.03', title: 'Shared Local Intelligence', desc: 'Weekly strategic boardroom sessions focusing on localized market movements, commercial asset pipelines, and collaborative scaling hurdles.' },
            { id: '.04', title: 'Cross Accountability', desc: 'A strict performance culture structured on active transaction metrics, consistent meeting attendance parameters, and direct peer verification safeguards.' }
          ].map((item, idx) => (
            <div key={idx} className="border-t border-[#121316]/[0.1] pt-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-zinc-400 font-mono tracking-widest block mb-4">{item.id}</span>
                <h4 className="text-[#121316] text-xs font-bold tracking-[0.15em] uppercase mb-3">{item.title}</h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACCOUNTABILITY METRICS STRIP */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32 border-b border-[#121316]/[0.06] relative z-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '1', suffix: 'CHAIR', label: 'Exclusive Industry Access' },
            { value: '98', suffix: '%', label: 'Attendance Enforcement' },
            { value: '4', suffix: 'METROS', label: 'Major Texas Regions' },
            { value: '100', suffix: '%', label: 'Vetted Executive Peerage' }
          ].map((metric, idx) => (
            <div key={idx} className="border-l border-[#121316]/[0.08] pl-6 py-2">
              <div className="text-4xl md:text-5xl font-light font-serif text-[#121316] tracking-tight flex items-baseline gap-1">
                {metric.value}<span className="text-[10px] text-zinc-400 font-sans font-bold tracking-wider uppercase">{metric.suffix}</span>
              </div>
              <div className="text-[9px] text-zinc-400 tracking-widest uppercase mt-3 font-semibold">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER DATA TAPE RIBBON */}
      <footer className="w-full border-t border-[#121316]/[0.06] relative z-10 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between gap-6 text-[9px] text-zinc-400 tracking-[0.25em] uppercase">
          <div className="flex gap-6 flex-wrap">
            <span>Houston</span>
            <span className="text-zinc-300">•</span>
            <span>Dallas</span>
            <span className="text-zinc-300">•</span>
            <span>Austin</span>
            <span className="text-zinc-300">•</span>
            <span>San Antonio</span>
          </div>
          <div className="text-zinc-400">Single Seat Governance • © 2026</div>
        </div>
      </footer>

    </div>
  );
}
