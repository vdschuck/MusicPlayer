module.exports = {
  generateRandomString() {
    let newStringLength = Constants.PASSWORD_LENGTH;
    let characters = Constants.PASSWORD_CHARACTERS;
    let result = '';
    let charactersLength = characters.length;
    for (var i = 0; i < newStringLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}