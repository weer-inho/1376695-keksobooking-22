const adFormElement = document.querySelector('.ad-form');

const elementsForm = {
  typeElement: adFormElement.querySelector('#type'),
  priceElement: adFormElement.querySelector('#price'),
  checkinElement: adFormElement.querySelector('#timein'),
  checkoutElement: adFormElement.querySelector('#timeout'),
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
