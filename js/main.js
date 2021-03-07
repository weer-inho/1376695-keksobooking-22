// функция расчета случайного числа в заданном диапазоне
// Результат: целое число из диапазона "от...до"
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max, numberOfDecimalPlaces) {
  if (min >= max || min < 0 || max < 0) {
    alert('Вы ввели некорректные значения! Попробуйте еще раз.');
    return
  }
  let randomInt = Math.random() * (max - min + 1) + min;
  randomInt = randomInt.toFixed(numberOfDecimalPlaces);
  return parseFloat(randomInt);
}

const SIMILAR_OBJECT_COUNT = 10;

const HOUSE_TITLES = [
  'Девичье гнездышко',
  'Световая симфония',
  'Карнавал текстур и красок',
  'Продуманная рациональность',
  'Семейный корабль',
  'Штучный экземпляр',
  'Отбросим стереотипы',
  'Морские просторы',
  'Остров хорошего настроения',
  'Дом под старину',
];

const HOUSE_TYPES = ['palace', 'flat', 'house', 'bungalow'];

const CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];

const CHECKIN_TIMES = ['12:00', '13:00', '14:00'];

const ROOM_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const HOUSE_DESCRIPTION = [
  'комната просторна',
  'мебели в комнате немного',
  'придают комнате уют',
  'очень украшают комнату',
  'большая часть комнаты занята',
  'слева от двери находится',
  'в углу помещается',
  'бросается в глаза',
  'нельзя не заметить',
  'место в углу занимает',
];

const HOUSE_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

// функция получения из массива элемента со случайным индексом
const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
};

// функция получения массива случайной длины из исходного массива
const getRandomLengthArray = (elements) => {
  return elements.slice(0, elements.length - getRandomIntInclusive(0, elements.length, 0))
}

const createAd = () => {
  return {
    author :{
      avatar: 'img/avatars/user{{0' + getRandomIntInclusive(0, 8, 0) + '}}.png',
    },
    offer :{
      title: getRandomArrayElement(HOUSE_TITLES),
      address: '{{location.' +
                getRandomIntInclusive(0,100,0) +
                '}}, {{location.' +
                getRandomIntInclusive(0,100,0) +
                '}}',
      price: getRandomIntInclusive(0, 1000000, 0),
      type: getRandomArrayElement(HOUSE_TYPES),
      rooms: getRandomIntInclusive(0,10,0),
      guests: getRandomIntInclusive(0, 100,0),
      checkin: getRandomArrayElement(CHECKIN_TIMES),
      checkout: getRandomArrayElement(CHECKOUT_TIMES),
      features: getRandomLengthArray(ROOM_FEATURES),
      description: getRandomArrayElement(HOUSE_DESCRIPTION),
      photos: getRandomLengthArray(HOUSE_PHOTOS),
    },

    location :{
      x: getRandomIntInclusive(35.65, 35.70, 5),
      y: getRandomIntInclusive(13.970, 13.980, 5),
    },
  }
}

// создаем массив готовых объектов
const mainObjectList = new Array(SIMILAR_OBJECT_COUNT).fill(null).map(() => createAd());
mainObjectList();
