import React, { useState } from 'react';
import Select from 'react-select';

import Nav from './components/Nav';
import { categories, difficultyLevel, questionType } from './constants';
import './app.scss';
import QuizPage from './components/QuizPage';
import { QuizType } from './componentTypes';

const App = () => {
  const [page, setPage] = useState<string>('home');
  const [number, setNumber] = useState<number | string>('');
  const [category, setCategory] = useState<number>();
  const [level, setLevel] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [quiz, setQuiz] = useState<QuizType[] | []>([]);
  const [error, setError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async (url: string) => {
    try {
      const data = await (await fetch(url)).json();
      if (data) {
        const quizData = data.results.map((result: any) => ({
          question: result.question,
          correct: result.correct_answer,
          wrong: result.incorrect_answers
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
    }
    const url = `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${level}&type=${type}`;
    setPage('quiz');
    fetchData(url);
    setNumber('');
  };

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
                onChange={(option: any) => setCategory(option.value)}
              />
            </div>
            <div className="home-main__filter-item">
              <label>Difficulty</label>
              <Select
                className="home-main__select"
                Value={level}
                options={difficultyLevel}
                onChange={(option: any) => setLevel(option.value)}
              />
            </div>
            <div className="home-main__filter-item">
              <label>Question Type</label>
              <Select
                className="home-main__select"
                Value={type}
                options={questionType}
                onChange={(option: any) => setType(option.value)}
              />
            </div>
          </div>
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
