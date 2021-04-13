/************************************MAP***************************************/

     let air_key = process.env.AIR_KEY;
     let map_key = process.env.MAP_KEY;

// MAP CREATION
const mymap = L.map('map').setView([50, 13], 4);

const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: map_key,
}).addTo(mymap);

// AIR INFORMATION
const waqiLayer = L.tileLayer(
  'https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token={accessToken}', {
    attribution:'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>',
    accessToken: air_key,
  }
);
mymap.addLayer(tiles).addLayer(waqiLayer);


// EXPORT
export { air_key, mymap };
