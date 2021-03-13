import React, { useState } from 'react';
import Select from 'react-select';
import Modal from 'react-modal';

import Nav from './components/Nav';
import { categories, difficultyLevel, questionType } from './constants';
import QuizPage from './components/QuizPage';
import { OptionCategoryType, OptionType, QuizType, Result } from './componentTypes';

import './app.scss';

Modal.setAppElement('#root');
const App = () => {
  const [page, setPage] = useState<string>('home');
  const [number, setNumber] = useState<number | string>('');
  const [category, setCategory] = useState<number>();
  const [level, setLevel] = useState<string | undefined>('');
  const [type, setType] = useState<string | undefined>('');
  const [quiz, setQuiz] = useState<QuizType[] | []>([]);
  const [error, setError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fetchData = async (url: string) => {
    try {
      const data = await (await fetch(url)).json();
      if (data) {
        const quizData = data.results.map(({ results }: Result) => ({
          question: results.question,
          correct: results.correct,
          wrong: results.incorrect_answers
        }));
        setQuiz(quizData);
      }
    } catch (error) {
      setError(error);
    }
  };

  const startQuiz = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event?.preventDefault();
    const userInfo = localStorage.getItem('quiz-user-info');
    if (!userInfo) {
      setIsModalOpen(true);
    } else {
      const url = `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${level}&type=${type}`;
      setPage('quiz');
      fetchData(url);
      setNumber('');
    }
  };

  const modalStyle = {
    content: {
      width: '500px',
      top: '20%',
      left: '33%',
      right: 'auto',
      height: '220px'
    }
  };

  console.log('Error--', error);

  return (
    <div className="app">
      <Nav setPage={setPage} />
      {page === 'home' && (
        <div className="home-main">
          <h1 className="home-main__heading">WELCOME TO THE QUIZ APP</h1>
          <div className="home-main__quiz-filter">
            <div className="home-main__filter-item">
              <label>Questions</label>
              <input
                value={number}
                className="home-main__input"
                onChange={({ target }) => setNumber(target.value)}
                type="number"
              />
            </div>
            <div className="home-main__filter-item">
              <label>Category</label>
              <Select
                className="home-main__select"
                Value={category}
                options={categories}
                onChange={(option: OptionCategoryType | null) => setCategory(option?.value)}
              />
            </div>
            <div className="home-main__filter-item">
              <label>Difficulty</label>
              <Select
                className="home-main__select"
                Value={level}
                options={difficultyLevel}
                onChange={(option: OptionType | null) => setLevel(option?.value)}
              />
            </div>
            <div className="home-main__filter-item">
              <label>Question Type</label>
              <Select
                className="home-main__select"
                Value={type}
                options={questionType}
                onChange={(option: OptionType | null) => setType(option?.value)}
              />
            </div>
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            style={modalStyle}
          >
            <div className="modal">
              <h2 className="modal__title">Are you logged in?</h2>
              <p className="modal__message">To use the quiz app please log in. Thank you! </p>
              <button className="modal__btn" onClick={() => setIsModalOpen(false)}>
                Ok
              </button>
            </div>
          </Modal>
          <button onClick={startQuiz} className="home-main__btn">
            Let's Go
          </button>
        </div>
      )}
      {page === 'quiz' && <QuizPage setPage={setPage} setQuiz={setQuiz} quiz={quiz} />}
    </div>
  );
};

export default App;
