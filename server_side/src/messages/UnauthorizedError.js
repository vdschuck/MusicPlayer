class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'UnauthorizedError';
    this.code = 401;
  }
}
module.exports = UnauthorizedError;