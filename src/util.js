// Утилитарные функции

// Получаем рандомное число из диапазона
const getRandomNumber = (beginNumber = 0, endNumber) => {
  return Math.floor(Math.random() * (endNumber - beginNumber + 1)) + beginNumber;
};

export {getRandomNumber};
