import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from "./artist-question-screen";

const Value = {
  EMPTY: 0,
  FULL: 1,
};

const EMPTY_ANSWER = {
  artist: ``,
  picture: {
    src: ``,
    alt: ``,
  },
};

describe(`Snapshot`, () => {
  const playButtonHandler = jest.fn();
  const answerHandler = jest.fn();
  const initialProps = {
    question: ``,
    answers: [EMPTY_ANSWER],
    onPlayButtonClick: playButtonHandler,
    onArtistAnswerClick: answerHandler,
    time: Value.EMPTY,
    mistakes: Value.EMPTY,
  };

  it(`Render`, () => {
    const tree = renderer
      .create(
          <ArtistQuestionScreen
            {...initialProps}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
