module.exports = {
  validateMovimentation(movimentation) {
    if (!movimentation) {
      throw new Error('MovimentationNotFound');
    }
  },
  validateBuyer(buyer) {
    if (!buyer) {
      throw new Error('BuyerNotFound');
    }
  },
  validateSeller(seller) {
    if (!seller) {
      throw new Error('SellerNotFound');
    }
  },
  validateAmount(value) {
    if (value <= 0) {
      throw new Error('UnexistenceAmount');
    }
  },
  validateFunds(currentAmount, value) {
    if (currentAmount < value)
      throw new Error('InsufficientFundsException');
  }
}