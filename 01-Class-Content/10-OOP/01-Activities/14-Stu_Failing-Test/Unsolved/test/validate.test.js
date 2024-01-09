// TODO: Import the Validate class.
import Validate from "../validate";

// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe('Validate', () => {

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
it ('should return false when passed an empty string', () => {
    const str = '';
    const result = new Validate().isPassword(str);

    expect(result).toEqual(false);
})
})


