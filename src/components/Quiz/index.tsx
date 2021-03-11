import React, { useState } from 'react';
import { QuizProp } from '../../componentTypes';

import './quiz.scss';
const Quiz = ({ quiz }: QuizProp) => {
  const [checked, setChecked] = useState(false);
  const answers = quiz && [quiz.correct, ...quiz.wrong];
  const shuffeledAnswers = answers && answers.sort(() => Math.random() - 0.5);

  const checkAnswer = (item: string) => {
    setChecked(true);
  };

  const className = (item: string) => {
    if (!checked) {
      return 'quiz__answer';
    }
    if (checked) {
      if (item === quiz.correct) {
        return 'quiz__answer quiz__answer--correct';
      } else {
        return 'quiz__answer quiz__answer--correct';
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
              <button onClick={() => checkAnswer(item)} className={className(item)} key={index}>
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
