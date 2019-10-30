import React from 'react';
import {shallow} from "enzyme";
import App from "./app";
import {Value} from "../../constants";

describe(`Test cases component App`, () => {
  const initialProps = {
    time: Value.EMPTY,
    mistakes: Value.EMPTY,
    questions: [{}],
  };
  it(`Has property time`, () => {
    const wrapper = shallow(
        <App
          {...initialProps}
        />
    );

    expect(Boolean(wrapper.props(`time`))).toBeTruthy();
  });

  it(`Has property mistakes`, () => {
    const wrapper = shallow(
        <App
          {...initialProps}
        />
    );

    expect(Boolean(wrapper.props(`mistakes`))).toBeTruthy();
  });

  it(`Return Welcome component`, () => {
    const wrapper = shallow(
        <App
          {...initialProps}
        />
    );

    expect(wrapper.find(`Welcome`)).toBeTruthy();
  });

});
