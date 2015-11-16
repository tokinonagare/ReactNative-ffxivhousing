'use strict';

var React = require('react-native') 
var {
	Text,
	ListView,
  	StyleSheet,
  	View,
  	Image
} = React

var getItemListData = function() {
	return 'http://133.130.58.155:27777/api/items/';
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
  		<View>  		
			<View style = {styles.rowContainer}>
				<Image style = {styles.thumb} source = {{uri: item.image}}/>
				<View  style = {styles.textContainer}>
					<Text style = {styles.title}>{item.name}</Text>
				</View>
			</View>
			<View style = {styles.separator}/>				  			
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
		flex: 		 	 1,
		justifyContent: 'center'
	},
	separator: {
		height: 		  1,
		backgroundColor: '#506274',
	},
	price: {
		fontSize:    20,
		fontWeight: 'bold',
		color: 		'black'
	},
	title: {
		fontSize:  24,
		fontFamily:     'Symbol',
		justifyContent: 'center',
		color:    		'#e6f1f7'
	},
	rowContainer: {
		padding: 		  6,
		flexDirection:   'row',
		backgroundColor: '#415160'
	}
})

module.exports = ItemList