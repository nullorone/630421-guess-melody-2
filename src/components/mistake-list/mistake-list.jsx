import React from "react";
import Mistake from "../mistake/mistake";
import PropTypes from 'prop-types';

const {number} = PropTypes;

const MistakeList = (props) => {
  const {mistakes} = props;
  let mistakesMarkup = [];

  for (let i = 0; i < mistakes; i++) {
    const currentKey = `artist-mistake-${i + 1}`;

    mistakesMarkup.push(<Mistake key={currentKey}/>);
  }

  return (
    <div className="game__mistakes">
      {mistakesMarkup}
    </div>
  );
};

MistakeList.propTypes = {
  mistakes: number.isRequired,
};

export default MistakeList;
