
//////
function buildMakers(mapMsgs) {
    mapMsgs.forEach(e => {
        const marker = new google.maps.Marker({
            position: { lat: e.lat, lng: e.lng },
            map: map,
            title: e.title
        });
        let content = `<div><div>Name:${e.Name}</div></div>`;
        const infowindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 350
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
        google.maps.event.addListener(map, 'click', function () {
            infowindow.close();
        });
    });
}

const mapMsg = [
    {
        lat: 22.65132
        , lng: 120.30388
        , title: 'Atitle'
        , Name: 'A'
    },
    {
        lat: 22.63584
        , lng: 120.29416
        , title: 'Btitle'
        , Name: 'B'
    },
    {
        lat: 22.65271
        , lng: 120.30313
        , title: 'Ctitle'
        , Name: 'C'
    },
    {
        lat: 22.63872
        , lng: 120.29387
        , title: 'Dtitle'
        , Name: 'D'
    },
    {
        lat: 22.63996
        , lng: 120.32239
        , title: 'Etitle'
        , Name: 'E'
    }
];