'use strict';

var React = require('react-native');
var AppNavigator = require('./src/components/AppNavigator');
var RouteConstants = require('./src/constants/RouteConstants');
var AppActions = require('./src/actions/AppActions');

var {
  AppRegistry,
  View,
  Text,
  StyleSheet
} = React;

var MobileGalicia = React.createClass({
  componentDidMount:function(){
    AppActions.appStart();
  },

  render: function() {
      return (
        <View style={styles.margin}>
          <AppNavigator initialRoute={RouteConstants.MAP}></AppNavigator>
        </View>
      );
    }
});

var styles = StyleSheet.create({
  margin: {
    marginTop: 20,
    backgroundColor: "black",
    flex:1
  }
});


AppRegistry.registerComponent('MobileGalicia', () => MobileGalicia);
