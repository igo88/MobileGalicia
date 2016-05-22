var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var NavigationActions = require('../actions/NavigationActions');

var {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
  } = React;

var HistorySeller = React.createClass({
getInitialState: function() {
  return  {

  }
},

componentDidMount:function(){

},
render: function() {
    return(<Text>Historial Vendedor</Text>);
  },
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#003265',
    flex: 1,
  },
});

module.exports = HistorySeller;
