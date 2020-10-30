//! Book Constructor
function Book(title, author, isbn) {
   this._title = title;
   this._author = author;
   this._isbn = isbn;
}

//! UI Constructor
function UI() { }
//! UI add book to UI
UI.prototype.addBookToList = function (book) {
   const listEl = document.getElementById('book-list');
   //! Create tr element
   const rowEl = document.createElement('tr');
   //! Insert cols
   rowEl.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
   `
   //! apend cols to
   console.log(rowEl);
}

//! Event Listeners

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

   //! Add book to list
   ui.addBookToList(book);

   e.preventDefault();
})