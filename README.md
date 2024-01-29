# leaflet-challenge

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. 

Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.
The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. 

Develope a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

### How do we see it?

Follow this link it shows earthquakes from the past seven days:

https://vincehsanchez.github.io/leaflet-challenge/

### Earthquake Map and General Characteristics

First task is to visualize an earthquake dataset:

1. Get your dataset:
- The USGS provides earthquake data in a number of different formats, updated every 5 minutes.
- Visit the USGS GeoJSON Feed Links to an external site. page and choose a dataset to visualize.
- **Note:** We are using past 7 days of data.

2. When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data.
3.  Use the URL of this JSON to pull in the data for the visualization.
4.  Import and visualize the data by doing the following:
5.  Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
6.  Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color.
7.  Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
**Hint:**  The depth of the earth can be found as the third coordinate for each earthquake.
8. Include popups that provide additional information about the earthquake when its associated marker is clicked.
   - Magnitude
   - Coordinates
   - Place
   - Depth
10. Create a legend that will provide context for your map data.

