import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import './result.scss';
const Result = ({ rightAnswers, total }: any) => {
  const incorrect = total - rightAnswers;
  return (
    <div className="result">
      <h1 className="result__heading">Your Quiz Result</h1>
      <p className="result__total">Total Questions: {total}</p>
      <PieChart
        labelStyle={{ fontSize: '7px', color: 'white' }}
        animate={true}
        label={(props) => {
          return props.dataEntry.title;
        }}
        data={[
          { title: `Correct: ${rightAnswers}`, value: rightAnswers, color: '#61fa79', key: 'pass' },
          { title: `Incorrect: ${incorrect}`, value: incorrect, color: '#fa562c' }
        ]}
      />
      ;
    </div>
  );
};

export default Result;
