class OkMessage extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'OkMessage';
    this.code = 200;
  }
}
module.exports = OkMessage;