import React from 'react';
import {Welcome} from '../welcome/welcome';
import {getRandomNumber} from "../../util";

const GAME_TIMES = [5, 8, 10];
const AMOUNT_MISTAKES = [0, 3, 5];

const randomGameTime = getRandomNumber(0, GAME_TIMES.length - 1);
const randomAmountMistakes = getRandomNumber(0, AMOUNT_MISTAKES.length - 1);

const App = () => {
  return (
    <Welcome
      gameTime={GAME_TIMES[randomGameTime]}
      amountMistakes={AMOUNT_MISTAKES[randomAmountMistakes]}
    />);
};

export {App};
