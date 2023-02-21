export function SummaryCategory({ icon, category, score }) {
  return (
    <div className={`category ${category.toLowerCase()}`}>
      <div>
        <img src={icon} alt="icon"></img>
        <span>{category}</span>
      </div>
      <div>
        <span className="category-score">{score}</span>
        <span> / 100</span>
      </div>
    </div>
  );
}
