var mymap = L.map('mapid').setView([-6.873629, -79.868557], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
L.marker([
    -6.877750, -79.871572
]).addTo(mymap);
L.marker([
    -6.877925, -79.868124
]).addTo(mymap);
L.marker([
    -6.874123, -79.870295
]).addTo(mymap);