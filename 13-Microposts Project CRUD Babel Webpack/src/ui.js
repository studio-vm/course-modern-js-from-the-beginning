class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  showPosts(posts) {
    let output = '';
    posts.forEach(post => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>

            <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i>
          </a>
          </div>
        </div>
      `;
    });
    this.post.innerHTML = output;
    // console.log(posts);
  }

  showAlert(message, className) {
    this.clearAlert();
    //! create div
    const divEl = document.createElement('div');
    //! add classes
    divEl.className = className;
    //! Add text
    divEl.appendChild(document.createTextNode(message));
    //! get parent
    const containerEl = document.querySelector('.postsContainer');
    //! get posts
    const postsEl = document.querySelector('#posts');
    //! insert alert div
    containerEl.insertBefore(divEl, postsEl)

    //timeout
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  clearIdInput() {
    this.idInput.value = '';
  }

  changeFormState(type) {
    if (type === 'edit') {
      this.postSubmit.textContent = 'Update Post'
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';
      //* create cancel button
      const buttonEl = document.createElement('button');
      buttonEl.className = 'post-cancel btn btn-light btn-block';
      buttonEl.appendChild(document.createTextNode('Cancel Edit'))
      // buttonEl.textContent = 'Cancel';
      // get parent
      const cardForm = document.querySelector('.card-form');
      //get element to insert before
      const formEnd = document.querySelector('.form-end');
      // insert cancel button
      cardForm.insertBefore(buttonEl, formEnd);
    } else {
      this.postSubmit.textContent = 'Post It'
      this.postSubmit.className = 'post-submit btn btn-primary btn-block';
      //^ remove cancel button if it's there;
      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }
      //Clear ID from hidden field
      this.clearIdInput();
      //Clear text fields
      this.clearFields();
    }
  }
}

export const ui = new UI();