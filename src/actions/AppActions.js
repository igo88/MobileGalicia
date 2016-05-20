var Dispatcher = require('../dispatcher/Dispatcher');
var NavigationConstants = require('../constants/AppConstants');

var AppActions = {
  appStart: function() {
    Dispatcher.handleViewAction({
      actionType: AppConstants.APP_START
    });
  },
};

module.exports = AppActions;
