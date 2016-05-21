var _ = require('underscore');
var AppDispatcher = require('../dispatcher/Dispatcher');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');

var CHANGE_EVENT = 'change';
var _hasSeenAddAccount = false;

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    return this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getHasSeenAddAccount: function(){
    return _hasSeenAddAccount;
  },
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    
  }
});

module.exports = AppStore;
