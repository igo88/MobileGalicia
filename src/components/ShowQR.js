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
