var React = require('react-native');

var {
  Text,
  View,
  StyleSheet
  } = React;

var Home = React.createClass({
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

module.exports = Home;
