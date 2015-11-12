'use strict';

var React = require('react-native') 
var {
	Text,
	ListView,
  	StyleSheet,
  	View
} = React

var getItemListData = function() {
	return 'http://localhost:8080/api/items/';
}

var ItemList = React.createClass({

	getInitialState: function() {
		return {
			dataSource: new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			}),
		};
	},

	componentDidMount: function() {
		this._fetchResults();
	},

	_fetchResults: function() {
    fetch(getItemListData())
      .then(response => response.json())
      .then(jsonData     => {
      	this.setState({
	    		dataSource: this.state.dataSource.cloneWithRows(jsonData.items)
	    	});
      		console.dir(jsonData.items);
      })
      .catch(error => console.dir(error));
  },

	render: function() {
		return (
			<ListView
				dataSource = {this.state.dataSource}
				renderRow  = {this._renderRow}/>
		);
	},

	_renderRow: function(item) {
  	return (  		
			<View   style = {styles.rowContainer}>
				<View style = {styles.textContainer}>
					<Text style = {styles.title}>{item.name}</Text>
				</View>
			</View> 				  			
		);
  },
})

var styles = StyleSheet.create({
	thumb: {
		width: 		 80,
		height: 	 80,
		marginRight: 10,
	},
	textContainer: {
		flex: 		 1,
	},
	separator: {
		height: 		  1,
		backgroundColor: '#dddddd',
	},
	price: {
		fontSize:    20,
		fontWeight: 'bold',
		color: 			'black'
	},
	title: {
		fontSize: 16,
		color:    '#656565'
	},
	rowContainer: {
		padding: 		6,
		flexDirection: 'row'
	}
})

module.exports = ItemList