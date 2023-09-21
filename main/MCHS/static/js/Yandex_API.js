

function init(){
    let map = new ymaps.Map('main-map', {
        center: [56.247537787254075,93.53336200913668],
        zoom: 13
    })
    let placemark = new ymaps.Placemark([56.247537787254075,93.53336200913668],{},{
        draggable: true
    });

    map.geoObjects.add(placemark);
    map.events.add('click', function(e){
        let coords = e.get('coords');
        console.log(coords)

    })

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl'); 
    map.controls.remove('rulerControl');
    map.controls.remove('fullscreenControl');
}   
ymaps.ready(init)  