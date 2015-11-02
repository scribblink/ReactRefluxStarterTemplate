var React = require('react');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var Header = require('./header');


var App = React.createClass({
	mixins: [ ReactFire ],
	getInitialState: function() {
		return {
			items: {}
		}
	},
	render: function() {
  	return <div>
      <h1>My Personal Starter Template</h1>
      <Header itemsStore={this.firebaseRefs.items} />
  	</div>
	}
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
