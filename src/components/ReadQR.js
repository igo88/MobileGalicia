var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var NavigationActions = require('../actions/NavigationActions');
var QRCodeScreen = require('./QRCodeScreen');

var {
  Alert,
  Text,
  View,
  Image,
  StyleSheet
  } = React;

var ReadQR = React.createClass({
componentDidMount:function(){

},

_onSucess: function(result) {
  NavigationActions.replace({route: RouteConstants.BUY_CONFIRM, payload: {result:result}});
},

render: function() {
    return (
      <View style={styles.layout}>
        <View style={styles.flexBox}>
          <Image style={styles.logo} source={require('./img/GaliciaPay_logo.png')}/>
        </View>
        <QRCodeScreen onSucess = {this._onSucess}></QRCodeScreen>
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

module.exports = ReadQR;
