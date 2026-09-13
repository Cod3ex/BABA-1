import Scene from './Scene';

export default function App() {
  return (
    <div className="w-screen h-screen bg-obsidian flex items-center justify-center p-4 md:p-8 box-border select-none">
      <div className="w-full h-full relative border border-[rgba(212,175,55,0.15)] rounded-xl bg-[#06070a] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.85)] flex flex-col justify-between">
        <Scene />
        <header className="w-full px-8 md:px-16 pt-10 z-10 flex justify-between items-center relative pointer-events-auto">
          <div className="flex items-center gap-3.5">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_15px_#00f0ff]" />
            <span className="font-extrabold text-lg tracking-[0.25em] font-serif uppercase text-white">
              TXBIZ<span className="text-gold font-light tracking-[0.1em]">ALLIANCE</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {['Chapters', 'Referral Logic', 'Charter Standards'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-zinc-500 hover:text-gold transition-colors duration-300 text-[11px] font-bold tracking-[0.2em] uppercase no-underline">{item}</a>
            ))}
          </nav>
        </header>
        <div className="w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center relative z-5 pointer-events-none flex-grow">
          <div className="max-w-[580px] pt-12 lg:pt-0">
            <div className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">Private Membership Guild</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light font-serif leading-[1.1] text-white tracking-tight">
              Exclusive Industry Chairs. <br />
              <span className="italic text-gold font-normal font-serif">Uncompromising Alliance.</span>
            </h1>
            <div className="w-10 h-[1px] bg-gold my-8 opacity-60" />
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide max-w-[500px] mb-9 font-sans">
              TX Biz Alliance restricts access to exactly one top-tier executive or partner per vertical marketplace chair within each regional chapter. We combine elite local business knowledge with high group accountability to drive warm, high-stakes referral distribution streams.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[520px] w-full">
              <div className="border-l-2 border-gold/40 pl-4 py-1">
                <h5 className="text-white text-xs font-bold tracking-wider uppercase">Single Seat Rule</h5>
                <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">Complete protection from local marketplace competitor conflict within your chapter ring.</p>
              </div>
              <div className="border-l-2 border-cyan-400/40 pl-4 py-1">
                <h5 className="text-white text-xs font-bold tracking-wider uppercase">Tracked Logistics</h5>
                <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">A rigorous operational culture built around cross-functional accountability metrics.</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-8 pointer-events-auto">
              <button className="bg-white hover:bg-gold hover:text-obsidian text-obsidian px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-300 cursor-pointer">Request Briefing</button>
              <a href="#charter" className="text-gold hover:text-white transition-colors duration-300 text-xs font-bold tracking-wider uppercase no-underline flex items-center gap-2">Review Charter Standards →</a>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
        <footer className="w-full px-8 md:px-16 pb-10 border-t border-white/[0.02] flex flex-col md:flex-row justify-between gap-4 text-[10px] text-zinc-600 tracking-[0.2em] uppercase z-10 relative">
          <div>Houston • Dallas • Austin • San Antonio</div>
          <div>Capped Entry • Single Seat Governance</div>
        </footer>
      </div>
    </div>
  );
}
