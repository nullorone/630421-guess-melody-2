import React from "react";
import {shallow} from 'enzyme';
import MistakeList from "../mistake-list/mistake-list";

const Value = {
  EMPTY: 0,
  FULL: 1,
};

describe(`Test cases component`, () => {
  const initProps = {
    mistakes: Value.FULL,
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <MistakeList
          {...initProps}
        />
    );

    console.log(wrapper.find(`.wrong`).debug())

    expect(wrapper.find(`.wrong`)).toBeTruthy();
  });

  it(`Return value amount prop`, () => {
    const wrapper = shallow(
        <MistakeList
          {...initProps}
        />
    );

    console.log(wrapper.debug())

    expect(wrapper.props(`mistakes`)).toBe(initProps.mistakes);
  });
});

