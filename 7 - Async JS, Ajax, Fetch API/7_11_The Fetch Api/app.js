document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJson);
document.querySelector('#button3').addEventListener('click', getApi);

function getText() {
  fetch('test.txt')
    .then(resp => {
      return resp.text();
    })
    .then(data => {
      document.querySelector('#output').innerHTML = data;
    })
    .catch(err => {
      document.querySelector('#output').innerHTML = err;
    })
}

function getJson() {
  fetch('posts.json')
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      let output = "";
      data.forEach(post => {
        output += `
          <li>${post.title}</li>
          <li>${post.body}</li>
          <hr>
        `
      });
      document.querySelector('#output').innerHTML = output;
    })
    .catch(err => {
      document.querySelector('#output').innerHTML = err;
    })
}

function getApi() {
  fetch('https://api.github.com/users')
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      let output = "";
      data.forEach(user => {
        output += `
          <li>${user.login}</li>
          <img src="${user.avatar_url}" width="100" height="100" style=" border-radius : 50% ">
          <hr>
        `
      });
      document.querySelector('#output').innerHTML = output;
    })
    .catch(err => {
      document.querySelector('#output').innerHTML = err;
    })
}
