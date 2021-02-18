// функция расчета случайного числа в заданном диапазоне
// Результат: целое число из диапазона "от...до"
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max, numberOfDecimalPlaces) {
  if (min >= max) {
    alert('Вы ввели некорректные значения! Попробуйте еще раз.');
    return
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  let randomInt = Math.random() * (max - min + 1) + min;
  randomInt = randomInt.toFixed(numberOfDecimalPlaces);
  return parseFloat(randomInt);
}

// вывод функции в консоль
// Мин. значение и макс. значение соответственно - 10 и 32
// количество знаков после запятой - 4
getRandomIntInclusive(10,32,4)
