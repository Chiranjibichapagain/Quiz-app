import React, { useState } from 'react';
import { QuizProp } from '../../componentTypes';

import './quiz.scss';
const Quiz = ({ quiz }: QuizProp) => {
  const answers = quiz && [quiz.correct, ...quiz.wrong];
  const shuffeledAnswers = answers && answers.sort(() => Math.random() - 0.5);

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
              <button className="quiz__answer" key={index}>
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
