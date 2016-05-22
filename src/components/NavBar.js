var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var NavigationActions = require('../actions/NavigationActions');

var {
  Alert,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SliderIOS,
  Dimensions,
  } = React;

var deviceWidth = Dimensions.get('window').width;

var NavBar = React.createClass({

_onPressButtonBack:function(){
      NavigationActions.back();
},
render: function() {
    return(
      <View style={styles.layout}>
        <View style={styles.headerBack}>
          <TouchableOpacity style={styles.footerBtn} onPress={this._onPressButtonBack}>
            <Text style={styles.backBtn}> {"‹"} Cancelar</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#ffffff',
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

module.exports = NavBar;
