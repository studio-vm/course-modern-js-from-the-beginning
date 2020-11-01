class Storage {
   constructor() {
      this._city;
      this._city;
      this._defaultCity = 'London';
      this._defaultState = 'UK';
   }

   getLocationData() {
      if (localStorage.getItem('city') === null) {
         this._city = this._defaultCity;
      } else {
         this._city = localStorage.getItem('city');
      }
      if (localStorage.getItem('state') === null) {
         this._state = this._defaultState;
      } else {
         this._state = localStorage.getItem('state');
      }
      return {
         city: this._city,
         state: this._state
      }
   }

   setLocationData(city, state) {
      localStorage.setItem('city', city);
      localStorage.setItem('state', state);
   }
}