import app from 'ampersand-app';
import Router from './router';

// Expose app to browser console. ONLY IN DEVELOPMENT!
window.app = app;

app.extend({
	init () {
		this.router = new Router();
		// Read url and call appropriate handler in router.
		this.router.history.start();
	}
});

app.init();