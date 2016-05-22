var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var AppStore = require('../stores/AppStore');
var NavigationActions = require('../actions/NavigationActions');
var Button = require('react-native-button');
var ScrollableTabView = require('react-native-scrollable-tab-view');


var {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicatorIOS,
  TextInput,
  Timers,
  Dimensions,
  ScrollView
} = React;

var deviceWidth = Dimensions.get('window').width;

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
            <Image source={require('./img/activar_titulo.png')}/>
            <TextInput
              style={styles.inputField}
              keyboardType = 'numeric'
              placeholder = "Ingrese su codigo de 12 pines"
              onChangeText={(text) => this.setState({code: text})}
              value={this.state.code}
              />
            <Text style={[{color: '#ffffff', margin: 5}]}>{this.state.text}</Text>
            <Button
              style={styles.mainButton}
              onPress={this._onPressButton}>Validar</Button>

            <ScrollableTabView style={styles.tabBox}>
              <View tabLabel='Red Banelco' style={styles.tabLabel}>
                <Image source={require('./img/activar_tutorial_banelco.png')} />
              </View>
              <View tabLabel='Home Banking' style={styles.tabLabel}>
                <Image source={require('./img/activar_tutorial_hb.png')}/>
              </View>
            </ScrollableTabView>
            
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
  }

});

module.exports = Signup;
