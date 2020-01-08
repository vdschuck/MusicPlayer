class Thrower {
  static redirect(res, error) {
    res.status(error & error.code ? error.code : 500).send({
      code: error & error.code ? error.code : 500,
      message: error && error.message ? error.message : 'N/A'
    });
  }
}

module.exports = Thrower;