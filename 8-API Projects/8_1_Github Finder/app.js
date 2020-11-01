//Init gGitHub class
const github = new GitHub;
//Init UI class
const ui = new UI;

//Search Input
const searchUserInput = document.querySelector('.searchUser');

//todo change change to keyup
//Search input event listener
searchUserInput.addEventListener('keyup', (e) => {
  //GET input text
  const userTextInput = e.target.value;
  if (userTextInput !== '') {
    //make HTTP call
    github.getUser(userTextInput)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          //Show alert
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          //show profile
          ui.showProfile(data.profile);
          //show repos
          ui.showRepos(data.repos);
        }
      })
    // console.log(userTextInput);
  } else {
    //Clear profile
    ui.clearProfile();
  }
})