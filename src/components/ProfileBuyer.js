var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var NavigationActions = require('../actions/NavigationActions');
var NavBar = require('./NavBar');

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
  ScrollView
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
      <ScrollView
        ref={(scrollView) => { _scrollView = scrollView; }}
        vertical={true}
        style={styles.scroll}
        automaticallyAdjustContentInsets={false}>
        <View style={styles.layout}>
          <NavBar title={'Perfil'} />
          <Image source={require('./img/GaliciaPay-HistorialComprador.png')}/>


        </View>
      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#008cff',
    flex: 1,
  },
  scroll:{
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
