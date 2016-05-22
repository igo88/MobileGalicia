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
  TextInput
  } = React;

var Signup2 = React.createClass({
  getInitialState: function() {
    return  {
      pin:''
    }
  },

componentDidMount:function(){

},
_onPressButton:function(){
  NavigationActions.navigate({route: RouteConstants.HOME, payload:this.props.mode});
},
render: function() {
    return (
      <View style={styles.layout}>
        <Text>PIN: </Text>
        <View style={styles.row}>
          <TextInput
            keyboardType = 'numeric'
            maxLength = {4}
            placeholder = "Ingrese su PIN de 4 digitos"
            style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({pin: text})}
            value={this.state.pin}/>
          </View>
          <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={this._onPressButton}>
              Iniciar!
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
});

module.exports = Signup2;
