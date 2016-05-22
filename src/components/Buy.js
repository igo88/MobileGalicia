var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');

var {
  Alert,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions
  } = React;


var deviceWidth = Dimensions.get('window').width;



var Buy = React.createClass({
componentDidMount:function(){

},
_onPressButtonRead:function()
{
    NavigationActions.navigate({route: RouteConstants.READ_QR});
},



render: function() {
    return (
      <View style={styles.layout}>






        <Image source={require('./img/banner_inicio-user.png')}/>
        <Image source={require('./img/inicio_1stlogin-user_tutorial.png')}/>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerBtn}>
            <Image source={require('./img/icon_buscar-texto.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBtn}>
            <Image source={require('./img/icon_historial-texto.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBtnScan} onPress={this._onPressButtonRead}>
            <Image source={require('./img/boton_scanQR.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBtn}>
            <Image source={require('./img/icon_perfil-texto.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBtn}>
            <Image source={require('./img/icon_saldos-texto.png')}/>
          </TouchableOpacity>
        </View>

      </View>


    );
  }
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#efefef',
    flex: 1,
  },
  footer:{
    backgroundColor: '#002253',
    position: 'absolute',
    flex: 1,
    bottom: 0,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: deviceWidth,
    justifyContent: 'space-around',
    shadowOffset: {width: 1, height: -1},
    shadowColor: '#000000',
    shadowOpacity: .6

  },
  footerBtn:{
    width: 50,
  },
  footerBtnScan:{
    marginBottom: 30,
    shadowOffset: {width: 0, height: -4},
    shadowColor: '#000000',
    shadowOpacity: .3,
  },
});

module.exports = Buy;
