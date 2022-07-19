function doFirst() {
    let area = document.getElementById('map');
    let position = new google.maps.LatLng(22.625108, 120.3067803);
    let options = {
        zoom: 14,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let map = new google.maps.Map(area, options);


    let marker = new google.maps.Marker(
        {
            position,    //position: position,
            map,          //map: map
            title: position.toString(),
            icon: '',
            title: '',
        }
    )
}


window.addEventListener('load', doFirst);