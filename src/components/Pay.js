var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');

var {
  Text,
  View,
  StyleSheet
  } = React;

var Pay = React.createClass({

componentDidMount:function(){

},
render: function() {
    return (
      <View style={styles.layout}>
        <Text>Pay</Text>
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

module.exports = Pay;