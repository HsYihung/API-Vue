function doFirst() {
    // 先跟 HTML 畫面產生關聯，再建事件聆聽功能
    let area = document.getElementById('map')
    let position = new google.maps.LatLng(22.6282173,120.293041)
    let options = {
        zoom: 14,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    let map = new google.maps.Map(area, options)

    let marker = new google.maps.Marker({
        position,     // position: position,
        map,          // map: map,
        // icon: '../../images/number/dgtp.gif',
        // title: '這是哪裡?',
    })
    marker.setTitle('這是哪裡?')
    marker.setIcon('../../images/number/dgtp.gif')
}
window.addEventListener('load', doFirst)

// layers
// controls
// services

