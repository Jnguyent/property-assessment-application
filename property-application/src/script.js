function initMap() {
    // The location of UTD
    const utd = { lat: 32.985762, lng: -96.750099 };
    const frisco = {lat: 33.1013, lng: -96.6796};

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: utd,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: utd,
        map: map,
    });
    const secMarker = new google.maps.Marker({
        position: frisco,
        map: map,
    })
}

window.initMap = initMap;