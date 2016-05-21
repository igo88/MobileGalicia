var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');

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
render: function() {
    return (
      <View style={styles.layout}>
        <Text>HOME</Text>
        <TouchableOpacity onPress={this._onPressButtonBuy}>
          <Text>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButtonPay}>
          <Text>Pagar</Text>
        </TouchableOpacity>
      </View>
    );
  },

  _onPressButtonBuy:function(){
    NavigationActions.navigate({route: RouteConstants.BUY});
  },
  _onPressButtonPay:function(){
    NavigationActions.navigate({route: RouteConstants.PAY});
  },
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#ff0000',
    flex: 1,
  },
});

module.exports = Home;
