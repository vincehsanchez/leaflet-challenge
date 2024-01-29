function init(){
    // order matters, we need to create map, and call layers.
    const eqMap = L.map("map").setView([0,0], 0);
    //^^need to .setview before, if not other operations will not wor for some reason..^^
    //https://leafletjs.com/examples/zoom-levels/
    // Define variables for our tile layers.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(eqMap);
    const eqData = 
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
    //to add the depth we would need to have a scale of six colors...
    //https://developer.mozilla.org/en-US/docs/Web/CSS/named-color
    function colorEmUp(eqDepths) {
        if (eqDepths < 10) {
            return "green";
        } else if (eqDepths < 30) {
            return "greenyellow";
        } else if (eqDepths < 50) {
            return "yellow";
        } else if (eqDepths < 70) {
            return "orange";
        } else if (eqDepths < 90) {
            return "tomato";
        } else {
            return "red";
        } 
    };//close function colorEmUp
    // Fetch the JSON data and console log it
    d3.json(eqData).then(function(data) {
        //lets show some stuff
        console.log(data);//works!
        //okay so what info do we need..
        //cooridates and magnitide, "features" has it..
        const eqFeatures = data.features;
        console.log(eqFeatures);//works!
        //lets find coordinates
        //const eqCoordinates = eqFeatures.geometry;
        //^^why no show geometry..because of the objects!^^
        //we need to group all markers to use getBounds and fitBounds
        const eqMarkers = L.featureGroup();
        //https://leafletjs.com/reference.html#featuregroup
        //so we need to get each feature first...
        eqFeatures.forEach(feature => {
            const eqCoordinates = feature.geometry.coordinates;
            const eqMagnitude = feature.properties.mag;
            console.log(eqCoordinates);//works!
            console.log(eqMagnitude);
            //since we need depth we can piggy back off here..
            const [eqLoggy, eqLatty, eqDepth] = feature.geometry.coordinates;
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
            //^array destructering^^
            console.log(`Longitude:${eqLoggy}, Latitude:${eqLatty}, Depth:${eqDepth}`);//gotta use backticks!!!
            console.log(`Magnitude: ${eqMagnitude}`);//works!!
            const eqSize = (eqMagnitude*20000);//circles did not look big enough...50k too much
            //we need markers and we have longs, lats, and mag..
            //remeber you put latty first before loggy!!
            const eqCircle = L.circle([eqLatty, eqLoggy], {
                color: colorEmUp(eqDepth),//now we use colorEmUp
                fillOpacity: 0.1,//1.0 was too dark...
                radius: eqSize
                //^^eqSize not defined^^
            }).bindPopup(`Magnitude: ${eqMagnitude}`);//dont forget backticks!!
        //^^Uncaught ReferenceError: eqLatty is not defined^^
        //^^maybe we can nest this in forEach function^^
        //^^works!!^^
        //we need to make it callable first
            eqMarkers.addLayer(eqCircle);
        });//for eqFeatures.forEach to get coordinates
        //lets try centering it..
        eqMarkers.addTo(eqMap);
        eqMap.fitBounds(eqMarkers.getBounds());
        //https://leafletjs.com/reference.html#map-fitbounds
        //^^why undefined?..needed featureGroup()^^
        //^^works and super handy^^
    });//for d3.son(eqData)
// Set up the legend.
const legend = L.control({ position: "bottomright" });
legend.onAdd = function(eqMap) {
    const div = L.DomUtil.create("div", "info legend");
    const depths = [0, 10, 30, 50, 70, 90];
    const colors = ["green", "greenyellow", "yellow", "orange", "tomato", "red"];
    const labels = [];
    // Title for the legend
    let legendInfo = "<h4>Earthquake Depth</h4>";
    // Create the color scale for the legend
    for (let i = 0; i < depths.length; i++) {
        labels.push(
            '<i style="background:' + colors[i] + '"></i> ' +
            depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+'));
    }
    div.innerHTML = legendInfo + "<ul>" + labels.join("") + "</ul>";
    return div;
};
// Adding the legend to the map
legend.addTo(eqMap);//so close..no color boxes..
};//for init
init();