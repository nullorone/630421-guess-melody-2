import React from 'react';
import {shallow} from "enzyme";
import {App} from "./app";

it(`Has property time`, () => {
  const wrapper = shallow(
      <App
        time={0}
        mistakes={0}
      />
  );

  expect(Boolean(wrapper.props(`time`))).toBeTruthy();
});

it(`Has property mistakes`, () => {
  const wrapper = shallow(
      <App
        time={0}
        mistakes={0}
      />
  );

  expect(Boolean(wrapper.props(`mistakes`))).toBeTruthy();
});

it(`Return Welcome component`, () => {
  const wrapper = shallow(
      <App
        time={0}
        mistakes={0}
      />
  );

  expect(wrapper.find(`Welcome`)).toBeTruthy();
});
