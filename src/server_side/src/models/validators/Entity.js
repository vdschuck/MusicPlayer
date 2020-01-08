module.exports = {
  validateDefaultCharacterLength(size, field) {
    if (field && field.length > size) {
      throw new PersistenceError('InvalidFieldLength')
    }
  }
}