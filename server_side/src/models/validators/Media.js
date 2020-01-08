module.exports = {
  validateDefaultCharacterLength(size, field) {
    if (field && field.length > size) {
      throw new PersistenceError('InvalidFieldLength')
    }
  },
  validatePrice(value) {
    if (value <= 0) {
      throw new PersistenceError('ShouldBeGreaterThanZero')
    }
  }
}