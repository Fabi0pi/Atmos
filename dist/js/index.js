 
/****************./src/function.js.js*****OPITONS*********************************/
 
 /* INITIALIZE PARTICLES PLUGIN BACKGROUND */
 window.onload= function() {
   var particles = Particles.init({
     selector: '.background',
     color: '#DA0463'
   });
 };

// VARIABLES

const dataProcess = document.querySelector(".dataProcess");                     // DATAPROCESS: THE RESULT OF THE RESEARCH
const findCity = document.querySelector(".nameCity");

// ARRAY COLORS AIR QUALITY
const colorArray = [
  "#05d48f", //green
  "#fde153", //yellow
  "#f8a858", //orange
  "#f04a73", //red
  "#b147e6", //purple
  "#7a5f66", //brown-ish
  "#797e85", //gray
];

// UPDATE INFO
function changeDom(information) {
  cleanContainer();
  generateDomElement(information);
};

// DATAPROCESS REGENERATION
function cleanContainer() {
  while (dataProcess.firstChild) {
    dataProcess.removeChild(dataProcess.lastChild);
  }
};

// CREATE ELEMENTS
function generateDomElement(information) {
  // ELEMENT
  const city = document.createElement("h1");
  const aqi = document.createElement("p");
  const feedback = document.createElement("p");

  // ELEMENT CLASSES
  city.classList.add("findCity");
  aqi.classList.add("aqi");
  feedback.classList.add("feedback");

  const aqiValue = _.get(information, "data.aqi", "-");
  city.textContent = _.get(information, "data.city.name", "No data available for this city, please search again!");
  aqi.textContent = `AQI: ${aqiValue}`;

  // INFO DISPLAY
  dataProcess.appendChild(city);
  dataProcess.appendChild(aqi);
  dataProcess.appendChild(feedback);

  // CALL TYPESAIR FUNCTION
  typesAirQuality(aqiValue, aqi, feedback);
};

//MANAGE THE DIFFERENT AIR QUALITY VALUES
function typesAirQuality(aqiValue, aqi, feedback) {
  if (aqiValue <= 50) {
    aqi.style.background = colorArray[0];
    feedback.innerHTML =
    "Air quality is considered satisfactory, and air pollution poses little or no risk";
  } else if (aqiValue <= 100) {
    aqi.style.background = colorArray[1];
    feedback.innerHTML =
    "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
  } else if (aqiValue <= 150) {
    aqi.style.background = colorArray[2];
    feedback.innerHTML =
    "Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
  } else if (aqiValue <= 200) {
    aqi.style.background = colorArray[3];
    feedback.innerHTML =
    "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects";
  } else if (aqiValue <= 300) {
    aqi.style.background = colorArray[4];
    feedback.innerHTML =
    "Health warnings of emergency conditions. The entire population is more likely to be affected.";
  } else if (aqiValue > 300) {
    aqi.style.background = colorArray[5];
    feedback.innerHTML =
    "Health alert: everyone may experience more serious health effects.";
  } else {
    aqi.style.background = colorArray[6];
    result.innerHTML = "No data available";
    feedback.innerHTML =
    "No data available for this city, please search again!";
  }
};


// EXPORTS
export { dataProcess, findCity, changeDom, cleanContainer };