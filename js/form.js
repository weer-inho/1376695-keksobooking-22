const adFormElement = document.querySelector('.ad-form');
const inputTitle = adFormElement.querySelector('#title');

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;

const elementsForm = {
  typeElement: adFormElement.querySelector('#type'),
  priceElement: adFormElement.querySelector('#price'),
  checkinElement: adFormElement.querySelector('#timein'),
  checkoutElement: adFormElement.querySelector('#timeout'),
  roomNumber: adFormElement.querySelector('#room_number'),
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
inputTitle.addEventListener('input', () => {
  const valueLength = inputTitle.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    inputTitle.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    inputTitle.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    inputTitle.setCustomValidity('');
  }

  inputTitle.reportValidity();
});

// валидация цены за ночь
elementsForm.priceElement.addEventListener('input', () => {
  const value = elementsForm.priceElement.value;
  const maxValue = 1000000;

  if (value > maxValue) {
    elementsForm.priceElement.setCustomValidity('Значение не может быть больше 1,000,000')
  }

  elementsForm.priceElement.reportValidity();
});

// количество комнат и количество мест
const roomNumber = elementsForm.roomNumber;
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

const options = {
  100: [noGuests],
  1: [oneGuests],
  2: [twoGuests, oneGuests],
  3: [threeGuests, twoGuests, oneGuests],
};

const getOptions = function (guests) {
  for (let i = 0; i < guests.length; i++) {
    const option = document.createElement('option');
    option.value = guests[i].value;
    option.innerHTML = guests[i].text;
    guestNumber.appendChild(option);
  }
};

// зависимость количества комнат от количества мест
roomNumber.addEventListener('change', function () {
  const roomNumberValue = roomNumber.value;
  guestNumber.value = (roomNumberValue === '100') ? '0' : roomNumberValue;

  while (guestNumber.firstChild) {
    guestNumber.removeChild(guestNumber.firstChild);
  }

  getOptions(options[roomNumberValue]);
});
