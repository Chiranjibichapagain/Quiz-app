import React, { useState } from 'react';
import Select from 'react-select';

import Nav from './components/Nav';
import { categories, difficultyLevel, questionType } from './constants';
import './app.scss';

const App = () => {
  const [page, setPage] = useState<string>('home');
  const [number, setNumber] = useState(null);
  const [category, setCategory] = useState(null);
  const [level, setLevel] = useState<string>('');
  const [type, setType] = useState<string>('');

  return (
    <div className="app">
      <Nav />
      {page === 'home' && (
        <div className="home-main">
          <h1 className="home-main__heading">WELCOME TO THE QUIZ APP</h1>
          <div className="home-main__quiz-filter">
            <div className="home-main__filter-item">
              <label>Questions</label>
              <input
                className="home-main__input"
                onChange={(e: any) => setNumber(e.target.value)}
                type="number"
              />
            </div>
            <div className="home-main__filter-item">
              <label>Category</label>
              <Select
                className="home-main__select"
                Value={category}
                options={categories}
                onChange={() => setCategory}
              />
            </div>
            <div className="home-main__filter-item">
              <label>Difficulty</label>
              <Select
                className="home-main__select"
                Value={level}
                options={difficultyLevel}
                onChange={(target: any) => setLevel}
              />
            </div>
            <div className="home-main__filter-item">
              <label>Question Type</label>
              <Select
                className="home-main__select"
                Value={type}
                options={questionType}
                onChange={(target: any) => setType}
              />
            </div>
          </div>
          <button className="home-main__btn">Let's Go</button>
        </div>
      )}
      {page === 'quiz' && <div>Hello quiz</div>}
    </div>
  );
};

export default App;
