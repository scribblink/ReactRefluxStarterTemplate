var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return{
			text: ''
		}
	},
	render: function() {
		return <div>
			{this.state.text}
				
		</div>
	}
});