'use strict';

var React = require('react-native') 
var {
	Text,
	ListView,
  	StyleSheet,
  	View,
  	Image
} = React

var ListDetail = React.createClass({

	getInitialState: function() {
		var dataSource = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		return {
			dataSource: dataSource.cloneWithRows(this.props.items)
		};
	},

	render: function() {
		return (
			<ListView
				dataSource = {this.state.dataSource}
				renderRow  = {this._renderRow}/>
		);
	},

	_renderRow: function() {
	  	return (
	  		<View>  		
				<View style = {styles.rowContainer}>
					<Image style = {styles.thumb} source = {{uri: this.props.items.image}}/>
					<View  style = {styles.textContainer}>
						<Text style = {styles.title}>{this.props.items.name}</Text>
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
		fontSize: 		24,
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

module.exports = ListDetail