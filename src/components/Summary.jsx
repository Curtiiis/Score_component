import { data } from "../data.js";
import { SummaryCategory } from "./SummaryCategory.jsx";

export function Summary({ datay, setDatay }) {
  function handleClick() {
    const newData = data.map((item) => ({
      ...item,
      score: Math.floor(Math.random() * 101),
    }));
    setDatay(newData);
  }

  return (
    <div className="subcard summary">
      <p className="title">Summary</p>

      <div className="categories">
        {datay.map((item, k) => (
          <SummaryCategory key={k} icon={item.icon} category={item.category} score={item.score} />
        ))}
      </div>

      <button className="card-btn" onClick={handleClick}>
        <span>Continue</span>
      </button>
    </div>
  );
}
