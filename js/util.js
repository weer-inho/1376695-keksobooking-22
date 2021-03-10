// функция расчета случайного числа в заданном диапазоне
// Результат: целое число из диапазона "от...до"
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min, max, numberOfDecimalPlaces) => {
  if (min >= max || min < 0 || max < 0) {
    alert('Вы ввели некорректные значения! Попробуйте еще раз.');
    return
  }
  let randomInt = Math.random() * (max - min + 1) + min;
  randomInt = randomInt.toFixed(numberOfDecimalPlaces);
  return parseFloat(randomInt);
}

// функция получения из массива элемента со случайным индексом
const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
};

// функция получения массива случайной длины из исходного массива
const getRandomLengthArray = (elements) => {
  return elements.slice(0, elements.length - getRandomIntInclusive(0, elements.length, 0))
}

export {getRandomIntInclusive, getRandomArrayElement, getRandomLengthArray};
