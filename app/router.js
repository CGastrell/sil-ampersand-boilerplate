import app from 'ampersand-app';
import Router from 'ampersand-router';
import ViewSwitcher from 'ampersand-view-switcher';

export default Router.extend({

	main: new ViewSwitcher(document.querySelector('.main')),

	routes: {
		'': 'publicHandler',
		'*catchall': 'catchAllHandler'
	},

	publicHandler () {
		this.main.set(new(require('./views/Hello'))());
	},

	catchAllHandler () {
		this.publicHandler();	
	}

});
