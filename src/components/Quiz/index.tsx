import React, { useState } from 'react';
import { QuizProp } from '../../componentTypes';

const Quiz = ({ quiz }: QuizProp) => {
  const answers = quiz && [quiz.correct, ...quiz.wrong];
  const shuffeledAnswers = answers && answers.sort(() => Math.random() - 0.5);

  return (
    <div style={{ backgroundColor: 'white' }}>
      {quiz && (
        <div>
          {' '}
          <h1>{quiz.question.replaceAll('&quot;', "''").replaceAll('&#039;', "'")}</h1>
          <div>
            {shuffeledAnswers.map((item: string, index: number) => (
              <h2 key={index}>{item.replaceAll('&#039;', "'").replaceAll('&rsquo;', "'")}</h2>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
