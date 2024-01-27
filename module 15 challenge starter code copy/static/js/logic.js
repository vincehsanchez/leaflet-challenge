function init(){
const bbData = 
"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
    // Fetch the JSON data and console log it
    d3.json(eqData).then(function(data) {
    //lets show some stuff
    console.log(data);
    });
};