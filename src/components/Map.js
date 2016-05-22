var React = require('react-native');
var RouteConstants = require('../constants/RouteConstants');
var Places =require('../data/places.json');
var _ = require('underscore');
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
                latitudeDelta: 0.05, longitudeDelta: 0.05},
        annotations: _.map(Places)
    }
  },

componentDidMount:function(){

},
render: function() {
    return(
      <MapView
        style={styles.map}
        region={this.state.mapRegion}
        annotations={this.state.annotations}
      />
    );
  },
});

var styles = StyleSheet.create({
  layout:{
    backgroundColor: '#003265',
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
