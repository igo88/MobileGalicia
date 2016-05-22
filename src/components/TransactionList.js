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
  ListView
  } = React;

var deviceWidth = Dimensions.get('window').width;

var TransactionList = React.createClass({
getInitialState:function(){
  return({
    mode: this.props.mode? this.props.mode : 'buyer'
  });
},
_renderContent: function(item){
  if(this.state.mode == 'buyer'){
    return this._renderContentBuyer(item);
  }
  else{
    return this._renderContentSeller(item);
  }
},
_renderContentBuyer: function(item){
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
    </View>
  );
},
_renderContentSeller: function(item){
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
      <Text>Transaction: 01204049230</Text>
    </View>
  );
},
render: function() {
  var dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
  }).cloneWithRows(this.props.transactions);

  return(
      <View style={styles.layout}>
      <ListView
        dataSource={dataSource}
        renderRow={this._renderContent}
        scrollRenderAheadDistance = {500}
        pageSize = {10}
        enableEmptySections={true}
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
});

module.exports = TransactionList;
