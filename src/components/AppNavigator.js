var NavigationActions = require('../actions/NavigationActions');
var NavigationConstants = require('../constants/NavigationConstants');
var RouteConstants = require('../constants/RouteConstants');
var NavigationStore = require('../stores/NavigationStore');
var React = require('react-native');

var Home = require('./Home');
var Buy = require('./Buy');
var Pay = require('./Pay');


var {
  Navigator,
  InteractionManager,
  Timers,
  BackAndroid
} = React;

var _navigator = {};

var AppNavigator = React.createClass({

  getInitialState: function() {
    return  {
      currentRoute : this.props.initialRoute
    }
  },

  componentDidMount: function() {
    _navigator.navigationContext.addListener('didfocus', function(navigator) {
      var lastRoute = NavigationStore.getCurrentRoute();
      var routes = NavigationStore.getRoutes();
      var routeBefore = routes[routes.length - 2];
      if (routeBefore && navigator.target._currentRoute.id == routeBefore.payload.route) {
        NavigationActions.resetLast();
      }
    });

    NavigationStore.addChangeListener(this._onNavigationChange);

    if(BackAndroid) {
      BackAndroid.addEventListener('hardwareBackPress', this._onHardwareBack);
    }
  },

  componenteWillUnmount:function() {
    NavigationStore.removeChangeListener(this._onNavigationChange);
    if(BackAndroid) {
      BackAndroid.removeEventListener('hardwareBackPress', this._onHardwareBack);
    }
  },

_onHardwareBack: function() {
    var currentRoute = NavigationStore.getCurrentRoute().payload.route;
    if (currentRoute == RouteConstants.HOME) {
      return false;
    }
    else {
      NavigationActions.back();
      return true;
    }
  },

  _onNavigationChange: function() {
    var currentRoute = NavigationStore.getCurrentRoute();
    switch(NavigationStore.getCurrentAction()) {
      case NavigationConstants.NAVIGATE:
      _navigator.push({
        id: currentRoute.payload.route,
        payload: currentRoute.payload.payload
      });
      break;
      case NavigationConstants.NAVIGATE_BACK:
      _navigator.pop();
      break;
      case NavigationConstants.REPLACE:
      _navigator.replace({
        id: currentRoute.payload.route,
        payload: currentRoute.payload.payload
      });
      break;
      case NavigationConstants.RESET_LAST:
      _navigator._cleanScenesPastIndex(_navigator.getCurrentRoutes().length - 2);
      break;
    }
  },

  render: function() {
    return (
      <Navigator
        initialRoute={{id: this.props.initialRoute, index: 0}}
        renderScene={renderComponent}
        ref={(navigator) => {
          if (navigator !== _navigator) {
            _navigator = navigator;
          }
        }}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }

          return Navigator.SceneConfigs.FloatFromRight;

        }}
        />
    );
  }
});

var renderComponent = function(route, navigator) {
  switch (route.id) {
    case RouteConstants.HOME:
      return (<Home/>);
    break;
    case RouteConstants.BUY:
      return (<Buy/>);
    break;
    case RouteConstants.PAY:
      return (<Pay/>);
    break;
    default:
      return (<Home />);
    break;

  }
};

module.exports = AppNavigator;
