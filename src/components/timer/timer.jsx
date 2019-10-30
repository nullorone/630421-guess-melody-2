import React from 'react';
import PropTypes from 'prop-types';

const {number} = PropTypes;

const Timer = (props) => {
  const {time} = props;

  return (
    <div className="timer__value">
      <span className="timer__mins">{time.toString().padStart(2, `0`)}</span>
      <span className="timer__dots">:</span>
      <span className="timer__secs">00</span>
    </div>
  );
};

Timer.propTypes = {
  time: number.isRequired,
};

export default Timer;
