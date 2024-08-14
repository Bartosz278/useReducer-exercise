function Progress({ index, numQuestions, points, maxPoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />
      <p>
        Question {index + 1}/{numQuestions}
      </p>
      <p>
        {points}/{maxPoints}
      </p>
    </header>
  );
}

export default Progress;
