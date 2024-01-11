const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  it('Should throw an error when author is less than 2 chars long', () => {

    const bp = () => new BlogPost('E');
    const err = new Error('Author must be at least 2 characters long.');

    expect(bp).toThrowError(err);
  })
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
  it('Should throw an error when the authorname contains characters that are not letters, numbers, dashes, or underscores', () => {
    const bp = () => new BlogPost('johndoe!');

    const err = new Error(
      'Author must only contain letters, numbers, dashes, and underscores.'
    );

    expect(bp).toThrowError(err);
  })
});
