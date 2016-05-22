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
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SliderIOS,
  Dimensions,
  } = React;

var _socket;
var coeficiente = 0.3;
var deviceWidth = Dimensions.get('window').width;
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
  _socket = io('http://172.17.69.42:3000',{jsonp: false, transports: ['websocket']});
  _socket.emit('confirm', { title: this.state.name, price: this.state.price });
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

_onPressButtonBack:function()
{
    NavigationActions.back();
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

        <View style={styles.headerBack}>
          <TouchableOpacity style={styles.footerBtn} onPress={this._onPressButtonBack}>
            <Text style={styles.backBtn}> {"‹"} Cancelar</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Pagar compra</Text>
        </View>


        <View style={styles.flexBox}>
          <Image style={styles.ticket} source={require('./img/ticket.png')}/>
          <Text style={styles.usePoints}>USAR MIS PUNTOS QUIERO!</Text>
          <SliderIOS step={50} minimumValue={0} style={styles.slider} maximumValue={this.state.userPoints}
            onValueChange={(value) => this._updateValues(value)} />
          <Text style={styles.pointsBlue}>{this.state.userPoints}pts = ${this.state.userPointsSelected} </Text>
          <Text style={styles.points}>Cuenta = ${this.state.finalPrice}</Text>
          <Text style={styles.points}>Ahorro = ${this.state.discount}</Text>
          <Button
            style={styles.mainButton}
            styleDisabled={{color: 'red'}}
            onPress={this._onPressButton}>PAGAR ${this.state.finalPrice}
          </Button>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#ffffff',
    flex: 1,
  },
  flexBox:{
    flex: 1,
    alignItems: 'center',
  },
  ticket:{
    marginTop: 30,
  },
  usePoints:{
    fontSize: 16 ,
    fontFamily: 'Helvetica Neue',
    color: '#5eb6ff'
  },
  pointsBlue:{
    fontSize: 30,
    fontFamily: 'Helvetica Neue',
    color: '#5eb6ff'
  },
  points:{
    fontSize: 30,
    fontFamily: 'Helvetica Neue',
    color: '#515151'
  },
  headerTitle:{
    fontWeight: 'bold',
  },
  mainButton:{
    marginTop: 30,
    padding: 15,
    width: 300,
    color: '#ffffff',
    fontFamily: 'Helvetica Neue',
    alignItems: 'center',
    backgroundColor: '#5eb6ff'

  },
  slider: {
    height: 50,
    margin: 10,
    width: 280
  },
  headerBack:{
    backgroundColor: '#ffffff',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: deviceWidth,
    justifyContent: 'flex-start',
  },
  backBtn:{
    marginLeft: 20,
    marginRight: 55,
  }
});

module.exports = BuyConfirm;
