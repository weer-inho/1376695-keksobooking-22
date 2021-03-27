import {generateData} from './data.js';
import {renderCard} from './generate.js';

const L = window.L;
const mainForm = document.querySelector('.ad-form');
const formFieldsets = mainForm.querySelectorAll('fieldset')
const mapFilter = document.querySelector('.map__filters');
const mapFilterSelects = mapFilter.querySelectorAll('.map__filter');
const mapFilterFieldset = mapFilter.querySelector('.map__features');
const inputAddress = mainForm.querySelector('#address');

// функция включения неактивного состояния
const inactiveStateOn = () => {
  mainForm.classList.add('ad-form--disabled');
  formFieldsets.forEach(fieldset => {
    fieldset.setAttribute('disabled', '');
  })
  mapFilter.classList.add('map__filters--disabled');
  mapFilterSelects.forEach(filterElement => {
    filterElement.setAttribute('disabled', '');
  })
  mapFilterFieldset.setAttribute('disabled', '');
}

// функция включения активного состояния
const activeStateOn = () => {
  mainForm.classList.remove('ad-form--disabled');
  formFieldsets.forEach(fieldset => {
    fieldset.removeAttribute('disabled', '');
  })
  mapFilter.classList.remove('map__filters--disabled');
  mapFilterSelects.forEach(filterElement => {
    filterElement.removeAttribute('disabled', '');
  })
  mapFilterFieldset.removeAttribute('disabled', '');
}

inactiveStateOn();

const mapCenter = {
  lat: 35.68170,
  lng: 139.75388,
}

const map = L.map('map-canvas')
  .on('load', () => {
    activeStateOn();
    inputAddress.value = `${mapCenter.lat}, ${mapCenter.lng}`;
  })
  .setView({
    lat: mapCenter.lat,
    lng: mapCenter.lng,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.68170,
    lng: 139.75388,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

marker.on('move', (evt) => {
  inputAddress.value = 35.68170, 139.75388;
  inputAddress.value = `
  ${evt.target.getLatLng().lat.toFixed(5)},
  ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const points = generateData();

// по циклу насоздаём маркеров и понадобавляем их на карту
points.forEach((ads) => {
  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const lat = ads.location.x;
  const lng = ads.location.y;

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      renderCard(ads),
      {
        keepInView: true,
      },
    );
});
