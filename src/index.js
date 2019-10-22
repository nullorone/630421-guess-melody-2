import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {GAME_TIMES, AMOUNT_MISTAKES} from './mocks/data';
import {questions} from './mocks/questions';
import {getRandomNumber} from "./util";

const randomGameTime = getRandomNumber(0, GAME_TIMES.length - 1);
const randomAmountMistakes = getRandomNumber(0, AMOUNT_MISTAKES.length - 1);

const init = (gameQuestions) => {
  ReactDOM.render(
      <App
        time={GAME_TIMES[randomGameTime]}
        mistakes={AMOUNT_MISTAKES[randomAmountMistakes]}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);
