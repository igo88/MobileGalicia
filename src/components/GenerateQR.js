var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');
var Button = require('react-native-button');

var {
  Text,
  Alert,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SliderIOS,
  Dimensions,
  TextInput
  } = React;

var deviceWidth = Dimensions.get('window').width;
var GenerateQR = React.createClass({
getInitialState:function(){
  return {
    name: '',
    price:''
  }
},
componentDidMount:function(){

},

_onPressButtonBack:function()
{
    NavigationActions.back();
},

_onPressButton:function(){
  NavigationActions.navigate({route: RouteConstants.SELL_SHOW_QR, payload:{name:this.state.name, price: this.state.price}});
},
render: function() {
    return (
      <View style={styles.layout}>

        <View style={styles.headerBack}>
          <TouchableOpacity style={styles.footerBtn} onPress={this._onPressButtonBack}>
            <Text style={styles.backBtn}> {"‹"} Cancelar</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Solicitar Pago </Text>
        </View>

        <View style={styles.flexBox}>
          
          <Text>Nombre</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}/>
          <Text>Price</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => this.setState({price:text})}
            keyboardType = 'numeric'
            value={this.state.price}/>
            <Button
              style={styles.mainButton}
              styleDisabled={{color: 'red'}}
              onPress={this._onPressButton}>
                Generate!
            </Button>

        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#ffffff',
    flex: 1,
  },
  mainButton:{
    marginTop: 30,
    padding: 15,
    width: 300,
    color: '#ffffff',
    fontFamily: 'Helvetica Neue',
    alignItems: 'center',
    backgroundColor: '#5eb6ff'
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
    marginLeft: 10,
    marginRight: 55,
  },
  headerTitle:{
    fontWeight: 'bold',
  },
  flexBox:{
    flex: 1,
    alignItems: 'center',
  },

  inputField:{
    backgroundColor: '#ffffff',
    height: 50,
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    justifyContent: 'space-around',
  },
});

module.exports = GenerateQR;
