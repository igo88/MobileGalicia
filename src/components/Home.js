var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');
var Buy = require('./Buy');
var Sell = require('./Sell');
var {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
  } = React;

var Home = React.createClass({
  getInitialState: function() {
    return  {

    }
  },

componentDidMount:function(){

},
_renderBuyer:function(){
  return(<Buy/>);
},
_renderSeller: function(){
  return(<Sell/>);
},
render: function() {
    var mode = this.props.mode;
    if(mode == 'buyer'){
      return this._renderBuyer();
    }
    else if(mode == 'seller'){
      return this._renderSeller();
    }
  },
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#003265',
    flex: 1,
  },
});

module.exports = Home;
