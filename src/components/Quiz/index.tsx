import React, { useState, useEffect } from 'react';
import { decode } from 'html-entities';

import { QuizProp } from '../../componentTypes';

import './quiz.scss';

const Quiz = ({ quiz, checked, setChecked, next, count, setCount }: QuizProp) => {
  const [btnIsDisabled, setBtnIsDisabled] = useState(false);
  const [ans, setAns] = useState<string[]>([]);
  // const shuffeledAnswers = answers && answers.sort(() => Math.random() - 0.5);
  const shuffleIt = async () => {
    const data = await quiz;
    const ans = data && [data.correct, ...data.wrong];
    const shuffeledAnswers = ans && ans.sort(() => Math.random() - 0.5);
    setAns(shuffeledAnswers);
  };

  useEffect(() => {
    shuffleIt();
  }, [quiz]);

  const handleClick = (item: string) => {
    setBtnIsDisabled(true);
    setChecked(true);
    if (item === quiz.correct) {
      setCount(count + 1);
    }
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
          <h1 className="quiz__question">{decode(quiz.question)}</h1>
          <div className="quiz__answers">
            {ans &&
              ans.map((item: string, index: number) => (
                <button
                  disabled={btnIsDisabled ? true : false}
                  onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    event.preventDefault(), handleClick(item);
                  }}
                  className={className(item)}
                  key={index}
                >
                  {decode(item)}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
