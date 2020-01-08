const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async function (req, res, next) {
  try {
    const authorizationHeader = req.header('Authorization');
    if (!authorizationHeader) {
      throw new UnauthorizedError(Constants.EXCEPTIONS.UNAUTHORIZED);
    }

    const token = authorizationHeader.replace('Bearer ', '');
    const data = jwt.verify(token, process.env.JWT_KEY);
    let user = await User.findOne({ _id: data._id, 'tokens.token': token });
    if (!user) {
      throw new NotFoundError(Constants.EXCEPTIONS.USER_NOT_FOUND);
    }

    req.user = user;
    req.token = token;

    next();
  } catch (e) {
    Thrower.redirect(res, e);
  }
}
module.exports = auth;