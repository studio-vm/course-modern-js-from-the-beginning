//* Book Constructor
function Book(title, author, isbn) {
   this._title = title;
   this._author = author;
   this._isbn = isbn;
}

//* UI Constructor
function UI() { }
//* STORE Constructor
function Store() {

}

Store.prototype.getBooks = function () {
   let books;
   if (localStorage.getItem('books') === null) {
      books = [];
   } else {
      books = JSON.parse(localStorage.getItem('books'));
   }
   return books;
}

Store.prototype.displayBooks = function () {
   const store = new Store()
   const books = store.getBooks();

   books.forEach(book => {
      const ui = new UI;
      //Add book to UI
      ui.addBookToList(book);
   });
}

Store.prototype.addBook = function (book) {
   const store = new Store();
   const books = store.getBooks();
   books.push(book);
   localStorage.setItem('books', JSON.stringify(books));
}

Store.prototype.removeBook = function (isbn) {
   const store = new Store();
   const books = store.getBooks();
   books.forEach((book, index) => {
      if (book._isbn === isbn) {
         books.splice(index, 1);
      }
   });
   localStorage.setItem('books', JSON.stringify(books));
}

console.log(Store);

//* ADD BOOK TO LIST
UI.prototype.addBookToList = function (book) {
   const listEl = document.getElementById('book-list');
   //! Create tr element
   const rowEl = document.createElement('tr');
   //! Insert cols
   rowEl.innerHTML = `
      <td>${book._title}</td>
      <td>${book._author}</td>
      <td>${book._isbn}</td>
      <td><a href="#" class="delete">X</a></td>
   `;
   //! apend row to list
   listEl.appendChild(rowEl);
}

//* DELETE BOOK
// UI.prototype.deleteBook = function (target) {
//    if (target.className === 'delete') {
//       target.parentElement.parentElement.delete();
//    }
// }
UI.prototype.deleteBook = function (target) {
   if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
   }
}

//* Clear Fields
UI.prototype.clearFields = function () {
   document.getElementById('title').value = "";
   document.getElementById('author').value = "";
   document.getElementById('isbn').value = "";
}

// //* Show alert
UI.prototype.showAlert = function (message, className) {
   //Create Div
   const divEl = document.createElement('div');
   //Add classes
   divEl.className = `alert ${className}`;
   //Add text
   divEl.appendChild(document.createTextNode(message));
   //Get parent 
   const containerEl = document.querySelector('.container');
   const formEl = document.querySelector('#book-form');
   const tableEl = document.querySelector('#books-table')
   //Insert alert
   containerEl.insertBefore(divEl, tableEl);
   //Timeout after 3 seconds
   setTimeout(function () {
      document.querySelector('.alert').remove();
   }, 3000);
}

//* Event Listeners

let store = new Store();
document.addEventListener('DOMContentLoaded', store.displayBooks);

//^ Event listener for ADD book
document.getElementById('book-form').addEventListener('submit', function (e) {
   //! Get form values
   const titleInput = document.getElementById('title').value,
      authorInput = document.getElementById('author').value,
      isbnInput = document.getElementById('isbn').value;
   console.log('isbnInput', isbnInput);

   //! Instantiate new Book
   const book = new Book(titleInput, authorInput, isbnInput);
   console.log(book);

   //! Instantiate UI
   const ui = new UI();
   console.log(ui);
   //! Validate 
   if (titleInput === "" || authorInput === "" || isbnInput === "") {
      //! Error alert
      ui.showAlert('Please fill in all fields', 'error');
   } else {
      //! Add book to list
      ui.addBookToList(book);
      //!  Add to LS
      const store = new Store()
      store.addBook(book);
      //* this works because addbook is a static method

      ui.showAlert('Book entry added successfully', 'success')
      //! Clear fields
      ui.clearFields();
   }


   e.preventDefault();
})

//^ Event listener for DELETE book
//! use event delegation, need to target a parent
document.getElementById('book-list').addEventListener('click', function (e) {
   //! Instantiate UI
   const ui = new UI();
   //! Delete book
   ui.deleteBook(e.target);

   //! Remove from LS
   const store = new Store()
   store.removeBook(e.target.parentElement.previousElementSibling.textContent);

   //! Show message 
   ui.showAlert('Book Removed!', 'success')

   e.preventDefault();
})