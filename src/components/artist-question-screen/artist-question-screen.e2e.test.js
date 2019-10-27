import React from 'react';
import {shallow, mount} from "enzyme";
import ArtistQuestionScreen from "./artist-question-screen";

const Value = {
  EMPTY: 0,
  FULL: 1,
};

const EMPTY_STRING = ``;

const EMPTY_ANSWER = {
  artist: EMPTY_STRING,
  picture: {
    src: EMPTY_STRING,
    alt: EMPTY_STRING,
  },
};

describe(`Return values component`, () => {
  const playButtonHandler = jest.fn();
  const answerClickHandler = jest.fn();
  const initialProps = {
    question: EMPTY_STRING,
    answers: [EMPTY_ANSWER],
    onPlayButtonClick: playButtonHandler,
    onArtistAnswerClick: answerClickHandler,
    time: Value.EMPTY,
    mistakes: Value.EMPTY,
  };

  it(`Return section with className game--artist`, () => {
    const wrapper = shallow(
        <ArtistQuestionScreen
          {...initialProps}
        />
    );

    expect(wrapper.find(`.game--artist`)).toHaveLength(Value.FULL);
  });

  it(`Return question title`, () => {
    const wrapper = shallow(
        <ArtistQuestionScreen
          {...initialProps}
        />
    );

    expect(wrapper.find(`.game__title`)).toHaveLength(Value.FULL);
  });

  it(`Return button play track`, () => {
    const wrapper = shallow(
        <ArtistQuestionScreen
          {...initialProps}
        />
    );

    expect(wrapper.find(`.track__button--play`)).toHaveLength(Value.FULL);
  });

  it(`Click on button play track`, () => {
    const wrapper = shallow(
        <ArtistQuestionScreen
          {...initialProps}
        />
    );

    wrapper.find(`.track__button--play`).simulate(`click`);

    expect(playButtonHandler).toBeCalledTimes(Value.FULL);
  });

  it(`Click on answer`, () => {
    const wrapper = mount(
        <ArtistQuestionScreen
          {...initialProps}
        />
    );

    wrapper.find(`.artist__input`).simulate(`click`, {preventDefault() {}});

    expect(answerClickHandler).toBeCalledTimes(Value.FULL);
  });

  it(`Return answers`, () => {
    const wrapper = shallow(
        <ArtistQuestionScreen
          {...initialProps}
        />
    );

    expect(wrapper.find(`.game__artist`).children().length).not.toBe(Value.EMPTY);
  });

  it(`Call answer handler with correct type`, () => {
    const wrapper = mount(
        <ArtistQuestionScreen
          {...initialProps}
        />
    );

    wrapper.find(`.artist__input`).simulate(`click`, {preventDefault() {}});

    expect(answerClickHandler).toBeCalledWith(expect.any(String));
  });
});


