import React from 'react';
import {shallow} from "enzyme";
import Timer from './timer';
import {Value} from "../../constants";

describe(`Test cases Timer component`, () => {
  const initProps = {
    time: Value.FULL,
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <Timer {...initProps}/>
    );

    expect(wrapper.find(`.timer__value`)).toBeTruthy();
  });

  it(`Get value minutes`, () => {
    const wrapper = shallow(
        <Timer {...initProps}/>
    );

    expect(wrapper
      .find(`.timer__mins`)
      .text()
    ).toBe(initProps
        .time
        .toString()
        .padStart(2, Value.EMPTY));
  });
});
