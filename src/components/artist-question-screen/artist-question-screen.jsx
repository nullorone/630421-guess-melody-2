import React from 'react';
import PropTypes from 'prop-types';
import MistakeList from "../mistake-list/mistake-list";
import Timer from "../timer/timer";

const {shape, string, number, arrayOf, func} = PropTypes;


const generateArtistMarkup = (answers, onInputClick) => {
  const artistInputClickHandler = (evt) => {
    evt.preventDefault();
    const userAnswer = evt.target.labels[0].textContent;
    onInputClick(userAnswer);
  };

  return answers.map((answer, index) => {
    const {
      artist,
      picture: {
        src,
        alt,
      }
    } = answer;
    const answerIndex = index + 1;
    const answerId = `answer-${answerIndex}`;
    const artistId = `artist-${answerIndex}`;
    const markupId = `answer-artist-${answerIndex}`;

    return (
      <div className="artist" key={markupId}>
        <input
          className="artist__input visually-hidden"
          type="radio"
          name="answer"
          value={artistId}
          id={answerId}
          onClick={artistInputClickHandler}
        />
        <label className="artist__name" htmlFor={answerId}>
          <img className="artist__picture" src={src} alt={alt}/>
          {artist}
        </label>
      </div>
    );
  });
};

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

        <form className="game__artist">
          {generateArtistMarkup(answers, onArtistAnswerClick)}
        </form>
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
