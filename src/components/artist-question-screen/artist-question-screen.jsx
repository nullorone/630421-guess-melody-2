import React from 'react';
import PropTypes from 'prop-types';
import MistakeList from "../mistake-list/mistake-list";
import Timer from "../timer/timer";
import ArtistList from "../artist-list/artist-list";

const {shape, string, number, arrayOf, func} = PropTypes;

const ArtistQuestionScreen = (props) => {
  const {
    question,
    answers,
    onPlayButtonClick,
    onArtistAnswerClick,
    time,
    mistakes,
  } = props;

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"/>
        </svg>

        <Timer time={time}/>
        <MistakeList mistakes={mistakes}/>
      </header>

      <section className="game__screen">
        <h2 className="game__title">{question}</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" onClick={onPlayButtonClick} type="button"/>
            <div className="track__status">
              <audio/>
            </div>
          </div>
        </div>

        <ArtistList
          answers={answers}
          onArtistAnswerClick={onArtistAnswerClick}
        />
      </section>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  question: string.isRequired,
  answers: arrayOf(
      shape({
        artist: string.isRequired,
        picture: shape({
          src: string.isRequired,
          alt: string.isRequired,
        }),
      })),
  onPlayButtonClick: func.isRequired,
  onArtistAnswerClick: func.isRequired,
  time: number.isRequired,
  mistakes: number.isRequired,
};

export default ArtistQuestionScreen;
