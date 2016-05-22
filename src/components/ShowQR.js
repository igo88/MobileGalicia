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
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  } = React;

var deviceWidth = Dimensions.get('window').width;

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

_onPressButtonBack:function()
{
    NavigationActions.back();
},

render: function() {
    return (

      <View style={styles.layout}>

        <View style={styles.headerBack}>
          <TouchableOpacity style={styles.footerBtn} onPress={this._onPressButtonBack}>
            <Text style={styles.backBtn}> {"‹"} Cancelar</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>QR de Compra</Text>
        </View>

        <View style={styles.flexBox}>
          <QRCode
            value={this.props.text + '|' + this.props.price}
          size={200}
          bgColor='#ffffff'
          fgColor='black'/>
        </View>
      </View>

    );
  }
});

var styles = StyleSheet.create({
  layout:{
    paddingTop: 10,
    flex: 1,
  },
  flexBox:{
    flex: 1,
    alignItems: 'center',
  },

  logo:{
    width: 300,  },
    headerBack:{
      backgroundColor: '#ffffff',
      height: 30,
      flexDirection: 'row',
      alignItems: 'center',
      width: deviceWidth,
      justifyContent: 'flex-start',
      marginBottom: 80,
    },
    backBtn:{
      marginLeft: 20,
      marginRight: 55,
    },

    headerTitle:{
      fontWeight: 'bold',
    },
});

module.exports = ShowQR;
