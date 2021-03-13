import React, { useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import { Line } from 'rc-progress';

import { QuizPageProp } from '../../componentTypes';
import Quiz from '../Quiz';
import Result from '../Result';

import './quizPage.scss';

const QuizPage = ({ quiz, setPage, setQuiz }: QuizPageProp) => {
  const [current, setCurrent] = useState<number>(0);
  const [percent, setPercent] = useState<number>(0);
  const [isResultOpen, setIsResultOpen] = useState<boolean>(false);
  const [countRight, setCountRight] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);

  const length = quiz.length;

  const nextQuestion = () => {
    if (current === length - 1) {
      viewResult();
    }
    setCurrent(current === length - 1 ? length - 1 : current + 1);
    const progressPercent = +(((current + 1) / length) * 100).toFixed(0);
    setPercent(progressPercent);
    setChecked(false);
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
            <div className="quiz-page__loder-div">
              <h3 className="quiz-page__message">Loading Quiz..</h3>
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
          <Quiz
            count={countRight}
            setCount={setCountRight}
            next={nextQuestion}
            checked={checked}
            setChecked={setChecked}
            quiz={quiz[current]}
          />
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
