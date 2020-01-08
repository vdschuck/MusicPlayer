const MovimentationService = require('../services/MovimentationService');
const BaseController = require('./BaseController')(MovimentationService);

BaseController.getAllByAccount = async function (req, res) {
  try {
    let movimentationDTO = {
      fromDate: req.query.fromDate,
      toDate: req.query.toDate,
      seller: req.query.seller,
      buyer: req.query.buyer,
      account: req.params.id
    };
    let data = await MovimentationService.getAllByAccount(movimentationDTO);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.generateReceipt = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await MovimentationService.generateReceipt(id);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.getAllBySeller = async function (req, res) {
  try {
    let id = req.params.id;
    let data = await MovimentationService.getAllBySeller(id);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.getSalesValue = async function (req, res) {
  try {
    let data = await MovimentationService.getSalesValue(req.user);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

BaseController.getSalesDetails = async function (req, res) {
  try {
    let fromDate = req.query.fromDate;
    let toDate = req.query.toDate;
    let data = await MovimentationService.getSalesDetails(fromDate, toDate, req.user);

    return res.json(data);
  } catch (e) {
    Thrower.redirect(res, e);
  }
};

module.exports = BaseController;