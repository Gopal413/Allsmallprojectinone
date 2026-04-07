
function StopWatch({ start, setstart, statusval, setstatusval }) {
  const handleStart = () => setstatusval(true);
  const handleStop = () => setstatusval(false);
  const handleReset = () => {
    setstatusval(false);
    setstart(0);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* time display */}
      <div className="w-40 h-40 rounded-full border-[6px] border-cyan-300/70 flex items-center justify-center bg-slate-900/70 shadow-[0_0_40px_rgba(34,211,238,0.8)]">
        <span className="text-4xl font-extrabold tracking-widest text-cyan-300">
          {start.toString().padStart(2, "0")}
        </span>
      </div>

      {/* status */}
      <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
        {statusval ? "Running" : "Paused"}
      </p>

      {/* controls */}
      <div className="flex gap-3 mt-1">
        <button
          type="button"
          onClick={handleStart}
          className="px-4 py-1.5 rounded-full text-sm font-semibold bg-emerald-500 text-slate-900 shadow-[0_10px_25px_rgba(16,185,129,0.8)] hover:bg-emerald-400 active:translate-y-px transition"
        >
          Start
        </button>
        <button
          type="button"
          onClick={handleStop}
          className="px-4 py-1.5 rounded-full text-sm font-semibold bg-amber-400 text-slate-900 shadow-[0_10px_25px_rgba(245,158,11,0.8)] hover:bg-amber-300 active:translate-y-px transition"
        >
          Stop
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-1.5 rounded-full text-sm font-semibold bg-rose-500 text-slate-50 shadow-[0_10px_25px_rgba(244,63,94,0.9)] hover:bg-rose-400 active:translate-y-px transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;