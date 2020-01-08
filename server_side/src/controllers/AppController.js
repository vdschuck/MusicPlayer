module.exports = {
  root(req, res) {
    let availableAPIs = [
      '/university',
      '/user',
      '/account',
      '/movimentation',
      '/media',
      '/favorite'
    ];

    res.json(availableAPIs);
  }
}