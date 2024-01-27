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
        const eqGeometry = feature.geometry.coordinates;
        console.log(eqGeometry);//works!
        //^^second object so we will include in one go...^^
        });//for eqFeatures.forEach to get geometry
    });
};
init();