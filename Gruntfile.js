module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      distributables: ['**/*.js', '!Gruntfile.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
}
