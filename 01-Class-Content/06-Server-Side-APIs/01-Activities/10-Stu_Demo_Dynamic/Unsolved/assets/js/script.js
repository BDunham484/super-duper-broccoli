var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      data.map(x => {
        let itemEl = document.createElement('h3');
        let urlEl = document.createElement('p');
        userContainer.appendChild(itemEl);
        userContainer.appendChild(urlEl);
        itemEl.textContent = x.login
        urlEl.textContent = x.url
      })
    });
}
fetchButton.addEventListener('click', getApi);
