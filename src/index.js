import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {GAME_TIMES, AMOUNT_MISTAKES} from './constants';
import {questions} from './mocks/questions';
import {getRandomValueOfArray} from "./util";

const init = (gameQuestions) => {
  ReactDOM.render(
      <App
        time={getRandomValueOfArray(GAME_TIMES)}
        mistakes={getRandomValueOfArray(AMOUNT_MISTAKES)}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);
