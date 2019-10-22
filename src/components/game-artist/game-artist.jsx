import React from 'react';
import PropTypes from 'prop-types';

const {shape, string, number, arrayOf, func} = PropTypes;

const generateArtistMarkup = (answers) => {
  return answers.map((answer, index) => {
    const {
      artist,
      picture: {
        src,
        alt,
      }
    } = answer;
    const answerIndex = index + 1;
    return (
      <div className="artist" key={`answer-artist-${answerIndex}`}>
        <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${answerIndex}`} id={`answer-${answerIndex}`}/>
        <label className="artist__name" htmlFor={`answer-${answerIndex}`}>
          <img className="artist__picture" src={src} alt={alt}/>
          {artist}
        </label>
      </div>
    );
  });
};

const GameArtist = (props) => {
  const {
    question,
    answers,
    onPlayButtonClick,
    time,
    mistakes,
  } = props;

  const checkTimeFormat = (questionTime) => {
    return questionTime < 10 ? `0${questionTime}` : questionTime;
  };

  const generateMistakesMarkup = (amountMistakes) => {
    return new Array(amountMistakes).fill(` `).map((emptyValue, index) => <div className="wrong" key={`artist-mistake-${index + 1}`}/>);
  };

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

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">{checkTimeFormat(time)}</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          {generateMistakesMarkup(mistakes)}
        </div>
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
          {generateArtistMarkup(answers)}
        </form>
      </section>
    </section>
  );
};

GameArtist.propTypes = {
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
  time: number.isRequired,
  mistakes: number.isRequired,
};

export default GameArtist;
