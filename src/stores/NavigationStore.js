var _ = require('underscore');
var AppDispatcher = require('../dispatcher/Dispatcher');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var NavigationConstants = require('../constants/NavigationConstants');
var RouteConstants = require('../constants/RouteConstants');

var CHANGE_EVENT = 'change';
var _navigating = false;
var _routes = [];
var _action = {};

var NavigationStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    return this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getNavigating :function () {
    return _navigating;
  },
  getCurrentRoute: function() {
    return _.last(_routes);
  },
  getRoutes: function() {
    return _routes;
  },
  getCurrentAction: function() {
    return _action;
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case NavigationConstants.NAVIGATION_START:
    _navigating = true;
    NavigationStore.emitChange();
    break;

    case NavigationConstants.NAVIGATION_END:
    _navigating = false;
    NavigationStore.emitChange();
    break;

    case NavigationConstants.NAVIGATE:
    _navigating = true;
    _routes.push(action);
    _action = NavigationConstants.NAVIGATE;
    NavigationStore.emitChange();
    break;

    case NavigationConstants.NAVIGATE_BACK:
    _navigating = true;
    _routes.pop();
    _action = NavigationConstants.NAVIGATE_BACK;
    NavigationStore.emitChange();
    break;

    case NavigationConstants.REPLACE:
    _navigating = true;
    _routes.pop();
    _routes.push(action);
    _action = NavigationConstants.REPLACE;
    NavigationStore.emitChange();
    break;

    case NavigationConstants.RESET_LAST:
    _navigating = false;
    _routes.pop();
    _action = NavigationConstants.RESET_LAST;
    NavigationStore.emitChange();
    break;
  }
});

module.exports = NavigationStore;
