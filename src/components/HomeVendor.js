var React = require('react-native');

var {
  Text,
  View,
  StyleSheet
  } = React;

var HomeVendor = React.createClass({
  render: function() {
    return (
      <View style={styles.layout}>
        <Text>Hola</Text>
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

module.exports = HomeVendor;
