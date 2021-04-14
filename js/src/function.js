/********************************FUNCTIONS*************************************/
/* IMPORT */
import { findCity, changeDom } from "./option.js"
import { air_key, mymap } from "./map.js";

// CONST, VAR
 let latlon;

// EVENTS
 document.querySelector(".findMe").addEventListener("click", currentPosition);
 document.querySelector(".searchCity").addEventListener("click", searchCity);


// SEARCH AIR QUALITY BY INPUT CITY NAME
function searchCity(event) {
  event.preventDefault();
  latlon = findCity.value;

  fetch("https://api.waqi.info/feed/" + latlon + "/?token=" + air_key)
  .then((result) => result.json())
  .then((info) => {
    changeDom(info);
    console.log(info);

    mymap.setView({
      lat: _.get(info, "data.city.geo[0]", "45.4642"),
      lng: _.get(info, "data.city.geo[1]", "9.19"),
    },
    11
  );
})
.catch( error => {
  console.error(error);
});
};


// AIR QUALITY IN CURRENT POSITION
function currentPosition(event) {
  if('geolocation' in navigator) {                                              //CONSTATIAMO SE LA GEOLOCALIZZAZIONE DEL DISPOSITIVO è ATTIVA
  console.log('Geolocation available');
  event.preventDefault();

  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    latlon  = `geo:${position.coords.latitude};${position.coords.longitude}`;
    console.log(latlon);
    mymap.setView({
      lat: `${position.coords.latitude}`,
      lng: `${position.coords.longitude}`
    },
    12
  );

  fetch("https://api.waqi.info/feed/" + latlon + "/?token=" + air_key)
  .then((result) => result.json())
  .then((info) => changeDom(info))
  .catch( error => {
    console.error(error);
  });
});
} else {
  console.log('Geolocation not available');
}
};

 
