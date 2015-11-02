var React = require('react');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var Header = require('./header');
var rootUrl = 'add your firebase url from your account';


var App = React.createClass({
	mixins: [ ReactFire ],
	getInitialState: function() {
		return {
			items: {},
      loaded: false
		}
	},
  componentWillMount: function() {
    fb = new Firebase(rootUrl + 'items/');
    this.bindAsObject(fb, 'items');
    fb.on('value', this.handleDataLoaded);
  },
	render: function() {
  	return <div>
      <h1>My Personal Starter Template</h1>
      <Header itemsStore={this.firebaseRefs.items} />
      <div className={"content " + (this.state.loaded ? "loaded" : "")}>
            <h2>"Update with component to be loaded"</h2>
          </div>
        </div>
  	</div>
	},
    handleDataLoaded: function() {
      this.setState({loaded: true});
    }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
