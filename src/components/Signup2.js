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

var _pin1;
var _pin2;
var _pin3;
var _pin4;

var Signup2 = React.createClass({
  getInitialState: function() {
    return  {
      pin1:'',
      pin2:'',
      pin3:'',
      pin4:''
    }
  },

componentDidMount:function(){

},
_onPressButton:function(){
  NavigationActions.navigate({route: RouteConstants.HOME, payload:this.props.mode});
},
_setPinText: function(){

},
render: function() {
    return (
      <View style={styles.layout}>
        <Text>PIN: </Text>
        <View style={styles.row}>
          <TextInput
          keyboardType = 'numeric'
          maxLength = {1}
          style={{height: 40, width:40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => {_pin2.focus(); this.setState({pin1: text});}}
          value={this.state.pin1}
          autoFocus={true}
          ref={(pinInput) => {
            _pin1 = pinInput;
          }}/>
          <TextInput
          keyboardType = 'numeric'
          maxLength = {1}
          style={{height: 40, width:40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => {_pin3.focus(); this.setState({pin2: text})}}
          value={this.state.pin2}
          ref={(pinInput) => {
            _pin2 = pinInput;
          }}/>
          <TextInput
          keyboardType = 'numeric'
          maxLength = {1}
          style={{height: 40, width:40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => {_pin4.focus();this.setState({pin3: text})}}
          value={this.state.pin3}
          ref={(pinInput) => {
            _pin3 = pinInput;
          }}/>
          <TextInput
          keyboardType = 'numeric'
          maxLength = {1}
          style={{height: 40, width:40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({pin4: text})}
          value={this.state.pin4}
          ref={(pinInput) => {
            _pin4 = pinInput;
          }}/>
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
  row:{
    flexDirection:'row'
  }
});

module.exports = Signup2;
