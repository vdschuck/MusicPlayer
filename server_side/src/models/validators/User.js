const validator = require('validator');

module.exports = {
  validateUser(user) {
    if (!user || user.active == false) {
      throw new NotFoundError(Constants.EXCEPTIONS.USER_NOT_FOUND);
    }
  },
  validateUserAdmin(user) {
    if (user.role !== 'admin') {
      throw new UnauthorizedError(Constants.EXCEPTIONS.ACCESS_DENIED);
    }
  },
  validatePasswordMatch(isPasswordMatch) {
    if (!isPasswordMatch) {
      throw new UnauthorizedError(Constants.EXCEPTIONS.LOGIN_FAILED);
    }
  },
  validatePasswordLength(password) {
    if (password && (password.length < 6 || password.length > 30)) {
      throw new PersistenceError('InvalidPasswordLength')
    }
  },
  validateEmail(email) {
    if (!validator.isEmail(email)) {
      throw new PersistenceError('InvalidEmailAddress')
    }
  },
  validateDefaultCharacterLength(size, field) {
    if (field && field.length > size) {
      throw new PersistenceError('InvalidFieldLength')
    }
  }
};