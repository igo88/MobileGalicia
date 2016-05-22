var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var Places =require('../data/places.json');
var _ = require('underscore');
var NavBar = require('./NavBar');
var {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  MapView,
  } = React;

var Map = React.createClass({
  getInitialState: function() {
    return  {
        mapRegion:{latitude: -34.605616, longitude: -58.372447,
                latitudeDelta: 0.005, longitudeDelta: 0.005},
        annotations: _.map(Places)
    }
  },

componentDidMount:function(){

},
render: function() {
    return(
      <View>
        <NavBar title={'Buscar'}></NavBar>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          annotations={this.state.annotations}
        />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#ffffff',
    flex: 1,
  },
  map: {
    height: 600,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

module.exports = Map;
