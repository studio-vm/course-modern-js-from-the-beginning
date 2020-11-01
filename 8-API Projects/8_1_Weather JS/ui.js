class UI {
   constructor() {
      this._locationEl = document.getElementById('w-location');
      this._descriptionEl = document.getElementById('w-desc');
      this._tempEl = document.getElementById('w-temp');
      this._iconEl = document.getElementById('w-icon');
      this._humidityEl = document.getElementById('w-humidity');
      this._pressureEl = document.getElementById('w-pressure');
      this._feelsLikeEl = document.getElementById('w-feels-like');
      this._windEl = document.getElementById('w-wind');
   }
   paint(weather) {
      // console.log(weather);
      console.log("http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png");
      this._locationEl.textContent = `${weather.name}, ${weather.sys.country}`;
      this._descriptionEl.textContent = weather.weather[0].description;
      this._tempEl.textContent = parseInt(weather.main.temp) +" C";
      this._iconEl.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);

      this._humidityEl.textContent = `Relative Humidity: ${weather.main.humidity} %`;
      this._feelsLikeEl.textContent = `Feels like: ${weather.main.feels_like} C`;
      this._pressureEl.textContent = `Pressure: ${weather.main.pressure} hPa`;
      this._windEl.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
   }
}