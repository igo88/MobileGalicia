var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');
var QRCode = require('react-native-qrcode');

var {
  Text,
  View,
  StyleSheet
  } = React;

var ShowQR = React.createClass({

componentDidMount:function(){
  _socket = io('http://172.17.69.83:3000',{jsonp: false, transports: ['websocket']});
  _socket.on('confirm', function(data){
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
      <QRCode
            value={this.props.text + '|' + this.props.price}
          size={200}
          bgColor='black'
          fgColor='white'/>
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

module.exports = ShowQR;
