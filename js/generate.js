// import {generateData} from './data.js';

const propertyType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
}

// const mapCanvas = document.querySelector('.map__canvas');

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderCard = (object) => {
  const testElement = cardTemplate.cloneNode(true);
  const photoListElement = testElement.querySelector('.popup__photos');

  const renderPhotos = (width, height) => {
    photoListElement.textContent = '';
    object.offer.photos.forEach((item, i) => {
      let photo = document.createElement('img');
      photo.src = object.offer.photos[i];
      photo.classList.add('popup__photo');
      photo.style.width = `${width}px`;
      photo.style.height = `${height}px`;
      photo.alt = 'Фотография жилья';
      photoListElement.appendChild(photo);
    })
  }

  testElement.querySelector('.popup__title').textContent = object.offer.title;
  testElement.querySelector('.popup__text--address').textContent = object.offer.address;
  testElement.querySelector('.popup__text--price').textContent = object.offer.price + ' ₽/ночь';
  testElement.querySelector('.popup__type').textContent = propertyType[object.offer.type];
  testElement.querySelector('.popup__text--capacity').textContent = object.offer.rooms + ' комнат для ' + object.offer.guests + ' гостей';
  testElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + object.offer.checkin + ' , выезд до ' + object.offer.checkout;
  testElement.querySelector('.popup__features').textContent = object.offer.features;
  testElement.querySelector('.popup__description').textContent = object.offer.description;
  testElement.querySelector('.popup__avatar').src = object.author.avatar;

  if (object.offer.photos.length > 0) {
    renderPhotos(70,70);
  } else {
    photoListElement.remove();
  }

  return testElement;
}

export {renderCard, propertyType};



