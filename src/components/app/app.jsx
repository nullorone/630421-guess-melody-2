import React from 'react';
import {Welcome} from '../welcome/welcome';
import PropTypes from 'prop-types';
import GameArtist from "../game-artist/game-artist";

const {string, number, arrayOf, shape, oneOf} = PropTypes;

const App = (props) => {
  const {questions, time, mistakes} = props;

  const getScreen = (GameQuestion) => {
    const {
      question,
      type,
      answers
    } = GameQuestion;

    switch (true) {
      case (type === `artist`):
        return (
          <GameArtist
            question={question}
            answers={answers}
            onPlayButtonClick={() => {}}
            time={time}
            mistakes={mistakes}
          />
        );
      case (type === `genre`):
        return (
          <Welcome
            gameTime={time}
            amountMistakes={mistakes}
            onButtonClick={() => {}}
          />);
      default:
        return null;
    }
  };

  return questions.map((question, index) => {
    return (
      <React.Fragment key={`question-component-${index + 1}`}>
        {getScreen(question)}
      </React.Fragment>
    );
  });
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
