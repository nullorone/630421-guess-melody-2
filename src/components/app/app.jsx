import React from 'react';
import {Welcome} from '../welcome/welcome';
import PropTypes from 'prop-types';

const {number} = PropTypes;

const App = (props) => {
  const {time, mistakes} = props;

  return (
    <Welcome
      gameTime={time}
      amountMistakes={mistakes}
      onButtonClick={() => {}}
    />);
};

App.propTypes = {
  time: number.isRequired,
  mistakes: number.isRequired,
};

export {App};
