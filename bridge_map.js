let metroAreasCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9

// create the map
let map = L.map('bridge-map').setView(metroAreasCenterCoordinates, zoomLevel)


//add title layer - roads, streets etc.
L.tileLayer('https://{s}tile.openstreetmap.org{z}/{x}/{y}.png',{
    attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
    maxZoom: 18
}).addTo(map)

// class notes start here
let bridges = [
    {
        "name": 'Verrazono-Narrows',
        "location":[40.6066,-74.0447],
        "span": 1298.4,
        "span_text": "1,298.4m",
        "city": "New York",
    },
    {
        "name": 'Golden Gate Bridge',
        "location":[37.8199,-122.4783],
        "span": 1280.2,
        "span_text": "1,280.2m",
        "city": "San Francisco",
    },
    {
        "name": 'Mackinac Bridge',
        "location":[45.8174,-84.7278],
        "span": 1158.0,
        "span_text": "1,158.0m",
        "city": "Mackinaw and St Ignace",
    },
    {
        "name": 'George Washington Bridge',
        "location":[40.8517,-73.9527],
        "span": 1067.0,
        "span_text": "1,067.0m",
        "city": "New York and New Jersey",
    },
    {
        "name": 'Tacoma Narrows Bridge',
        "location":[47.2690, -122.5517],
        "span": 853.44,
        "span_text": "853.44m",
        "city": "Tacoma and Kitsap",
    }
]


//loop
bridges.forEach(bridges => {
    marker = L.marker(bridges.location).addTo(map)
})

//let mctcCoordinates = [44.9724, -93.2844]
//let mctcMarker = L.marker(mctcCoordinates)
//    .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>')
//    .addTo(map)





