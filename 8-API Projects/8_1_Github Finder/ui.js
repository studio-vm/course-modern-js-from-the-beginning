class UI {
  constructor() {
    this._profile = document.querySelector('#profile')
  }

  showProfile(user) {
    this._profile.innerHTML = `
         <div class="card card-body mb-3">
            <div class = "row">
               <div class = "col-md-3">
                  <img class="img-fluid mb-2" src="${user.avatar_url}">
                  <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
               </div>
               <div class="col-md-9">
                  <span class="badge badge-primary mb-2">Public Repos: ${user.public_repos}</span>
                  <span class="badge badge-secondary mb-2">Public Gists: ${user.public_gists}</span>
                  <span class="badge badge-success mb-2">Followers: ${user.followers}</span>
                  <span class="badge badge-info mb-2">Following: ${user.following}</span>
                  <br><br>
                  <ul class="list-group">
                     <li class="list-group-item">Company: ${user.company}</li>
                     <li class="list-group-item">Website/Blog: ${user.blog}</li>
                     <li class="list-group-item">Location: ${user.location}</li>
                     <li class="list-group-item">Member Since: ${user.created_at}</li>
                  </ul>
               </div>
            </div>
         </div>
         <h3 class="page-heading mb-3">Latest Repos</h3>
         <div id="repos">
         </div>
      `
  }

  showRepos(repos) {
    // console.log(repos);
    let output = '';
    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary mb-2">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary mb-2">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success mb-2">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `
    });

    //Output repositories
    document.querySelector('#repos').innerHTML = output;
  }

  clearProfile() {
    this._profile.innerHTML = '';
  }

  clearAlert() {
    const currentAlertEl = document.querySelector('.alert');
    if (currentAlertEl) {
      currentAlertEl.remove();
    }
  }

  showAlert(msg, classN) {
    //Clear any remaining alerts
    this.clearAlert();
    //Create Div
    const divEl = document.createElement('div');
    //Add classes
    divEl.className = classN;
    //Add text
    divEl.appendChild(document.createTextNode(msg));
    //Get parent 
    const containerEl = document.querySelector('.searchContainer');
    //Get search box
    const searchEl = document.querySelector('.search');
    //Insert alert
    containerEl.insertBefore(divEl, searchEl);
    //Timeout after 2 seconds
    setTimeout(() => {
      this.clearAlert()
    },2000)
  }
}