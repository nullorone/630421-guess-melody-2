import React from 'react';
import {Welcome} from '../welcome/welcome';
import PropTypes from 'prop-types';

const {string, number, arrayOf, shape, oneOf} = PropTypes;

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
  questions: arrayOf(
      shape(
          {
            type: oneOf([`genre`, `artist`]),
            genre: oneOf([`rock`, `jazz`, `pop`]),
            answers: arrayOf(
                shape(
                    {
                      src: string,
                      genre: oneOf([`rock`, `jazz`, `pop`])
                    }
                )
            ),
          }
      ),
      shape(
          {
            type: oneOf([`genre`, `artist`]),
            song: shape({
              artist: oneOf([`Jim Beam`, `John Snow`, `Jack Daniels`]),
              src: string,
            }),
            answers: arrayOf(
                shape(
                    {
                      picture: string,
                      artist: oneOf([`Jim Beam`, `John Snow`, `Jack Daniels`])
                    }
                )
            ),
          }
      )
  ),
};

export default App;
