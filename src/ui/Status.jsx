//bg-gradient-to-l from-slate-500/20

export function Status(){
    return (
      <div className="flex flex-row align-middle justify-center items-center gap-2 bg-gradient-to-l from-slate-500/20 py-1 px-3 rounded-full hover:drop-shadow-md transition ease-in-out">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <span>Available for Project</span>
      </div>
    );
}