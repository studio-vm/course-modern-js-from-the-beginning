class GitHub {
   constructor() {
      this._client_id = '09853fb917a728e9a38d';
      this._client_secret = 'c98831a7b3a3e0576ab4120c898c3f3bb33a4105';
      this._repos_count = 5;
      this._repos_sort = 'created:asc';
      // &sort=${this._repos_sort}
      // &sort=created:asc
      // ?per_page=100
   }

   async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this._client_id}&client_secret=${this._client_secret}`);

      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this._repos_count}&sort=${this._repos_sort}&client_id=${this._client_id}&client_secret=${this._client_secret}`);

      // const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this._repos_count}&client_id=${this._client_id}&client_secret=${this._client_secret}`);

      const profileData = await profileResponse.json();
      const reposData = await repoResponse.json();

      return {
         profile: profileData,
         repos: reposData
      }
   }



}