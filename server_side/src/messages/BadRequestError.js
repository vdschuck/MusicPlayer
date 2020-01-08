class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'BadRequestError';
    this.code = 400;
  }
}
module.exports = BadRequestError;