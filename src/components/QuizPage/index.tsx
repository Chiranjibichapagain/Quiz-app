import React, { useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';

import { QuizPageProp } from '../../componentTypes';
import Quiz from '../Quiz';

const QuizPage = ({ quiz, setPage, setQuiz }: QuizPageProp) => {
  const [current, setCurrent] = useState<number>(0);
  const length = quiz.length;

  const nextQuestion = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div>
      {quiz.length === 0 && <HashLoader size={150} color="white" />}

      {quiz.length >= 0 && (
        <div>
          <Quiz quiz={quiz[current]} />
          <button disabled={current === length - 1 ? true : false} onClick={nextQuestion}>
            Next Question
          </button>
          {current === length - 1 && (
            <button
              onClick={() => {
                setPage('home');
                setCurrent(0);
                setQuiz([]);
              }}
            >
              Get new set of questions
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizPage;
