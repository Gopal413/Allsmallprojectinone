
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
