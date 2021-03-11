import React, { useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import { Line } from 'rc-progress';

import { QuizPageProp } from '../../componentTypes';
import Quiz from '../Quiz';
import './quizPage.scss';

const QuizPage = ({ quiz, setPage, setQuiz }: QuizPageProp) => {
  const [current, setCurrent] = useState<number>(0);
  const [percent, setPercent] = useState(0);
  const [result, setResult] = useState(false);
  const length = quiz.length;

  const nextQuestion = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    const progressPercent = ((current + 1) / length) * 100;
    setPercent(progressPercent);
  };

  const viewResult = () => {
    setPercent(100);
    setTimeout(() => {
      setResult(true);
    }, 2000);
  };

  const newSet = () => {
    setCurrent(0);
    setQuiz([]);
    setPage('home');
  };

  return (
    <div className="quiz-page">
      {quiz.length === 0 && <HashLoader size={150} color="white" />}
      {quiz.length >= 0 && (
        <div>
          <p>`{percent}%`</p>
          <Line percent={percent} strokeWidth={1} strokeColor="#fa562c" />
        </div>
      )}
      {quiz.length >= 0 && !result && (
        <div>
          <Quiz quiz={quiz[current]} />
          <button disabled={current === length - 1 ? true : false} onClick={nextQuestion}>
            Next Question
          </button>
          {current === length - 1 && (
            <button disabled={result ? true : false} onClick={viewResult}>
              View Results
            </button>
          )}
        </div>
      )}
      {result && <button onClick={newSet}>New Questions set</button>}
      {result && <h1>Your final result</h1>}
    </div>
  );
};

export default QuizPage;
