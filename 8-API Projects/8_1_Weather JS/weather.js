class Weather {
   constructor(city, state) {
      this._apiKey = 'eef3e44ba38343b8430eb4d629cad00c';
      this._city = city;
      this._state = state;
   }
   //Fetch weather from API
   async getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this._city},${this._state}&appid=${this._apiKey}&units=metric`)

      const responseData = await response.json();

      return responseData; //todo !!!
   }

   changeLocation(city, state) {
      this._city = city;
      this._state = state;
   }
}
