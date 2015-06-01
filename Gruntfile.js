var grunt = require('grunt');

grunt.initConfig({
	copy: {
		main: {
			files: [
				{ cwd: 'bower_components/bootstrap/dist/', src: '**/*', dest: 'vendor', expand: true },
				{ cwd: 'bower_components/jquery/dist/', src: '*', dest: 'vendor/js', expand: true }
			]
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-copy');

grunt.registerTask('default', function() {
	console.log('task stub');
});