# Basic Ampersand boilerplate

A very lightweight boilerplate for `ampersand.js` projects, using `browserify` with a `jadeify` and `babelify`(yay, ES6!) transform, `compass` and a very basic node process to serve your static files in `./public`.

Ampersand `view`, `app`, `router` and `view-switcher` have already been included, so you can start playing around with them.

## /app structure

* `/components`: own modules as components, to make them easily importable 
* `/models`: all Models that are not part of a separate component
* `/scss`
* `/templates`: jade templates that are not part of a separate component
* `/views`: all Views that are not part of a separate component
* `/app.js`: boots the app
* `/router.js`
	
## Running

Install dependencies:

	npm install

First start the server:
	
	grunt server

In another terminal window:

	grunt

