'use strict';

var React = require('react-native')
var {
	Text,
  StyleSheet
} = React

var ItemList = React.createClass({
  render: function() {
    return (
      <Text style = {styles.itemlist}>ItemList</Text>
    );
  }
})

var styles = StyleSheet.create({
  itemlist: {
    marginTop: 65
  },
})

module.exports = ItemList