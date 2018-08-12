//MENU
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



$(document).ready(function(){
  $('.item-wrapper').on('mouseover', function(){
    var id = $(this).data('id')
    $('.item-wrapper').each(function(){
      if ($(this).data('id') <= id) {
        $(this).parent('.center-item').addClass('center-item--active');
      }
    })
  })

  $('.item-wrapper').on('mouseout', function(){
    $('.center-item').removeClass('center-item--active');
  })
})


ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [53.7628175707769, 87.14191849999996],
      zoom: 17,
      controls: []
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark([53.7628175707769, 87.14191849999996], {
      //hintContent: 'Собственный значок метки',
      //balloonContent: 'Это красивая метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/balun.png',
      // Размеры метки.
      //iconImageSize: [33, 45],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-35, -24]
    });

  myMap.geoObjects
    .add(myPlacemark);
});