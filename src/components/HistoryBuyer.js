var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var NavigationActions = require('../actions/NavigationActions');
var NavBar = require('./NavBar');

var {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} = React;

var HistoryBuyer = React.createClass({
  getInitialState: function() {
    return  {

    }
  },

  componentDidMount:function(){

  },
  render: function() {
    return(
      <ScrollView
        ref={(scrollView) => { _scrollView = scrollView; }}
        vertical={true}
        style={styles.scroll}
        automaticallyAdjustContentInsets={false}>
        <View style={styles.layout}>
          <NavBar title={'Historial'} />
          <Image source={require('./img/GaliciaPay-PerfilUsuarioComprador.png')}/>


        </View>
      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#008cff',
    flex: 1,
  },
  scroll:{
    flex: 1,
  },
});

module.exports = HistoryBuyer;
