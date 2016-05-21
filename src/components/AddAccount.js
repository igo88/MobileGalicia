var React = require('react-native');

var {
  Text,
  View,
  StyleSheet
  } = React;

var AddAccount = React.createClass({
  render: function() {
    return (
      <View style={styles.layout}>
        <Text>Add Account</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#ffff00',
    flex: 1,
  },
});

module.exports = AddAccount;
