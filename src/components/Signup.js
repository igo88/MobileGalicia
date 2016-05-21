var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');
var Button = require('react-native-button');


var {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicatorIOS,
  TextInput,
  Timers
  } = React;

var Signup = React.createClass({
  getInitialState: function() {
    return  {
      code:'',
      animating:true,
      text: 'Buscando SMS...',
      mode: 'buyer'
    }
  },
stopLoading:function(){
  this.setState({
    animating:false,
    text: 'SMS no encontrado...ingrese codigo de activacion.'
  });
},
componentDidMount:function(){
  setTimeout( this.stopLoading, 3000 );
},
_onPressButton:function(){
  var mode;
  switch(this.state.code){
    case '1':
    mode = 'buyer';
    break;
    case '2':
    mode='seller';
    break;
  }
  NavigationActions.navigate({route: RouteConstants.SIGNUP2, payload:mode});
},
render: function() {
    return (
      <View style={styles.layout}>
        <Text>Registro: </Text>
        <View style={styles.row}>
          <TextInput
            keyboardType = 'numeric'
            placeholder = "Ingrese su codigo de 12 pines"
            style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({code: text})}
            value={this.state.code}/>
            <ActivityIndicatorIOS
              animating={this.state.animating}
              style={[styles.centering, {height: 80}]}
              size="large"
            />
          </View>
          <Text>{this.state.text}</Text>
          <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={this._onPressButton}>
              Activar cuenta!
          </Button>
        </View>
    );
  },


});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#003265',
    flex: 1,
  },
  row:{
    flexDirection:'row'
  }
});

module.exports = Signup;
