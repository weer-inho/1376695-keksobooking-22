const adFormElement = document.querySelector('.ad-form');
const inputTitleElement = adFormElement.querySelector('#title');

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;

const elementsForm = {
  typeElement: adFormElement.querySelector('#type'),
  priceElement: adFormElement.querySelector('#price'),
  checkinElement: adFormElement.querySelector('#timein'),
  checkoutElement: adFormElement.querySelector('#timeout'),
  roomNumberElement: adFormElement.querySelector('#room_number'),
  capacityElement: adFormElement.querySelector('#capacity'),
}

const PRICES = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

// тип жилья
const formTypeChangeHandler = () => {
  elementsForm.priceElement.placeholder = PRICES[elementsForm.typeElement.value];
  elementsForm.priceElement.min = PRICES[elementsForm.typeElement.value];
};

function addFormTypeEventListener(){
  elementsForm.typeElement.addEventListener('change', formTypeChangeHandler);
}

addFormTypeEventListener();


//выезд до
const formTimeOutChangeHandler = () => {
  elementsForm.checkinElement.addEventListener('change', () => {
    elementsForm.checkoutElement.value = elementsForm.checkinElement.value;
  });
}

function addFormTimeOutEventListener(){
  elementsForm.checkinElement.addEventListener('change', formTimeOutChangeHandler);
}

addFormTimeOutEventListener();

// заезд после
const formTimeInChangeHandler = () => {
  elementsForm.checkoutElement.addEventListener('change', () => {
    elementsForm.checkinElement.value = elementsForm.checkoutElement.value;
  });
}

function addFormTimeInEventListener(){
  elementsForm.checkoutElement.addEventListener('change', formTimeInChangeHandler);
}

addFormTimeInEventListener();

//Валидация заголовка объявления
inputTitleElement.addEventListener('input', () => {
  const valueLength = inputTitleElement.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    inputTitleElement.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    inputTitleElement.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    inputTitleElement.setCustomValidity('');
  }

  inputTitleElement.reportValidity();
});

// валидация цены за ночь
elementsForm.priceElement.addEventListener('input', () => {
  const value = elementsForm.priceElement.value;
  const MAX_PRICE = 1000000;

  if (value > MAX_PRICE) {
    elementsForm.priceElement.setCustomValidity('Значение не может быть больше 1,000,000')
  }

  elementsForm.priceElement.reportValidity();
});

// количество комнат и количество мест
const roomNumber = elementsForm.roomNumberElement;
const guestNumber = elementsForm.capacityElement;

const noGuests = {
  value: 100,
  text: 'не для гостей',
};

const oneGuests = {
  value: 1,
  text: 'для одного гостя',
};

const twoGuests = {
  value: 2,
  text: 'для 2 гостей',
};

const threeGuests = {
  value: 3,
  text: 'для 3 гостей',
};

const ROOM_VALUE_100 = 100;
const ROOM_VALUE_1 = 1;
const ROOM_VALUE_2 = 2;
const ROOM_VALUE_3 = 3;

const options = {
  [ROOM_VALUE_100]: [noGuests],
  [ROOM_VALUE_1]: [oneGuests],
  [ROOM_VALUE_2]: [twoGuests, oneGuests],
  [ROOM_VALUE_3]: [threeGuests, twoGuests, oneGuests],
};

const getOptions = function (guests) {
  guests.forEach(guest => {
    const option = document.createElement('option');
    option.value = guest.value;
    option.innerHTML = guest.text;
    guestNumber.appendChild(option);
  })
};



// зависимость количества комнат от количества мест
roomNumber.addEventListener('change', function () {
  const roomNumberValue = Number(roomNumber.value);
  guestNumber.value = (roomNumberValue === ROOM_VALUE_100) ? '0' : roomNumberValue;

  while (guestNumber.firstChild) {
    guestNumber.removeChild(guestNumber.firstChild);
  }

  getOptions(options[roomNumberValue]);
});
