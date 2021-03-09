import React, { useState } from 'react';
import Select, { OptionsType, ValueType } from 'react-select';

import Nav from './components/Nav';
import { categories, difficultyLevel, questionType } from './constants';
import './app.scss';

const App = () => {
  const [page, setPage] = useState<string>('home');
  const [number, setNumber] = useState<number | string>('');
  const [category, setCategory] = useState<string>('');
  const [level, setLevel] = useState<string>('');
  const [type, setType] = useState<string>('');

  console.log('xxx--', number, category, level, type);

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
                onChange={(option: any) => setCategory(option.value)}
              />
            </div>
            <div className="home-main__filter-item">
              <label>Question Type</label>
              <Select
                className="home-main__select"
                Value={type}
                options={questionType}
                onChange={(option: any) => setCategory(option.value)}
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
