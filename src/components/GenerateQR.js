var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');
var Button = require('react-native-button');

var {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput
  } = React;

var GenerateQR = React.createClass({
getInitialState:function(){
  return {
    name: '',
    price:''
  }
},
componentDidMount:function(){

},
_onPressButton:function(){
  NavigationActions.navigate({route: RouteConstants.SELL_SHOW_QR, payload:{name:this.state.name, price: this.state.price}});
},
render: function() {
    return (
      <View style={styles.layout}>
        <Text>Nombre</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}/>
        <Text>Price</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({price:text})}
          value={this.state.price}/>
          <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={this._onPressButton}>
              Generate!
          </Button>
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

module.exports = GenerateQR;
