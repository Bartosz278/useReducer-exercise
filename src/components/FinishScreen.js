function FinishScreen({ points, maxPoints, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <div>
      <p className="result">
        You scored {points} out of {maxPoints} {Math.ceil(percentage)}%
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </div>
  );
}

export default FinishScreen;
