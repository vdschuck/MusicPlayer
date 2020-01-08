class PersistenceError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'UnauthorizedError';
    this.code = 666;
  }
}
module.exports = PersistenceError;