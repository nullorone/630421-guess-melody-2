import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';
import {GAME_TIMES, AMOUNT_MISTAKES} from './mocks/data';
import {getRandomNumber} from "./util";

const randomGameTime = getRandomNumber(0, GAME_TIMES.length - 1);
const randomAmountMistakes = getRandomNumber(0, AMOUNT_MISTAKES.length - 1);

const init = () => {
  ReactDOM.render(
      <App
        time={GAME_TIMES[randomGameTime]}
        mistakes={AMOUNT_MISTAKES[randomAmountMistakes]}
      />,
      document.querySelector(`#root`)
  );
};

init();
