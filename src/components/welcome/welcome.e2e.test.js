import React from 'react';
import {shallow} from "enzyme";
import {Welcome} from "./welcome";

it(`Clicked on welcome button for start game`, () => {
  const onButtonClick = jest.fn();
  const wrapper = shallow(
      <Welcome
        gameTime={0}
        amountMistakes={0}
        onButtonClick={onButtonClick}
      />
  );

  wrapper
    .find(`.welcome__button`)
    .simulate(`click`);

  expect(onButtonClick).toBeCalledTimes(1);
});

