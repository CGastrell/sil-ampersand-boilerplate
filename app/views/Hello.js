import AmpersandView from 'ampersand-view';

export default AmpersandView.extend({

	template: require('../templates/hello.jade'),

	props: {
		name: 'string'
	},

	bindings: {
		name: {
			type: 'innerHTML',
			selector: '.name'
		}
	},

	initialize: function() {
		this.name = 'you';
	}

});