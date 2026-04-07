// import { useEffect, useState } from 'react';
// import StopWatch from './Stopwatch';


// function MainStopWatch() {
//   const [start,setstart] = useState(0);
//   const [status,setstatus] = useState(false)
 
//   useEffect(()=>{
//     if(!status){ return ()=>"zero";}
//     else{
//     const watch = setInterval(() => {
//         (start<= 100)? setstart(pre=>pre+1):setstart(pre=>0);

//     }, 100);
//     console.log("useeff",start,"usestatus",status)
    
//     return ()=>clearInterval(watch);}
    
//   },[status])

//   return (
//     <div className="items-center  h-screen flex justify-center items-center flex-col bg-green-500">
//       <h1>StopWatch</h1>
//       <StopWatch setstart ={setstart} start={start} setstatusval ={setstatus} statusval ={status}/>
      
//     </div>
//   );
// }

// export default MainStopWatch;

import { useEffect, useState } from "react";
import StopWatch from "./Stopwatch"; // make sure file name & import match

function MainStopWatch() {
  const [start, setstart] = useState(0);
  const [status, setstatus] = useState(false);

  useEffect(() => {
    if (!status) return;
    const watch = setInterval(() => {
      start <= 100 ? setstart((pre) => pre + 1) : setstart(() => 0);
    }, 100);

    return () => clearInterval(watch);
  }, [status, start]);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-900 rounded-3xl px-6 py-6 text-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.9)] relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(236,72,153,0.45),transparent_55%)]" />
        <div className="relative">
          <h1 className="text-xl font-semibold tracking-[0.2em] uppercase text-slate-100 mb-3">
            Stopwatch
          </h1>
          <StopWatch
            setstart={setstart}
            start={start}
            setstatusval={setstatus}
            statusval={status}
          />
        </div>
      </div>
    </div>
  );
}

export default MainStopWatch;