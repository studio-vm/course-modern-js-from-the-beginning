//^ App Controller IFFE ||||START||||||||||||||||||||||||||||||||||||||||||||

const App = (function (ItemCtrl, UICtrl, StorageCtrl) {
  //* Load event listeners
  const loadEventListeners = function () {
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors();
    // Add Item Event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    // Disable submit on enter
    document.addEventListener('keypress', function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });
    // Edit Icon Click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
    // Update Item Event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
    // Back Button Event
    document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);
    // Delete Item Event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
    // Clear Item Event
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
  }

  //* Add Item Submit
  const itemAddSubmit = function (e) {
    // console.log('add');
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if (input.name !== '' && input.calories !== '') {
      // console.log(123);
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to UI List
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Add total calories to UI;
      UICtrl.showTotalCalories(totalCalories);

      //Store in local storage 
      StorageCtrl.storeItem(newItem)

      // Clear input fields
      UICtrl.clearInput();
    }
    // console.log(input);
    e.preventDefault();
  };

  //* Item Edit Click
  const itemEditClick = function (e) {
    // console.log(123);
    if (e.target.classList.contains('edit-item')) {
      //Get list number id (item-0, item-1)
      const listId = e.target.parentNode.parentNode.id;
      //Break into an array
      const listIdArr = listId.split('-');
      //Get actual id 
      const id = parseInt(listIdArr[1]);
      //Get item
      const itemToEdit = ItemCtrl.getItemById(id);
      console.log(itemToEdit);
      console.log(ItemCtrl.getItems());
      // console.log(id);
      // console.log(listIdArr);
      // console.log(listId);
      // console.log('edit item');
      ItemCtrl.setCurrentItem(itemToEdit);
      // Add item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  };

  //* Update Item Submit
  const itemUpdateSubmit = function (e) {
    e.preventDefault();

    // console.log(123);
    // Get item input
    const input = UICtrl.getItemInput();

    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    // Update UI
    UICtrl.updateListItem(updatedItem);

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Add total calories to UI;
    UICtrl.showTotalCalories(totalCalories);

    // Update Local Storage

    StorageCtrl.updateItemStorage(updatedItem);

    UICtrl.clearEditState();

  }
  //* Delete Button Event
  const itemDeleteSubmit = function (e) {
    //Get current item
    const currentItem = ItemCtrl.getCurrentItem();

    //Delete from data structure
    ItemCtrl.deleteItem(currentItem.id);

    // Delete from UI
    UICtrl.deleteListItem(currentItem.id);

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Add total calories to UI;
    UICtrl.showTotalCalories(totalCalories);

    //Delete from LS
    StorageCtrl.deleteItemFromStorage(currentItem.id);

    UICtrl.clearEditState();

    e.preventDefault();
    // console.log(1233);
  }

  //* Clear all items event
  const clearAllItemsClick = function () {
    // Delete all items from data structure
    ItemCtrl.clearAllItems();

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Add total calories to UI;
    UICtrl.showTotalCalories(totalCalories);

    //Remove from UI
    UICtrl.removeItems();

    //Clear from LS
    StorageCtrl.clearItemsFromStorage();

    //Hide ul
    UICtrl.hideList();
  }

  //* Public methods--------------------------------------------------------
  return {

    init: function () {
      console.log('init app..');
      // Clear edit state / Set initial state
      UICtrl.clearEditState();

      // Fetch Items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items 
      if (items.length === 0) {
        UICtrl.hideList();
      } else {

        // Populate list with items
        UICtrl.populateItemList(items);
        // console.log(items);
      }
      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Add total calories to UI;
      UICtrl.showTotalCalories(totalCalories);

      // Load Event Listeners
      loadEventListeners();

    }
  }

})(ItemCtrl, UICtrl, StorageCtrl);


//^Initialize App -----------------------------------------------------
App.init();

//todo Add per day, per week functionality