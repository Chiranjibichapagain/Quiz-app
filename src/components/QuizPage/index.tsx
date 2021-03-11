import React, { useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import { Line } from 'rc-progress';

import { QuizPageProp } from '../../componentTypes';
import Quiz from '../Quiz';
import './quizPage.scss';
import Result from '../Result';

const QuizPage = ({ quiz, setPage, setQuiz }: QuizPageProp) => {
  const [current, setCurrent] = useState<number>(0);
  const [percent, setPercent] = useState(0);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [countRight, setCountRight] = useState(7);
  const length = quiz.length;

  const nextQuestion = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    const progressPercent = +(((current + 1) / length) * 100).toFixed(0);
    setPercent(progressPercent);
  };

  const viewResult = () => {
    setPercent(100);
    setTimeout(() => {
      setIsResultOpen(true);
    }, 2000);
  };

  const newSet = () => {
    setCurrent(0);
    setQuiz([]);
    setPage('home');
  };

  return (
    <div className="quiz-page">
      {!isResultOpen && (
        <div>
          {quiz.length === 0 && (
            <div>
              <h3 className="quiz-page__message">Oops! couldn't load the quiz!</h3>
              <div className="quiz-page__loader">
                <HashLoader size={150} color="white" />
              </div>
            </div>
          )}
          {quiz.length > 0 && (
            <div className="progress">
              <p className="progress__percent">{percent}%</p>
              <Line
                className="progress__line"
                percent={percent}
                strokeWidth={1}
                strokeColor="#fa562c"
              />
            </div>
          )}
          <Quiz quiz={quiz[current]} />
          <div className="quiz-page__actions">
            <button
              className={current < length - 1 ? 'btn btn--next' : 'btn btn--d-next'}
              disabled={current < length - 1 ? false : true}
              onClick={nextQuestion}
            >
              Next Question
            </button>
            {current === length - 1 && (
              <button
                className="btn btn--result"
                disabled={isResultOpen ? true : false}
                onClick={viewResult}
              >
                View Results
              </button>
            )}
          </div>
        </div>
      )}
      {isResultOpen && (
        <div className="quiz-page__result-box">
          <Result rightAnswers={countRight} total={length} />
          <button className="btn btn--result" onClick={newSet}>
            New Questions set
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
