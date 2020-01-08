const Account = require('../models/Account');
const BaseService = require('./BaseService')(Account);

BaseService.viewCredit = async function (id) {
  return await Account.findById(id).select('currentAmount');
};

BaseService.addCredit = async function (id, amount) {
  return await Account.findByIdAndUpdate(id, { $inc: { 'currentAmount': amount } }, { new: true, useFindAndModify: false });
};

BaseService.generateAccountIdForUserCreation = async function () {
  let payload = {
    currentAmount: 0
  };
  let data = await Account.create(payload);
  return data._id;
};

module.exports = BaseService;
