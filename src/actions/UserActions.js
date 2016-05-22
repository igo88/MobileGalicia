var Dispatcher = require('../dispatcher/Dispatcher');
var AppConstants = require('../constants/AppConstants');
var UserConstants = require('../constants/UserConstants');

var UserActions = {
  addTransaction: function(item) {
    Dispatcher.handleViewAction({
      actionType: UserConstants.ADD_TRANSACTION,
      payload: item
    });
  },
};

module.exports = UserActions;
