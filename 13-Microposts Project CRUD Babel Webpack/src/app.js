//* Import http module

import { http } from './http';
import { ui } from './ui';

//! Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

//! Listen for Add Post
document.querySelector('.post-submit').addEventListener('click', submitPost);

function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  //! validate input
  if (title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger')
  } else {
    const data = {
      title,
      body
    }
    //! check for id
    if (id === '') {
      //! Create Post
      http.post('http://localhost:3000/posts', data)
        .then(data => {
          ui.showAlert('Post Added', 'alert alert-success');
          ui.clearFields();
          getPosts();
        })
        .catch(err => console.log(err));
    } else {
      //! update the post PUT request.
      http.put(`http://localhost:3000/posts/${id}`, data)
        .then(data => {
          ui.showAlert('Post Updated', 'alert alert-success');
          ui.changeFormState('add');
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }


}

//! Listen for Delete//event propagation
document.querySelector('#posts').addEventListener('click', deletePost);

function deletePost(e) {
  // console.log(123);
  e.preventDefault();
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if (confirm('Are you sure?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert('Post Removed', 'alert alert-success');
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
}

//! Listen for Edit State
document.querySelector('#posts').addEventListener('click', enableEdit);

function enableEdit(e) {
  // console.log(e.target);
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    }

    //! fill form with current post
    ui.fillForm(data);

    // console.log(title);
    // console.log(e.target.parentElement.preventDefault);

    // console.log(body);
  }
  e.preventDefault();
}

//! listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);

function cancelEdit(e) {
  console.log(e.target.classList);
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
    e.preventDefault();
  }
}


// const greeting = 'Hello World';
// console.log(greeting);

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');

//! Common JS module syntax
// const person = require('./mymodule');

//! ES6 Modules
//^ destructuring
// import { person, sayHello } from './mymodule';
// console.log(person.age);
//^ import all *
// import * as mod from './mymodule';
// console.log(mod.person.name);
// console.log(mod.sayHello());

//^ default => no curly braces;
// import greeting from './mymodule';
// console.log(greeting);
