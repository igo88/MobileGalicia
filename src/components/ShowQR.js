var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');
var QRCode = require('react-native-qrcode');
window.navigator.userAgent = "react-native";
var io = require("../../node_modules/socket.io/node_modules/socket.io-client/socket.io");
var UserActions = require('../actions/UserActions');

var {
  Alert,
  Text,
  View,
  Image,
  StyleSheet
  } = React;

var ShowQR = React.createClass({

componentDidMount:function(){
  _socket = io('http://172.17.69.42:3000',{jsonp: false, transports: ['websocket']});
  _socket.on('notify', function(data){
    UserActions.addTransaction({title: data.title, price: data.price});
    Alert.alert(
    'Felicitaciones',
    'Se acredito el pago.',
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')}
    ]
  );
  });
},
render: function() {
    return (

      <View style={styles.layout}>
        <View style={styles.flexBox}>
          <Image style={styles.logo} source={require('./img/GaliciaPay_logo.png')}/>
        </View>
        <QRCode
          value={this.props.text + '|' + this.props.price}
        size={200}
        bgColor='#008cff'
        fgColor='white'/>
      </View>
      
    );
  }
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#008cff',
    paddingTop: 10,
    flex: 1,
  },
  flexBox:{
    flex: 1,
    alignItems: 'center',
  },

  logo:{
    width: 300,  },
});

module.exports = ShowQR;
