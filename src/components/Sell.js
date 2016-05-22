var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');
var Button = require('react-native-button');
var TransactionList = require('./TransactionList');
var UserStore = require('../stores/UserStore');

var {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
  AlertIOS
} = React;



var deviceWidth = Dimensions.get('window').width;
var Sell = React.createClass({
getInitialState: function(){
  return({
      transactions: UserStore.getPurchases()
  });
},
componentDidMount:function(){
  UserStore.addChangeListener(this._onUserStoreChange);
},
componenteWillUnmount:function(){
  UserStore.removeChangeListener(this._onUserStoreChange);
},
_onUserStoreChange:function(){
  this.setState({
    transactions: UserStore.getPurchases()
  });
},
_onPressButton: function(){
  NavigationActions.navigate({route: RouteConstants.SELL_GENERATE});
},

_onPressButtonProfile:function()
{
    NavigationActions.navigate({route: RouteConstants.PROFILE_SELLER});
},
_onPressButtonHistory:function()
{
    NavigationActions.navigate({route: RouteConstants.HISTORY_SELLER});
},

render: function() {
    return (
      <View style={styles.layout}>
        <Text>Pay</Text>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={this._onPressButton}>
            Generate!
        </Button>
        <TransactionList transactions={this.state.transactions} mode={'seller'} />
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

module.exports = Sell;
