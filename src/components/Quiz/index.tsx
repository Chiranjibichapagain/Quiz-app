import React, { useState } from 'react';
import { QuizProp } from '../../componentTypes';

import './quiz.scss';
const Quiz = ({ quiz, checked, setChecked, next }: any) => {
  const [btnIsDisabled, setBtnIsDisabled] = useState(false);
  const answers = quiz && [quiz.correct, ...quiz.wrong];
  const shuffeledAnswers = answers && answers.sort(() => Math.random() - 0.5);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setBtnIsDisabled(true);
    setChecked(true);
    setTimeout(() => {
      next();
      setBtnIsDisabled(false);
    }, 3000);
  };

  const className = (item: string) => {
    if (!checked) {
      return 'quiz__answer';
    }
    if (checked) {
      if (item === quiz.correct) {
        return 'quiz__answer quiz__answer--correct';
      } else {
        return 'quiz__answer quiz__answer--incorrect';
      }
    }
  };

  return (
    <div>
      {quiz && (
        <div className="quiz">
          {' '}
          <h1 className="quiz__question">
            {quiz.question.replaceAll('&quot;', "''").replaceAll('&#039;', "'")}
          </h1>
          <div className="quiz__answers">
            {shuffeledAnswers.map((item: string, index: number) => (
              <button
                disabled={btnIsDisabled ? true : false}
                onClick={handleClick}
                className={className(item)}
                key={index}
              >
                {item.replaceAll('&#039;', "'").replaceAll('&rsquo;', "'")}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
