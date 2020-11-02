//^ UI Controller IFFE ||||||START|||||||||||||||||||||||||||||||||||||||||||
const UICtrl = (function () {
  //* Private variables
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    clearBtn: '.clear-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }

  //* Public methods--------------------------------------------------------
  return {
    populateItemList: function (items) {
      let html = '';
      console.log(items);
      items.forEach(function (item) {
        html += `
				<li class="collection-item" id="item-${item.id}">
				<strong>${item.name}: </strong><em>${item.calories} Calories</em>
				<a href="#" class="secondary-content">
					<i class="edit-item fa fa-pencil"></i>
				</a>
				</li>
				`;
      });
      // Insert List Items
      document.querySelector(UISelectors.itemList).innerHTML = html;
      // console.log(html);
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function (item) {
      // Show the list element
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // create li element
      const liEl = document.createElement('li');
      // Add class to li
      liEl.className = 'collection-item';
      // Add id
      liEl.id = `item-${item.id}`;
      // Add html
      liEl.innerHTML = `
      <strong>${item.name}: </strong><em>${item.calories} Calories</em>
				<a href="#" class="secondary-content">
					<i class="edit-item fa fa-pencil"></i>
				</a>
      `;
      // Insert Item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', liEl);
    },
    updateListItem: function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      //Turn Nodelist into Array
      listItems = Array.from(listItems);

      listItems.forEach(function (listItem) {
        const itemID = listItem.getAttribute('id');
        console.log(itemID);

        if (itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = `
          <strong>${item.name}: </strong><em>${item.calories} Calories</em>
				<a href="#" class="secondary-content">
					<i class="edit-item fa fa-pencil"></i>
				</a>
          `;
        }
      });
    },
    deleteListItem: function (id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },
    // Clear Fields
    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    // Add item to form
    addItemToForm: function () {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    // Remove items
    removeItems: function () {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      //convert to array
      listItems = Array.from(listItems);
      listItems.forEach(item => {
        item.remove();
      })
    },
    // Hide list
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function () {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    getSelectors: function () {
      return UISelectors;
    }

  };
})();