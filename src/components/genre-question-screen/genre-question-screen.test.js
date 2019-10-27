import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from "./genre-question-screen";

const Value = {
  EMPTY: 0,
  FULL: 1
};

const EMPTY_ANSWER = {
  src: ``,
  genre: ``,
};

describe(`Render Component`, () => {
  const trackButtonClickHandler = jest.fn();
  const submitClickHandler = jest.fn();
  const initialProps = {
    time: Value.EMPTY,
    mistakes: Value.EMPTY,
    question: ``,
    answers: [EMPTY_ANSWER],
    onTrackButtonClick: trackButtonClickHandler,
    onSubmitClick: submitClickHandler,
  };

  it(`Render`, () => {
    const tree = renderer
      .create(
          <GenreQuestionScreen
            {...initialProps}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
