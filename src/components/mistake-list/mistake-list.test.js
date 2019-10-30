import React from "react";
import renderer from 'react-test-renderer';
import MistakeList from "../mistake-list/mistake-list";

const Value = {
  EMPTY: 0,
  FULL: 1,
};

const initProps = {
  mistakes: Value.EMPTY,
};

it(`Snapshot render component`, () => {
  const tree = renderer
    .create(
        <MistakeList
          {...initProps}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
