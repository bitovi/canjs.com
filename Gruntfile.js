module.exports = function(grunt) {
  grunt.registerTask('version', 'Synchronizes source repositories package.json version with bower.json', function() {

  });

  grunt.initConfig({
    clean: {
      distributables: ['**/*.js', '!Gruntfile.js', 'amd/', 'steal/', '!**/node_modules/**']
    },
    copy: {
      dist: {
        expand: true,
        cwd: '../canjs/dist/',
        src: ['**'],
        dest: ''
      }
    },
    shell: {
      build: {
        command: 'grunt build',
        options: {
          execOptions: {
            stdout: true,
            cwd: __dirname + '/../canjs/'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['shell:build', 'clean', 'copy']);
}
