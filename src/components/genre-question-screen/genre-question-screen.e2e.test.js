import React from 'react';
import {shallow, mount} from "enzyme";
import GenreQuestionScreen from "./genre-question-screen";
global.FormData = jest.fn();
import {Value, EMPTY_STRING} from "../../constants";

const EMPTY_ANSWER = {
  src: EMPTY_STRING,
  genre: EMPTY_STRING,
};

describe(`Render Component`, () => {
  const trackButtonClickHandler = jest.fn();
  const submitClickHandler = jest.fn();
  const initialProps = {
    time: Value.EMPTY,
    mistakes: Value.EMPTY,
    question: EMPTY_STRING,
    answers: [EMPTY_ANSWER],
    onTrackButtonClick: trackButtonClickHandler,
    onSubmitClick: submitClickHandler,
  };

  it(`Render`, () => {
    const wrapper = shallow(
        <GenreQuestionScreen
          {...initialProps}
        />
    );

    expect(wrapper.find(`.game--genre`)).toHaveLength(Value.FULL);
  });

  it(`Render question node`, () => {
    const wrapper = shallow(
        <GenreQuestionScreen
          {...initialProps}
        />
    );

    expect(wrapper.find(`.game__title`)).toHaveLength(Value.FULL);
  });

  it(`Render answers`, () => {
    const wrapper = shallow(
        <GenreQuestionScreen
          {...initialProps}
        />
    );

    expect(wrapper.find(`.game__tracks`).children().length).not.toBe(Value.EMPTY);
  });

  it(`Click on track button`, () => {
    const wrapper = shallow(
        <GenreQuestionScreen
          {...initialProps}
        />
    );

    wrapper.find(`.track__button--play`).simulate(`click`);

    expect(trackButtonClickHandler).toBeCalledTimes(Value.FULL);
  });

  it(`Form submit`, () => {
    const wrapper = mount(
        <GenreQuestionScreen
          {...initialProps}
        />
    );

    wrapper.find(`.game__tracks`).simulate(`submit`, {preventDefault() {}});

    expect(submitClickHandler).toBeCalledTimes(Value.FULL);
  });

  it(`Call form handler with correct type`, () => {
    const wrapper = mount(
        <GenreQuestionScreen
          {...initialProps}
        />
    );

    wrapper.find(`.game__tracks`).simulate(`submit`, {preventDefault() {}});

    expect(submitClickHandler).toHaveBeenCalledWith(expect.any(String));
  });

});
