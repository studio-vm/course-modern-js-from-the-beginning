//^ Item Controller IFFE |||||||||START||||||||||||||||||||||||||||||||||||||
const ItemCtrl = (function () {
  //* Private Variables
  // Item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  //! Data Structure (State)
  const dataState = {
    // items: [
    //   // { id: 0, name: 'Steak Dinner', calories: 1200 },
    //   // { id: 1, name: 'Cookie', calories: 400 },
    //   // { id: 2, name: 'Eggs', calories: 300 },
    // ],
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }
  //* Public methods--------------------------------------------------------
  return {
    getItems: function () {
      return dataState.items;
    },
    addItem: function (name, calories) {
      // console.log(name, calories);
      // Create ID
      let ID = 0;
      if (dataState.items.length > 0) {
        ID = dataState.items[dataState.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      // Calories to number
      calories = parseInt(calories);
      // Create new item
      newItem = new Item(ID, name, calories);
      // Add to items array
      dataState.items.push(newItem);
      return newItem;
    },
    getItemById: function (id) {
      let found = null;
      //Loop through items
      dataState.items.forEach(item => {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    updateItem: function (name, calories) {
      //Calories to number
      calories = parseInt(calories);
      let found = null;
      dataState.items.forEach(function (item) {
        if (item.id === dataState.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function (id) {
      //Get Ids
      const ids = dataState.items.map(function (item) {
        return item.id;
      });
      //Get index
      const index = ids.indexOf(id);
      //Remove item
      dataState.items.splice(index, 1);
    },
    clearAllItems: function () {
      dataState.items = [];
    },
    setCurrentItem: function (item) {
      dataState.currentItem = item;
    },
    getCurrentItem: function () {
      return dataState.currentItem;
    },
    getTotalCalories: function () {
      let total = 0;
      dataState.items.forEach(item => total += item.calories);
      // Set total calories in data structure;
      dataState.totalCalories = total;

      // Return total
      return dataState.totalCalories;
    },
    logData: function () {
      return dataState;
    }
  }

})();
