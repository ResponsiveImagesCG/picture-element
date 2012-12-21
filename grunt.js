module.exports = function(grunt) {
  grunt.initConfig({
    lint: { all: ['js/*.js', 'tests/*.js'] },
    concat: { 'build/srcset.js': [
      'js/libs/*',
      'js/Viewport.js',
      'js/*.js'
      ]
    },
    min: { 'build/srcset.min.js': ['build/srcset.js'] },
  });

  grunt.registerTask('default', 'lint concat min');
};