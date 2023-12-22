fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  // The browser fetches the resource from the remote server without first looking in the cache.
  // The browser will then update the cache with the downloaded resource.
  headers: {
    'x-Api-key': 'adsfadfasdflkaj 3q40t870- 3q4ty7043'
  },
  cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
