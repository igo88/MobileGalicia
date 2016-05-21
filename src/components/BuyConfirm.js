var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');

var {
  Alert,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
  } = React;

var BuyConfirm = React.createClass({
render: function() {
    return (
      <View style={styles.layout}>
      <Text>Confirmas la compra de: {this.props.name}</Text>
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

module.exports = BuyConfirm;
