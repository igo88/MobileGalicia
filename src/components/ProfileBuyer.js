var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
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

var deviceWidth = Dimensions.get('window').width;




var ProfileBuyer = React.createClass({

  _onPressButtonBack:function(){
      NavigationActions.back();
  },

  getInitialState: function() {
    return  {

    }
  },

componentDidMount:function(){

},
render: function() {
    return(
      <View style={styles.layout}>
        <View style={styles.headerBack}>
          <TouchableOpacity style={styles.footerBtn} onPress={this._onPressButtonBack}>
            <Text style={styles.backBtn}> {"‹"} Cancelar</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Mi Perfil</Text>
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#ffffff',
    flex: 1,
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
    marginRight: 65,
  },
  headerTitle:{
    fontWeight: 'bold',
  },
});

module.exports = ProfileBuyer;
