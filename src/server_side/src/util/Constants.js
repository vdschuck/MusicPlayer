const Categories = require('../util/Categories');

let PASSWORD_LENGTH = 6;
let PASSWORD_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let CATEGORIES = {
  MUSIC: Categories.getMusic(),
  BOOK: Categories.getBook(),
  MOVIE: Categories.getMovie(),
  PODCAST: Categories.getPodcast(),
};
let EXCEPTIONS = {
  BAD_REQUEST: 'Bad Request',
  NOT_FOUND: 'Not Found',
  PERSISTENCE: 'Persistence',
  UNAUTHORIZED: 'Resource not authorized! Check your token session or if you are logged in.',
  ACCESS_DENIED: 'Access Denied! We have checked and you do not have access to access this resource.',
  LOGIN_FAILED: 'Login failed! Check your authentication credentials.',
  USER_NOT_FOUND: 'User Not Found! Check your e-mail or your session.'
};
let GOOD_MESSAGES = {
  EMAIL_SENT_SUCCESS: 'Email sent sucessfully!'
}

class Constants {
  static get PASSWORD_LENGTH() { return PASSWORD_LENGTH; }
  static get PASSWORD_CHARACTERS() { return PASSWORD_CHARACTERS; }
  static get CATEGORIES() { return CATEGORIES; }
  static get EXCEPTIONS() { return EXCEPTIONS; }
  static get GOOD_MESSAGES() { return GOOD_MESSAGES; }
}

module.exports = Constants;