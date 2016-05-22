var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');
var UserStore = require('../stores/UserStore');

var {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
  AlertIOS
} = React;


var deviceWidth = Dimensions.get('window').width;
var Buy = React.createClass({
getInitialState:function(){
  return({
    transactions: UserStore.getPurchases()
  });
},
componentDidMount:function(){
  UserStore.addChangeListener(this._onUserStoreChange);
},
componenteWillUnmount:function(){
  UserStore.removeChangeListener(this._onUserStoreChange);
},
_onUserStoreChange:function(){
  this.setState({
    transactions: UserStore.getPurchases()
  });
},
_onPressButtonRead:function()
{
    NavigationActions.navigate({route: RouteConstants.READ_QR});
},
_onPressButtonSearch:function()
{
    NavigationActions.navigate({route: RouteConstants.MAP});
},
_onPressButtonProfile:function()
{
    NavigationActions.navigate({route: RouteConstants.PROFILE_BUYER});
},
_onPressButtonHistory:function()
{
    NavigationActions.navigate({route: RouteConstants.HISTORY_BUYER});
},
_onPressButtonBalance:function(){
  AlertIOS.alert(
 'Saldo',
 'Salgo actual: $3500.00'
);
},

_renderHistorial:function(){
  if(this.state.transactions.length > 0){
    return(<Image source={require('./img/inicio-comprador-listado.png')} style={[{marginTop: 15}]}/>);
  }else{
    return(<Image source={require('./img/inicio_1stlogin-user_tutorial.png')}/>);
  }
},

render: function() {
    return (
      <View style={styles.layout}>

        <Image source={require('./img/banner_inicio-user.png')}/>

        {this._renderHistorial()}

        <View style={styles.searchBox}>
          <View style={styles.flexBox}>
            <TextInput style={styles.searchInput} placeholder={'Buscar Comercios'}/>
            <TouchableOpacity style={styles.searchBtn} onPress={this._onPressButtonSearch}>
              <Image source={require('./img/icon_inicio-barrabusqueda.png')}/>
            </TouchableOpacity>
          </View>
        </View>




        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerBtn} onPress={this._onPressButtonSearch}>
            <Image source={require('./img/icon_buscar-texto.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBtn} onPress={this._onPressButtonHistory}>
            <Image source={require('./img/icon_historial-texto.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBtnScan} onPress={this._onPressButtonRead}>
            <Image source={require('./img/boton_scanQR.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBtn} onPress={this._onPressButtonProfile}>
            <Image source={require('./img/icon_perfil-texto.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBtn} onPress={this._onPressButtonBalance}>
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
  searchInput:{
    backgroundColor: '#ffffff',
    height: 50,
    padding: 10,
    marginTop: 15,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 260,
    justifyContent: 'space-around',
    borderRadius: 5,
  },
  searchBtn:{
    marginRight: 10,
  },
  searchBox:{
    backgroundColor: '#008cff',
    height: 80,
    margin: 10,
    width: deviceWidth - 20,
    borderRadius: 5,
  },
  footer:{
    backgroundColor: '#002253',
    position: 'absolute',
    flex: 1,
    bottom: 0,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    width: deviceWidth,
    justifyContent: 'space-around',
    shadowOffset: {width: 1, height: -1},
    shadowColor: '#000000',
    shadowOpacity: .6

  },
  flexBox:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footerBtn:{
    width: 50,
  },
  footerBtnScan:{
    marginBottom: 2
  },
});

module.exports = Buy;
