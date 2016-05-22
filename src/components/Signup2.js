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
  TextInput,
  ScrollView,
  Image
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


      <ScrollView
        ref={(scrollView) => { _scrollView = scrollView; }}
        vertical={true}
        style={styles.scroll}
        automaticallyAdjustContentInsets={false}>
        <View style={styles.layout}>
          <View style={styles.flexBox}>
            <Image style={styles.logo} source={require('./img/GaliciaPay_logo.png')}/>
          </View>
          <View style={styles.marginBox}>
            <Image source={require('./img/activar_PIN.png')}/>
            <View style={styles.row}>
              <TextInput
                keyboardType = 'numeric'
                maxLength = {1}
                style={styles.pinInput}
                onChangeText={(text) => {_pin2.focus(); this.setState({pin1: text});}}
                value={this.state.pin1}
                autoFocus={true}
                ref={(pinInput) => {
                  _pin1 = pinInput;
                }}/>
                <TextInput
                  keyboardType = 'numeric'
                  maxLength = {1}
                  style={styles.pinInput}
                  onChangeText={(text) => {_pin3.focus(); this.setState({pin2: text})}}
                  value={this.state.pin2}
                  ref={(pinInput) => {
                    _pin2 = pinInput;
                  }}/>
                  <TextInput
                    keyboardType = 'numeric'
                    maxLength = {1}
                    style={styles.pinInput}
                    onChangeText={(text) => {_pin4.focus();this.setState({pin3: text})}}
                    value={this.state.pin3}
                    ref={(pinInput) => {
                      _pin3 = pinInput;
                    }}/>
                    <TextInput
                      keyboardType = 'numeric'
                      maxLength = {1}
                      style={styles.pinInput}
                      onChangeText={(text) => this.setState({pin4: text})}
                      value={this.state.pin4}
                      ref={(pinInput) => {
                        _pin4 = pinInput;
                      }}/>
                    </View>
                    <Button
                      style={styles.mainButton}
                      styleDisabled={{color: 'red'}}
                      onPress={this._onPressButton}>Ingresar
                    </Button>
                  </View>
                </View>
              </ScrollView>

            );
          },

        });


        var styles = StyleSheet.create({
          layout:{
            backgroundColor: '#008cff',
            paddingTop: 40,
            paddingBottom: 40,
            flex: 1,
          },
          scroll:{
            backgroundColor: '#008cff',
            flex: 1,
          },
          flexBox:{
            flex: 1,
            alignItems: 'center',
          },
          logo:{
            flex: 1,
            width: 300,
          },
          marginBox:{
            width: 300,
            marginLeft: 37,
            marginTop: 30,
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
          mainButton:{
            borderWidth: 1,
            borderColor: '#ffffff',
            marginTop: 30,
            padding: 15,
            width: 300,
            color: '#ffffff',
            fontFamily: 'Helvetica Neue',
            alignItems: 'center'
          },
          tabBox:{
            marginTop: 60,
          },
          tabLabel:{
            marginTop: 20
          },
          row:{
            flexDirection:'row',
            justifyContent: 'space-around',
          },
          pinInput:{
            height: 75,
            width:72,
            padding: 30,
            backgroundColor: '#ffffff',
            margin: 10,

          }

        });


        module.exports = Signup2;
