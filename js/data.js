import {getRandomIntInclusive, getRandomArrayElement, getRandomLengthArray} from './util.js'

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

const createAd = () => {
  const x = getRandomIntInclusive(35.65, 35.70, 5);
  const y = getRandomIntInclusive(13.970, 13.980, 5);

  return {
    author :{
      avatar: 'img/avatars/user0' + getRandomIntInclusive(0, 8, 0) + '.png',
    },
    offer :{
      title: getRandomArrayElement(HOUSE_TITLES),
      address: x + ', ' + y,
      price: getRandomIntInclusive(0, 1000000, 0),
      type: getRandomArrayElement(HOUSE_TYPES),
      rooms: getRandomIntInclusive(0,10,0),
      guests: getRandomIntInclusive(1, 100,0),
      checkin: getRandomArrayElement(CHECKIN_TIMES),
      checkout: getRandomArrayElement(CHECKOUT_TIMES),
      features: getRandomLengthArray(ROOM_FEATURES),
      description: getRandomArrayElement(HOUSE_DESCRIPTION),
      photos: getRandomLengthArray(HOUSE_PHOTOS),
    },

    location :{
      x: getRandomIntInclusive(35.44501, 35.60240, 5),
      y: getRandomIntInclusive(139.18854, 139.25500, 5),
    },
  }
}

const generateData = () => new Array(SIMILAR_OBJECT_COUNT).fill(null).map(() => createAd());

export { generateData, createAd, SIMILAR_OBJECT_COUNT };
