import React from 'react';
import PropTypes from 'prop-types';
import Artist from "../artist/artist";
import {MOCK_ARTISTS} from "../../constants";

const {arrayOf, shape, oneOf, string, func} = PropTypes;

const ArtistList = (props) => {
  const {
    answers,
    onArtistAnswerClick,
  } = props;

  let artists = [];

  for (let i = 0; i < answers.length; i++) {
    const {
      artist,
      picture
    } = answers[i];
    const answerIndex = i + 1;
    const markupId = `answer-artist-${answerIndex}`;

    artists.push(
        <Artist
          artist={artist}
          id={answerIndex}
          key={markupId}
          picture={picture}
          onInputClick={onArtistAnswerClick}
        />);
  }

  return (
    <form className="game__artist">
      {artists}
    </form>
  );
};

ArtistList.propTypes = {
  answers: arrayOf(shape({
    artist: oneOf(MOCK_ARTISTS),
    picture: shape({
      src: string.isRequired,
      alt: string.isRequired,
    }),
  })),
  onArtistAnswerClick: func.isRequired,
};

export default ArtistList;
