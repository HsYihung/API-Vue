function doFirst(){
    navigator.geolocation.getCurrentPosition(succCallback);
}
function succCallback(e){
    // let lati = e.coords.latitude;
    // let longi = e.coords.longitude;
    // let accuracy = e.coords.accuracy;

    //tibame
    let lati = 24.9575124;
    let longi = 121.2252228;

    let area = document.getElementById('map');
    let position = new google.maps.LatLng(lati,longi);
    let options = {
        zoom: 14,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    
    map = new google.maps.Map(area,options);

    let marker = new google.maps.Marker({
        map,
        position,      
    });
    marker.setTitle('目前位置');
    marker.setIcon('./logo/home.png');

}
function showInfo(shop) {
    switch(shop.id){
        case 'starbucks':
            getCoords(starbucks,'starbucks','Starbucks');
            break;
        case 'seven':
            getCoords(seven,'seven','7-Eleven');
            break;
        case 'family':
            getCoords(family,'family','Family Mart');
            break;
        case 'mcdonalds':
            getCoords(mcdonalds,'mcdonalds','Mcdonalds');
            break;
        default: 
            break;
    }
    
}
let markers = [];
function  getCoords(coords,shopName,title) {
    // alert(shopName)
    let j = 0;
    for(let key in markers){  //use markers[key]
        markers[key].setVisible(false);
    }

    for(let i = 0; i < coords.length; i++){
        let lati = coords[i].split(',')[0];   //緯度
        let longi = coords[i].split(',')[1];  //經度
        // console.log(`${lati} | ${longi}`);

        let position = new google.maps.LatLng(lati,longi);
        let marker = new google.maps.Marker({
            map,
            position,      
        });
        marker.setTitle(title);
        marker.setIcon(`./logo/${shopName}.png`);

        markers[j] = marker;
        j++;
    }
}
window.addEventListener('load',doFirst);

// 緯度: 24.9575124
// 經度: 121.22522280000001
// 準確度: 140 公尺
