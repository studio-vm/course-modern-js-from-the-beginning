//todo in weather js

//init UI object;
const ui = new UI();
//Init store class
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();
//Init weather object;
const weather = new Weather(weatherLocation.city, weatherLocation.state);


// Get Weather on Dom load
document.addEventListener('DOMContentLoaded', getWeather);

//Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
   const city = document.getElementById('city').value;
   const state = document.getElementById('state').value;
   weather.changeLocation(city, state);
   //set location in local storage
   storage.setLocationData(city, state)

   //Get and display weather
   getWeather();

   //Close modal need to use Jquery
   $('#locModal').modal('hide');
});

function getWeather() {
   weather.getWeather()
      .then(results => {
         // console.log(results);
         ui.paint(results);
      })
      .catch(err => console.log(err));
}


