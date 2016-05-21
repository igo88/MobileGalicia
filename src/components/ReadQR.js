var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var NavigationActions = require('../actions/NavigationActions');
var QRCodeScreen = require('./QRCodeScreen');

var {
  Alert,
  Text,
  View,
  StyleSheet
  } = React;

var ReadQR = React.createClass({
componentDidMount:function(){

},

_onSucess: function(result) {
  NavigationActions.replace({route: RouteConstants.BUY_CONFIRM, payload: {result:result}});
},

render: function() {
    return (
      <View style={styles.layout}>
        <QRCodeScreen onSucess = {this._onSucess}></QRCodeScreen>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#ff0000',
    flex: 1,
  },
});

module.exports = ReadQR;
