// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: 'Equimanthorn',
  artist: 'Bathory',
  album: '"Under the Sign of the Black Mark"',
  music: 'Black Metal',
};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `My favorite song by ${music.artist} is ${music.title} off of ${music.album}.`;

console.log(songSnippet)

