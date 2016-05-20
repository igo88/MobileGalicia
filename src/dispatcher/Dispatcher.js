var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var Queue = require('sync-queue');

var queue = new Queue();
var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    action.source = 'VIEW_ACTION';
    queue.place(() => {
      this.dispatch(action);
      queue.next();
    });
  },

  handleServerAction: function(action) {
    action.source = 'SERVER_ACTION';
    queue.place(() => {
      this.dispatch(action);
      queue.next();
    });
  }
});

module.exports = AppDispatcher;
