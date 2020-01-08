class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'NotFoundError';
    this.code = 404;
  }
}
module.exports = NotFoundError;