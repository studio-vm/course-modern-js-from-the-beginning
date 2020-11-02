//^ Storage Controller IFFE |||||START||||||||||||||||||||||||||||||||||||||
const StorageCtrl = (function () {

  //* Public methods--------------------------------------------------------
  return {
    //Store Item in LS
    storeItem: function (item) {
      let items;
      //Check if any items in LS
      if (localStorage.getItem('items') === null) {
        items = [];
        //Push new item
        items.push(item);
        //Set LS
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        //Get what is already in LS
        items = JSON.parse(localStorage.getItem('items'));
        //Push new item
        items.push(item);
        //Re set LS
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    //Get Items from LS
    getItemsFromStorage: function () {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemStorage: function (updatedItem) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if (updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteItemFromStorage: function (id) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if (id === item.id) {
          items.splice(index, 1);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    clearItemsFromStorage: function () {
      localStorage.removeItem('items');
    }
  };
})();
