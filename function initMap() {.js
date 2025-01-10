function initMap() {
    const myLatLng = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };
    const map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 15, // Adjust zoom as needed
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Tai Chung Restaurant",
    });
}
