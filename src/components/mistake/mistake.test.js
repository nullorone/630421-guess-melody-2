import React from "react";
import renderer from 'react-test-renderer';
import Mistake from "../mistake/mistake";

it(`Snapshot render component`, () => {
  const tree = renderer
    .create(
        <Mistake/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
