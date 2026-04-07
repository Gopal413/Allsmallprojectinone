
// import { useEffect, useState } from 'react';
// import Digitaltime from './DigitalTimer';

// function MainDigitalTimer() {

//   const [timers,settimers] = useState(0);
//   const [stop,setstop] = useState(false);
//   const [count,setcount] = useState();

  
//   useEffect(()=>{
//     if(!stop) {return ()=> "zero"}
//     else{
//      const digital=setInterval(() => {
//       settimers(pre=>pre+1)
      
//     }, 1000)
//     //settimers(pre=>digital)
//     //const stopper = clearInterval(digital)
//     return ()=> clearInterval(digital)
//   }
//   },[stop])
// console.log("count ",stop)
//   return (
//     <div className='min-h-screen flex justify-center flex-col items-center bg-gray-400'>
//       <h1 className='text-3xl mb-2 text-green-800 font-semibold '>Digital Timer</h1>
//       <Digitaltime start ={timers} setstart={settimers} setstop={setstop}/>
//     </div>
//   );
// }

// export default MainDigitalTimer;

import { useEffect, useState } from "react";
import Digitaltime from "./DigitalTimer";

function MainDigitalTimer() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  // tick in seconds, derive minutes/seconds from totalSeconds
  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setTotalSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [running]);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const handleReset = () => {
    setRunning(false);
    setTotalSeconds(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="w-full max-w-lg bg-slate-900/80 border border-slate-700 rounded-3xl shadow-[0_25px_60px_rgba(15,23,42,0.9)] p-6 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(52,211,153,0.4),transparent_55%)]" />
        <div className="relative z-10 flex flex-col items-center gap-5">
          <h1 className="text-3xl font-semibold tracking-[0.25em] uppercase text-slate-100">
            Digital Timer
          </h1>

          <Digitaltime
            minutes={minutes}
            seconds={seconds}
            setTotalSeconds={setTotalSeconds}
            running={running}
            setRunning={setRunning}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}

export default MainDigitalTimer;