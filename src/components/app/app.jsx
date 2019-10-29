import React, {PureComponent} from 'react';
import {Welcome} from '../welcome/welcome';
import PropTypes from 'prop-types';
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";

const {string, number, arrayOf, shape} = PropTypes;

export default class App extends PureComponent {
  static getScreen(gameQuestion, props, ...handler) {
    const {
      time,
      mistakes,
      questions,
    } = props;

    const {onButtonClick} = handler[0];

    if (gameQuestion === -1) {
      return (
        <Welcome
          gameTime={time}
          amountMistakes={mistakes}
          onButtonClick={onButtonClick}
        />);
    }

    const {question, type, answers} = questions[gameQuestion];

    switch (type) {
      case (`artist`):
        return (
          <ArtistQuestionScreen
            question={question}
            answers={answers}
            onPlayButtonClick={() => {}}
            onArtistAnswerClick={onButtonClick}
            time={time}
            mistakes={mistakes}
          />
        );
      case (`genre`):
        return (
          <GenreQuestionScreen
            time={time}
            mistakes={mistakes}
            question={question}
            answers={answers}
            onTrackButtonClick={() => {}}
            onSubmitClick={onButtonClick}
          />
        );
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {question} = this.state;

    return App
      .getScreen(
          question,
          this.props,
          {
            onButtonClick: this._onButtonClickHandler.bind(this),
          });
  }

  _onButtonClickHandler(answers) {
    this.setState((prevState) => {
      const {questions} = this.props;
      const nextQuestion = prevState.question + 1;
      const endQuestion = nextQuestion >= questions.length;

      if (this.state.question !== -1) {
        // eslint-disable-next-line no-console
        console.log(`Ответ пользователя: ${answers}`);
      }

      return {
        question: endQuestion ? -1 : nextQuestion,
      };
    });
  }

}

App.propTypes = {
  time: number.isRequired,
  mistakes: number.isRequired,
  questions: arrayOf(
      shape(
          {
            type: string.isRequired,
            question: string.isRequired,
            genre: string,
            answers: arrayOf(
                shape(
                    {
                      src: string,
                      genre: string,
                    }
                )
            ),
          }
      ),
      shape(
          {
            type: string.isRequired,
            question: string.isRequired,
            song: shape({
              artist: string.isRequired,
              src: string,
            }),
            answers: arrayOf(
                shape(
                    {
                      picture: string,
                      artist: string.isRequired,
                    }
                )
            ),
          }
      )
  ),
};
