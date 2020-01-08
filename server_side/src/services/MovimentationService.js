const Movimentation = require('../models/Movimentation');
const BaseService = require('./BaseService')(Movimentation);

const AccountService = require('./AccountService');
const UserService = require('./UserService');
const UsersValidator = require('../models/validators/User');
const MovimentationValidator = require('../models/validators/Movimentation');

BaseService.getAllByAccount = async function (DTO) {
  Object.keys(DTO).forEach((key) => (!DTO[key]) && delete DTO[key]);
  let query = Object.assign({}, DTO);

  if (query['fromDate'] && query['toDate'])
    query['createdAt'] = { '$gte': query['fromDate'], '$lt': query['toDate'] }

  return await Movimentation.find(query);
};

BaseService.getAllBySeller = async function (userId) {
  let query = { 'seller': userId };

  return await Movimentation.find(query);
};

BaseService.generateReceipt = async function (id) {
  let movimentation = await Movimentation.findById(id).select(['description', 'value', 'createdAt', 'buyer', 'seller']);
  MovimentationValidator.validateMovimentation(movimentation);

  let description = movimentation.description;
  let value = movimentation.value;
  let createdAt = movimentation.createdAt;

  let buyer = await UserService.getById(movimentation.buyer);
  MovimentationValidator.validateBuyer(buyer);
  let buyerName = `${buyer.firstName} ${buyer.lastName}`;

  let seller = await UserService.getById(movimentation.seller);
  MovimentationValidator.validateSeller(seller);
  let sellerName = `${seller.firstName} ${seller.lastName}`;

  return {
    description: description,
    value: value,
    createdAt: createdAt,
    buyer: buyerName,
    seller: sellerName,
    text: description + value + buyerName + sellerName + createdAt
  };
};

BaseService.insert = async function (model) {
  let value = model.value;
  MovimentationValidator.validateAmount(value);

  let buyer = await UserService.getById(model.buyer);
  let account = await AccountService.getById(buyer.account);
  MovimentationValidator.validateFunds(account.currentAmount, value);

  let admin = await UserService.getAdminSystem();
  let seller = await UserService.getById(model.seller);

  await AccountService.addCredit(seller.account, _getSellerAmount(value));
  await AccountService.addCredit(admin.account, _getAdminAmount(value));
  await AccountService.addCredit(buyer.account, - Math.abs(value));

  return await Movimentation.create(model);
};

BaseService.getSalesValue = async function (currentUser) {
  UsersValidator.validateUserAdmin(currentUser);

  let query = [];
  let groupBy = {
    $group: {
      _id: null,
      amount: { $sum: '$value' },
      count: { $sum: 1 }
    }
  };
  query.push(groupBy);

  return await Movimentation.aggregate(query);
};

BaseService.getSalesDetails = async function (fromDate, toDate, currentUser) {
  UsersValidator.validateUserAdmin(currentUser);

  let query = [];
  if (fromDate && toDate) {
    let createdAt = {
      $match: {
        createdAt: { $gte: new Date(fromDate), $lte: new Date(toDate) }
      }
    };
    query.push(createdAt);
  }

  let groupBy = {
    $group: {
      _id: '$media',
      amount: { $sum: '$value' },
      count: { $sum: 1 }
    }
  };
  query.push(groupBy);

  return await Movimentation.aggregate(query);
};

function _getSellerAmount(value) {
  return value * 0.90;
}

function _getAdminAmount(value) {
  return value * 0.10;
}

module.exports = BaseService;