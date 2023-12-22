var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.
  if (!response.ok) {
    console.error(response.status)
    console.error(response.text)

    console.log('Redirecting in 4 seconds');

    setTimeout(function () {
      document.location.replace(redirectUrl)
    }, 4000)
  }
});
