import React from "react";
import {shallow} from 'enzyme';
import Mistake from "../mistake/mistake";

describe(`Test cases component`, () => {
  it(`Render component`, () => {
    const wrapper = shallow(<Mistake/>);

    expect(wrapper).toBeTruthy();
  });
});

