var _ = require('underscore');
var AppDispatcher = require('../dispatcher/Dispatcher');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var UserConstants = require('../constants/UserConstants');

var CHANGE_EVENT = 'change';
var _accounts = {};
var _purchases = [{title:'Almacen', price: 500.00}, {title: 'Restaurant', price: 300.00}];
var _sales = {};
var _profile = {};

var UserStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    return this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getProfile: function(){
    return _profile;
  },
  getAccounts: function(){
      return _accounts;
  },
  getPurchases: function(){
    return _purchases;
  },
  getSales: function(){
    return _sales;
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case UserConstants.ADD_TRANSACTION:
    _purchases.push(action.payload);
    UserStore.emitChange();
    break;
  }
});

module.exports = UserStore;
