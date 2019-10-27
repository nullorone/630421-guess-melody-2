export const questions = [
  {
    type: `genre`,
    question: `Выберите инди-рок треки`,
    genre: `rock`,
    answers: [
      {
        src: `https://commons.wikimedia.org/wiki/File:Uganda_national_anthem.ogg`,
        genre: `rock`,
      },
      {
        src: `https://commons.wikimedia.org/wiki/File:Uganda_national_anthem.ogg`,
        genre: `pop`,
      },
      {
        src: `https://commons.wikimedia.org/wiki/File:Uganda_national_anthem.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://commons.wikimedia.org/wiki/File:Uganda_national_anthem.ogg`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    question: `Кто исполняет эту песню?`,
    song: {
      artist: `Пелагея`,
      src: `https://commons.wikimedia.org/wiki/File:Uganda_national_anthem.ogg`,
    },
    answers: [
      {
        picture: {
          src: `http://placehold.it/134x134`,
          alt: `Пелагея`,
        },
        artist: `Пелагея`,
      },
      {
        picture: {
          src: `http://placehold.it/134x134`,
          alt: `Краснознаменная дивизия имени моей бабушки`,
        },
        artist: `Краснознаменная дивизия имени моей бабушки`,
      },
      {
        picture: {
          src: `http://placehold.it/134x134`,
          alt: `Lorde`,
        },
        artist: `Lorde`,
      },
    ],
  },
];
