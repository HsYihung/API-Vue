function doFirst() {
    navigator.geolocation.getCurrentPosition(succCallback, errorCallback, {
        enableHighAccuracy: false,
        timeout: 100,
        maximumAge: 0
    });

}
function succCallback(e) {
    console.log(1);
    let lati = e.coords.latitude;
    let longi = e.coords.longitude;
    let accuracy = e.coords.accuracy;

    if (accuracy > 10000) {

    }
    else {
        document.getElementById('position').innerHTML = `緯度: ${lati}<br> 經度: ${longi}<br> 精確度:${accuracy} 公尺`
    }
}
function errorCallback(e) {
    document.getElementById('position').innerHTML = `
        錯誤碼: ${e.code}
        錯誤碼: ${e.message}
    `
}
window.addEventListener('load', doFirst);