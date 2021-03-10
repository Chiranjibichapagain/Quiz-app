import React from 'react';
import { QuizProp } from '../../componentTypes';

const Quiz = ({ quiz }: QuizProp) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      {quiz && (
        <div>
          {' '}
          <h1>{quiz.question.replaceAll('&quot;', "''").replaceAll('&#039;', "'")}</h1>
          <div>
            {quiz.wrong.map((item: string, index: number) => (
              <h2 key={index}>{item.replaceAll('&#039;', "'")}</h2>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
