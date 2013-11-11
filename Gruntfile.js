module.exports = function(grunt)
{
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify:
	{
		options:
		{
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		build:
		{
			src: 'js/*.js',
			dest: 'build/js/'
		}
    },
	
	htmlmin:
	{                                     // Task
		dist:
		{                                      // Target
			options:
			{                                 // Target options
				removeComments: true,
				collapseWhitespace: true
			},
			files:
			{                                   // Dictionary of files
				'build/index.html': 'index.html',
			}
		}
    },
	
	cssmin:
	{
		css:
		{
			src: 'css/select.css',
			dest: 'build/css/select.css'
		}
	},
	
	copy: 
	{
		main:
		{
			files: 
			[
				{src: ['img/*.*'], dest: 'build/'},
				{src: ['fonts/*.*'], dest: 'build/'},
				{src: ['proxy.php'], dest: 'build/'},
				{src: ['css/bootstrap*.css'], dest: 'build/'},
        
			]
		}
    },
	
	clean:
	{
		build: ['build'],
		remainingFiles: []
	}
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-css');
  // Default task(s).
  grunt.registerTask('default', ['clean:build', 'copy', 'uglify', 'cssmin', 'htmlmin']);

};