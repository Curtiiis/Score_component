import React, { useState } from "react";
import "./styles/App.scss";
import "./styles/Card.scss";
import { data, peopleScores } from "./data.js";
import { Result } from "./components/Result.jsx";
import { Summary } from "./components/Summary.jsx";

function App() {
  const [datay, setDatay] = useState(data);
  const averageScore = Math.floor(datay.reduce((acc, curr) => acc + curr.score, 0) / datay.length);

  const lowerScores = peopleScores.filter((x) => x < averageScore);
  const mediane = Math.floor((lowerScores.length / peopleScores.length) * 100);

  return (
    <div className="card">
      <Result averageScore={averageScore} average={mediane} />
      <Summary datay={datay} setDatay={setDatay} />
    </div>
  );
}

export default App;
