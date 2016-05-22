var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');
var Button = require('react-native-button');
var TransactionList = require('./TransactionList');
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
var Sell = React.createClass({
getInitialState: function(){
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
_onPressButton: function(){
  NavigationActions.navigate({route: RouteConstants.SELL_GENERATE});
},

_onPressButtonProfile:function()
{
    NavigationActions.navigate({route: RouteConstants.PROFILE_SELLER});
},
_onPressButtonHistory:function()
{
    NavigationActions.navigate({route: RouteConstants.HISTORY_SELLER});
},

_renderVentasHoy:function(){
  if(this.state.transactions.length > 0){
    return(<Image source={require('./img/bloque_ventas-hoy_trx_OK')}/>);

  }else {
    return(<Image source={require('./img/bloque_ventas-hoy.png')}/>);
  }
},

_renderHistorial:function(){
  if(this.state.transactions.length > 0){
    return(<Image source={require('./img/inicio-vendedor-listado.png')} style={[{marginTop: 15}]}/>);
  }else{
    return(  <Image source={require('./img/inicio_1stlogin-vendedor_tutorial.png')} style={[{marginTop: 15}]}/>);
  }
},

render: function() {
  var trx = this.state.transactions.length > 0;
    return (
      <View style={styles.layout}>
        <TouchableOpacity style={styles.footerBtn} onPress={this._onPressButton}>
          <Image source={require('./img/bloque_solicitar-pago.png')}/>
        </TouchableOpacity>

        {_renderVentasHoy()}
        {_renderHistorialHoy()}


        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerBtn} onPress={this._onPressButtonHistory}>
            <Image source={require('./img/icon_historial-texto.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBtn} onPress={this._onPressButtonProfile}>
            <Image source={require('./img/icon_perfil-texto.png')}/>
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
    backgroundColor: '#ad2931',
    position: 'absolute',
    flex: 1,
    bottom: 0,
    height: 55,
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

module.exports = Sell;
