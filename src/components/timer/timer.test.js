import React from 'react';
import renderer from 'react-test-renderer';
import Timer from "./timer";
import {Value} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    time: Value.FULL,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <Timer {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
