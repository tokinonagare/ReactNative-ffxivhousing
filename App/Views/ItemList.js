'use strict';

var React 	   = require('react-native')
var ListDetail = require('./ListDetail')
var {
	Text,
	ListView,
  	StyleSheet,
  	View,
  	TouchableHighlight,
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
      .then(jsonData => {
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

	_rowPressed: function(items) {
		this.props.navigator.push({
			title: 	   items.name,
			component: ListDetail,
			passProps: {items}
		});
	},

	_renderRow: function(items) {
	  	return (
		  	<TouchableHighlight 
		  		onPress 	  = {() => this._rowPressed(items)}
		  		underlayColor = 'gray'>
		  		<View>  		
					<View style = {styles.rowContainer}>
						<Image style = {styles.thumb} source = {{uri: items.image}}/>
						<View  style = {styles.textContainer}>
							<Text style = {styles.title}>{items.name}</Text>
						</View>
					</View>
					<View style = {styles.separator}/>				  			
				</View>
			</TouchableHighlight>
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