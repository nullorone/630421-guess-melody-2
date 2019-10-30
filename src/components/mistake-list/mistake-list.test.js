import React from "react";
import renderer from 'react-test-renderer';
import MistakeList from "../mistake-list/mistake-list";
import {Value} from "../../constants";

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
