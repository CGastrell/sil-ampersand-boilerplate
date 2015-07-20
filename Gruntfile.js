'use strict';

var modRewrite = require('connect-modrewrite')

module.exports = function(grunt) {

	// Config.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
      client: {
        src: ['app/**/*.js'],
        dest: 'public/build.js',
        options: {
        	transform: ['babelify', 'jadeify']
        }
      }
    },

    watch: {
		  js: {
		    files: ['app/**/*.js','app/**/*.jade','!app/components/**/*.js','!app/components/**/*.jade'],
		    tasks: ['browserify']
		  },
		  css: {
		  	files: ['app/**/*.scss','!app/components/**/*.scss'],
		  	tasks: ['compass']
		  }
		},

		compass: {
			client: {
				options: {
					config: 'config.rb',
					sourcemap: true,
					outputStyle: 'expanded',
				}
			}
		},

    connect: {
	    server: {
	      options: {
	        port: 3100,
	        base: 'public',
	        middleware: function(connect, options) {
						var middlewares;
						middlewares = [];
						middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]']));

						options.base.forEach(function(base) {
						  return middlewares.push(connect['static'](base));
						});
						return middlewares;
					}
	      }
	    }
	  }
	});

	// Load packages.
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Define tasks.
	grunt.registerTask('default', ['compass','browserify','watch']);
	grunt.registerTask('server', ['connect:server:keepalive']);

}