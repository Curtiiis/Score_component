export function Result({ averageScore, average }) {
  const verdict = averageScore > 66 ? "Great" : averageScore > 33 ? "Good" : "Not bad";

  return (
    <div className="subcard result">
      <p className="title">Your Result</p>
      <div className="percentage">
        <span>{averageScore}</span>
        <span> of 100</span>
      </div>

      <span className="result-verdict">{verdict}</span>
      <p className="result-comment">
        You scored higher than {average}% of the people who have taken these tests.
      </p>
    </div>
  );
}
