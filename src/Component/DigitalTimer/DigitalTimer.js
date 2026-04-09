// import React, { useState } from 'react'

// function Digitaltime(props) {

//     const {start,setstart,setstop} = props;
//     const [count,setcount] = useState(0);

//     const startfun =()=>{
//         //setstatus(pre=>!pre)
//         setstop(true)
//         console.log("start",start)
//     }
//     const stopfun =()=>{
//          if(start == count){
//              setstop(false)
//              setstart(count);
//          }
//     }
//     stopfun()
//     const resetfun =()=>{
//         setstop(false)
//         setstart(0);
//         console.log("stop",setstop)
//     }
//     const increasefun =()=>{
//         setcount(pre=>pre+1)
//     }
//     const decreasefun =()=>{
//         setcount(pre=>pre-1)
//     }
//   return (
//     <div className='bg-white w-[500px] h-[200px] flex justify-center items-center flex-col'>
//         <div className='text-xl '>
//             {setstop && start}
            
//         </div>
//         <div className='m-3'>
//             <div className='mb-3'>
//             <button className='p-1 border rounded-lg w-[80px] text-green mr-3 bg-blue-300' onClick={startfun}><span>Start</span></button>
//             <button className='p-1 border rounded-lg w-[80px] text-green bg-blue-300'  onClick={resetfun}><span>Reset</span></button>
//             </div>
//             <div className='gap-10'>
//                 <h3>Set Timer linit</h3>
//                 <button className='p-1 border rounded-lg w-[80px] text-green bg-blue-300' onClick={decreasefun}>-</button>
//                 <span className='m-3 text-lg'>{count}</span>
//                 <button className='p-1 border rounded-lg w-[80px] text-green bg-blue-300' onClick={increasefun}>+</button>

//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default Digitaltime

import React, { useEffect, useState } from "react";

function Digitaltime({ minutes, seconds, setTotalSeconds, running, setRunning, onReset }) {
  const [limitMinutes, setLimitMinutes] = useState(1); // default 1 minute

  // when running and total time reaches limit, stop
  useEffect(() => {
    const total = minutes * 60 + seconds;
    const limit = limitMinutes * 60;

    if (running && total >= limit) {
      setRunning(false);
    }
  }, [minutes, seconds, limitMinutes, running, setRunning]);

  const handleStart = () => {
    // reset to 0 and start from beginning of limit
    setTotalSeconds(0);
    setRunning(true);
  };

  const handleReset = () => {
    onReset();
  };

  const decLimit = () => {
    setLimitMinutes((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const incLimit = () => {
    setLimitMinutes((prev) => prev + 1);
  };

  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  return (
    <div className="w-full max-w-md bg-slate-950/70 border border-slate-700 rounded-2xl px-6 py-5 flex flex-col items-center gap-5 shadow-[0_20px_45px_rgba(15,23,42,0.95)]">
      {/* display */}
      <div className="w-60 h-40 rounded-full border-[6px] border-cyan-300/70 flex items-center justify-center bg-slate-900/80 shadow-[0_0_50px_rgba(34,211,238,0.8)]">
        <span className="text-4xl md:text-5xl font-black tracking-[0.25em] text-cyan-300">
          {mm}:{ss}
        </span>
      </div>

      <p className="text-xs uppercase tracking-[0.35em] text-slate-300">
        {running ? "Running" : "Stopped"}
      </p>

      {/* controls */}
      <div className="flex gap-3">
        <button
          className="px-4 py-1.5 rounded-full text-sm font-semibold bg-emerald-500 text-slate-900 shadow-[0_10px_25px_rgba(16,185,129,0.9)] hover:bg-emerald-400 active:translate-y-px transition"
          onClick={handleStart}
          disabled={running}
        >
          Start
        </button>
        <button
          className="px-4 py-1.5 rounded-full text-sm font-semibold bg-amber-400 text-slate-900 shadow-[0_10px_25px_rgba(245,158,11,0.9)] hover:bg-amber-300 active:translate-y-px transition"
          onClick={() => setRunning(false)}
        >
          Pause
        </button>
        <button
          className="px-4 py-1.5 rounded-full text-sm font-semibold bg-rose-500 text-slate-50 shadow-[0_10px_25px_rgba(244,63,94,0.95)] hover:bg-rose-400 active:translate-y-px transition"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {/* limit setup in minutes */}
      <div className="mt-2 w-full flex flex-col items-center gap-2">
        <h3 className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Set Timer Limit (minutes)
        </h3>
        <div className="flex items-center gap-3">
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold bg-slate-800 text-slate-100 border border-slate-600 hover:bg-slate-700 active:translate-y-px transition"
            onClick={decLimit}
          >
            −
          </button>
          <span className="min-w-[40px] text-center text-lg font-semibold text-slate-100">
            {limitMinutes}
          </span>
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold bg-slate-800 text-slate-100 border border-slate-600 hover:bg-slate-700 active:translate-y-px transition"
            onClick={incLimit}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Digitaltime;