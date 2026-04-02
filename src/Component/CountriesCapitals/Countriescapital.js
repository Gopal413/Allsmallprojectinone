// import React, { useState } from "react";

// function Countriescapital() {
//   const [data, setdata] = useState();
//   const [choose, setchoose] = useState();
//   // const country =["India","Russia","United Kingdom","Germany","Spain","Ukraine","Italy","France","Belarus"]
//   const country = {
//     Delhi:"India",
//     Moscow:"Russia",
//     London:"United Kingdom",
//     Berlin:"Germany",
//     Madrid:"Spain",
//     Kiev:"Ukraine",
//     Rome:"Italy",
//     Paris:"France",
//     Minsk:"Belarus"
//   };
//   const resultfun = (e) => {
//     const res =e.target.value;
//     setchoose(res);
//     setdata(country[res]||"")
//   };
  
//   console.log("value ", choose);
//   return (
//     <div style={{backgroundColor:"lightblue", height:"100vh", width: "100vw"}}>
//       <div style={{border:"2px solid ",width:"550px",height:'250px',textAlign:"center",position:"relative",top:"250px",left:"550px"}}>
//         <h1 style={{fontSize:"40px"}}>Countries And Capitals</h1>
//         <div style={{display:'flex',justifyContent:"center",alignContent:"center",gap:"10px"}}>
//           <select
//             name="Capital"
//             value={choose}
//             onChange={resultfun}
//             id="Capitals"
//             style={{fontSize:"20px",height:"40px",width:"150px",position:"relative",top:"15px"}}
//           >
//             <option value="">No Match</option>
//            {Object.keys(country).map((e)=>(
//             <option style={{height:"80px" }} key={e} value={e}>{e}</option>
//            ))}
//           </select>
//           <h3 style={{fontSize:"22px"}} >is Capital of which country?</h3>
//         </div>
//         <h2 style={{display:"flex",justifyContent:"flex-start",position:"relative",left:"65px"}}>{data}</h2>
//       </div>
//     </div>
//   );
// }

// export default Countriescapital;

import React, { useState } from "react";
import "./index.css";

function Countriescapital() {
  const [data, setData] = useState("");
  const [choose, setChoose] = useState("");

  const country = {
    Delhi: "India",
    Moscow: "Russia",
    London: "United Kingdom",
    Berlin: "Germany",
    Madrid: "Spain",
    Kiev: "Ukraine",
    Rome: "Italy",
    Paris: "France",
    Minsk: "Belarus",
  };

  const resultfun = (e) => {
    const res = e.target.value;
    setChoose(res);
    setData(country[res] || "");
  };

  return (
    <div className="cc-page">
      <div className="cc-card">
        <h1 className="cc-title">Countries & Capitals</h1>

        <div className="cc-row">
          <select
            name="Capital"
            value={choose}
            onChange={resultfun}
            id="Capitals"
            className="cc-select"
          >
            <option value="">Select a capital</option>
            {Object.keys(country).map((cap) => (
              <option key={cap} value={cap}>
                {cap}
              </option>
            ))}
          </select>

          <h3 className="cc-question">is capital of which country?</h3>
        </div>

        <h2 className="cc-answer">{data}</h2>
      </div>
    </div>
  );
}

export default Countriescapital;
