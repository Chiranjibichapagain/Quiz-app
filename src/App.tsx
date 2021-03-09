import React, { useState } from 'react';
import Select from 'react-select';

import Nav from './components/Nav';
import './app.scss';

const App = () => {
  const [page, setPage] = useState<string>('home');
  const [number, setNumber] = useState(null);
  const [category, setCategory] = useState<string>('');

  const categories = [
    { value: 'General Knowledge', label: 'General Knowledge' },
    { value: 'Entertainment:Books', label: 'Entertainment:Books' },
    { value: 'Entertainment:Films', label: 'EninitialStatence:Computers' },
    { value: 'Science:Mathematics', label: 'Science:Mathematics' },
    { value: 'Mythology', label: 'Mythology' },
    { value: 'Sports', label: 'Sports' },
    { value: 'History', label: 'History' },
    { value: 'Geography', label: 'Geography' },
    { value: 'Politics', label: 'Politics' },
    { value: 'Art', label: 'Art' },
    { value: 'Animal', label: 'Animal' }
  ];

  return (
    <div className="app">
      <Nav />
      {page === 'home' && (
        <div className="home-main">
          <h1>WELCOME TO THE QUIZ APP</h1>
          <div className="home-main__quiz-filter">
            <div className="home-main__filter-item">
              <label>Questions</label>
              <input type="text" />
            </div>
            <div className="home-main__filter-item">
              <label>Category</label>
              <Select
                Value={category}
                options={categories}
                onChange={(target: any) => setCategory}
              />
            </div>
            <div className="home-main__filter-item"></div>
            <div className="home-main__filter-item"></div>
            <div className="home-main__filter-item"></div>
          </div>
        </div>
      )}
      {page === 'quiz' && <div>Hello quiz</div>}
    </div>
  );
};

export default App;
