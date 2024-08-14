function NextButton({ dispatch, answer, index, numQestions }) {
  if (answer === null) {
    return null;
  }

  if (index < numQestions - 1)
    return (
      <div>
        {answer >= 0 ? (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next
          </button>
        ) : null}
      </div>
    );
  if ((index = numQestions - 1))
    return (
      <div>
        {answer >= 0 ? (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "finish" })}
          >
            Finish
          </button>
        ) : null}
      </div>
    );
}

export default NextButton;
