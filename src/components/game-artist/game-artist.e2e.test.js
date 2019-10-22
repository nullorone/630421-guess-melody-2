import React from 'react';
import {shallow} from "enzyme";
import GameArtist from "./game-artist";

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

describe(`Return values component`, () => {
  const playButtonHandler = jest.fn();
  const initialProps = {
    question: ``,
    answers: [EMPTY_ANSWER],
    onPlayButtonClick: playButtonHandler,
    time: Value.EMPTY,
    mistakes: Value.EMPTY,
  };

  it(`Return section with className game--artist`, () => {
    const wrapper = shallow(
        <GameArtist
          {...initialProps}
        />
    );

    expect(wrapper.find(`.game--artist`)).toHaveLength(Value.FULL);
  });

  it(`Return question title`, () => {
    const wrapper = shallow(
        <GameArtist
          {...initialProps}
        />
    );

    expect(wrapper.find(`.game__title`)).toHaveLength(Value.FULL);
  });

  it(`Return button play track`, () => {
    const wrapper = shallow(
        <GameArtist
          {...initialProps}
        />
    );

    expect(wrapper.find(`.track__button--play`)).toHaveLength(Value.FULL);
  });

  it(`Click on button play track`, () => {
    const wrapper = shallow(
        <GameArtist
          {...initialProps}
        />
    );

    wrapper.find(`.track__button--play`).simulate(`click`);

    expect(playButtonHandler).toBeCalledTimes(Value.FULL);
  });

  it(`Return answers`, () => {
    const wrapper = shallow(
        <GameArtist
          {...initialProps}
        />
    );

    expect(wrapper.find(`.game__artist`).children().length).not.toBe(Value.EMPTY);
  });
});


