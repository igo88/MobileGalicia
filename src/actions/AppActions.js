var Dispatcher = require('../dispatcher/Dispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  appStart: function() {
    Dispatcher.handleViewAction({
      actionType: AppConstants.APP_START
    });
  },
};

module.exports = AppActions;
