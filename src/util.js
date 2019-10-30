// Утилитарные функции

// Получаем рандомное число из диапазона
const getRandomNumber = (endNumber, beginNumber = 0) => {
  return Math.floor(Math.random() * (endNumber - beginNumber + 1)) + beginNumber;
};

const getRandomValueOfArray = (array) => {
  return array[array.length - 1];
};

// Получаем формат числа 0n
const checkTimeFormat = (questionTime) => {
  return questionTime < 10 ? `0${questionTime}` : questionTime;
};

export {
  getRandomNumber,
  getRandomValueOfArray,
  checkTimeFormat,
};
