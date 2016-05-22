var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');

var Button = require('react-native-button');

window.navigator.userAgent = "react-native";
var io = require("../../node_modules/socket.io/node_modules/socket.io-client/socket.io");

var {
  Alert,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SliderIOS,
  } = React;

var _socket;
var coeficiente = 0.3;
var BuyConfirm = React.createClass({
getInitialState: function(){
  return {name: "",
          price:0.0,
          userPoints:1000,
          userPointsSelected:0.0,
          finalPrice:0.0,
          discount:0.0};
},

_onPressButton: function(){
  _socket = io('http://172.17.69.83:3000',{jsonp: false, transports: ['websocket']});
  _socket.emit('confirm', { confirm: true });
  Alert.alert(
  'Felicitaciones',
  'Tu pago fue correcto',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')}
  ]
);
},

componentDidMount: function(){
  var splitted = this.props.result.split('|');
  this.setState({
    name:splitted[0],
    price:parseFloat(splitted[1]),
  });
},

_updateValues: function(value){
  var calculo = value * coeficiente;
  var precioFinal = this.state.price - calculo;
  var descuentoFinal = precioFinal * 0.05;
  this.setState({userPointsSelected: value,
                finalPrice: precioFinal,
                discount: descuentoFinal
                });
},
render: function() {
    return (
      <View style={styles.layout}>
        <Text>Confirmas la compra de: {this.state.name}</Text>
        <SliderIOS step={50} minimumValue={0} maximumValue={this.state.userPoints}
        onValueChange={(value) => this._updateValues(value)} />
        <Text>Precio: {this.state.price}</Text>
        <Text>Puntos: {this.state.userPointsSelected} / {this.state.userPoints}</Text>
        <Text>Precio Final: {this.state.finalPrice}</Text>
        <Text>Ahorro: {this.state.discount}</Text>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={this._onPressButton}>
            Confirmar Pago!
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

module.exports = BuyConfirm;
