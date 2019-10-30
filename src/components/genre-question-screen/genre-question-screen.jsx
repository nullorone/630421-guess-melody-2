import React from 'react';
import PropTypes from 'prop-types';
import Timer from "../timer/timer";
import MistakeList from "../mistake-list/mistake-list";

const {string, number, func, shape, arrayOf} = PropTypes;

const generateAnswersMarkup = (gameAnswers, trackButtonClickHandler) => {
  return gameAnswers.map((answer, index) => {
    const {
      src,
      genre,
    } = answer;

    const currentIndex = index + 1;

    return (
      <div className="track" key={`genre-answer-${currentIndex}`}>
        <button className="track__button track__button--play" type="button" onClick={trackButtonClickHandler}/>
        <div className="track__status">
          <audio src={src}/>
        </div>
        <div className="game__answer">
          <input
            className="game__input visually-hidden"
            type="checkbox"
            name="answer"
            value={genre}
            id={`answer-${currentIndex}`}
          />
          <label className="game__check" htmlFor={`answer-${currentIndex}`}>Отметить</label>
        </div>
      </div>
    );
  });
};

const GenreQuestionScreen = (props) => {
  const {
    time,
    mistakes,
    question,
    answers,
    onTrackButtonClick,
    onSubmitClick,
  } = props;

  const submitHandler = (evt) => {
    evt.preventDefault();
    const formData = new FormData(document.querySelector(`.game__tracks`));
    const userAnswers = new Set(formData.getAll(`answer`));
    onSubmitClick([...userAnswers].join(`, `));
  };

  return (
    <section className="game game--genre">
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
        <form className="game__tracks" onSubmit={submitHandler}>
          {generateAnswersMarkup(answers, onTrackButtonClick)}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>);
};

GenreQuestionScreen.propTypes = {
  time: number.isRequired,
  mistakes: number.isRequired,
  question: string.isRequired,
  answers: arrayOf(
      shape({
        src: string.isRequired,
        genre: string.isRequired,
      })
  ),
  onTrackButtonClick: func.isRequired,
  onSubmitClick: func.isRequired,
};

export default GenreQuestionScreen;
