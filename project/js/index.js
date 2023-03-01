ymaps.ready(init);
function init() {
  let accords;
  accords = [55.76021353169461, 37.61443149438706];

  var myMap = new ymaps.Map("map", {
    center: accords,
    zoom: 14,
    controls: []
  });

  let myPlacemark = new ymaps.Placemark(accords, {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/main/placemark.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-10, -10]
  });

  myMap.geoObjects.add(myPlacemark);
}
