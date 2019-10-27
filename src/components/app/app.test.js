import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app";

it(`Component render`, () => {
  const tree = renderer.create(
      <App
        time={0}
        mistakes={0}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
