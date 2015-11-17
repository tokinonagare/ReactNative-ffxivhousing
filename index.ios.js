'use strict';

var React = require('react-native')
var ItemList = require('./App/Views/ItemList')
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React

var ffxivhousing = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        tintColor='#FF6600'
        initialRoute={{
          title: '最终幻想XIV',
          component: ItemList,
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
  },
})

AppRegistry.registerComponent('ffxivhousing', () => ffxivhousing)

module.exports = ffxivhousing