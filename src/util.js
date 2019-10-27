// Утилитарные функции

// Получаем рандомное число из диапазона
const getRandomNumber = (beginNumber = 0, endNumber) => {
  return Math.floor(Math.random() * (endNumber - beginNumber + 1)) + beginNumber;
};

// Получаем формат числа 0n
const checkTimeFormat = (questionTime) => {
  return questionTime < 10 ? `0${questionTime}` : questionTime;
};

export {
  getRandomNumber,
  checkTimeFormat,
};
