const UserService = require('../services/UserService');
const BaseController = require('./BaseController')(UserService);
const StringHelper = require('../util/StringHelper');


BaseController.me = async function (req, res) {
  try {
    res.json(req.user);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.signUp = async function (req, res) {
  try {
    let payload = req.body;
    let data = await UserService.insert(payload);
    let token = await UserService.generateAuthToken(data);

    return res.json({ data, token });
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.login = async function (req, res) {
  try {
    let user = await UserService.findByCredentials(req.body.email, req.body.password);
    if (!user) {
      Thrower.redirect(res, e);
      throw new UnauthorizedError(Constants.EXCEPTIONS.LOGIN_FAILED);
    }

    let token = await UserService.generateAuthToken(user);
    res.json({ user, token });
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.logout = async function (req, res) {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.logoutAll = async function (req, res) {
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    res.send();
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.recoverPassword = async function (req, res) {
  try {
    let newPassword = StringHelper.generateRandomString();
    let data = await UserService.recoverPassword(req.body.email, newPassword);
    let newReq = await revogeSessionAfterRecovery(req);
    BaseController.logoutAll(newReq, res);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.remove = async function (req, res) {
  try {
    let currentUser = req.user;
    let userId = req.params.id;
    let data = await Service.remove(userId, currentUser);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

async function revogeSessionAfterRecovery(req) {
  let user = await UserService.getBy({ email: req.body.email });
  req.user = user;
  return req;
}

module.exports = BaseController;