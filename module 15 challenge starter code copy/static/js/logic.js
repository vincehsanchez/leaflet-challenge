function init(){
const eqData = 
"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
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
    //so we need to get each feature first...
        eqFeatures.forEach(feature => {
        const eqCoordinates = feature.geometry.coordinates;
        const eqMagnitude = feature.properties.mag;
        console.log(eqCoordinates);//works!
        console.log(eqMagnitude);
        const [eqLoggy, eqLatty] = feature.geometry.coordinates;
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        //^array destructering^^
        console.log(`Longitude:${eqLoggy}, Latitude:${eqLatty}`);//gotta use backticks!!!
        console.log(`Magnitude: ${eqMagnitude}`);//works!!
        });//for eqFeatures.forEach to get coordinates
    });//for d3.son(eqData)
};//for init
init();