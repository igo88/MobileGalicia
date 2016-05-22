var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var NavigationActions = require('../actions/NavigationActions');
var NavBar = require('./NavBar');

var {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
  } = React;

var HistoryBuyer = React.createClass({
  getInitialState: function() {
    return  {

    }
  },

componentDidMount:function(){

},
render: function() {
  return(
    <View>
      <NavBar title={'Historial'} />
    </View>
  );
  },
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#003265',
    flex: 1,
  },
});

module.exports = HistoryBuyer;
