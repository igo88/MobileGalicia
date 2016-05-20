var Dispatcher = require('../dispatcher/Dispatcher');
var NavigationConstants = require('../constants/NavigationConstants');

var NavigationActions = {
  navigationStart: function() {
    Dispatcher.handleViewAction({
      actionType: NavigationConstants.NAVIGATION_START
    });
  },

  navigationEnd: function () {
    Dispatcher.handleViewAction({
      actionType: NavigationConstants.NAVIGATION_END
    });
  },

  navigate: function(payload) {
    Dispatcher.handleViewAction({
      actionType: NavigationConstants.NAVIGATE,
      payload: payload
    });
  },

  back: function() {
    Dispatcher.handleViewAction({
      actionType: NavigationConstants.NAVIGATE_BACK
    });
  },

  replace: function(payload) {
    Dispatcher.handleViewAction({
      actionType: NavigationConstants.REPLACE,
      payload: payload
    });
  },

  resetLast: function(payload) {
    Dispatcher.handleViewAction({
      actionType: NavigationConstants.RESET_LAST,
      payload: payload
    });
  }
};

module.exports = NavigationActions;
