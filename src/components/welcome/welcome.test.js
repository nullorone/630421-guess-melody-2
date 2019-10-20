import React from 'react';
import renderer from 'react-test-renderer';
import {Welcome} from "./welcome";

it(`Render a greeting`, () => {
  const tree = renderer
    .create(
        <Welcome
          gameTime={0}
          amountMistakes={0}
          onButtonClick={() => {}}
        />
    );

  expect(tree).toMatchSnapshot();
});

