import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {MOCK_ARTISTS} from "../../constants";

const {number, shape, oneOf, string, func} = PropTypes;

export default class Artist extends PureComponent {
  constructor(props) {
    super(props);

    this.onInputClick = (evt) => {
      evt.preventDefault();
      const userAnswer = evt.target.labels[0].textContent;
      this.props.onInputClick(userAnswer);
    };
  }

  render() {
    const {
      artist,
      id,
      picture: {
        src,
        alt,
      }
    } = this.props;

    const answerId = `answer-${id}`;
    const artistId = `artist-${id}`;

    return (
      <div className="artist">
        <input
          className="artist__input visually-hidden"
          type="radio"
          name="answer"
          value={artistId}
          id={answerId}
          onClick={this.onInputClick}
        />
        <label className="artist__name" htmlFor={answerId}>
          <img className="artist__picture" src={src} alt={alt}/>
          {artist}
        </label>
      </div>
    );
  }
}

Artist.propTypes = {
  artist: oneOf(MOCK_ARTISTS),
  picture: shape({
    src: string.isRequired,
    alt: string.isRequired,
  }),
  id: number.isRequired,
  onInputClick: func.isRequired,
};

