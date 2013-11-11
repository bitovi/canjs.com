module.exports = function(grunt) {
  grunt.registerTask('syncVersion', 'Synchronizes source repositories package.json version with bower.json', function() {
    var options = this.options();
    var fromData = grunt.file.readJSON(options.from);
    var toData = grunt.file.readJSON(options.to);

    grunt.log.writeln('Writing version ' + fromData.version + ' to ' + options.to);

    toData.version = fromData.version;

    grunt.file.write(options.to, JSON.stringify(toData, null, '  '));
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
      },
      release: {
        command: function() {
          var version = grunt.file.readJSON('bower.json').version;

          return 'git add . --all && ' +
            'git commit -m "v' + version + '" && ' +
            'git push origin master && ' +
            'git tag ' + version + ' && ' +
            'git push origin --tags';
        }
      }
    },
    syncVersion: {
      options: {
        from: '../canjs/package.json',
        to: 'bower.json'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['shell:build', 'clean', 'copy', 'syncVersion', 'release']);
}
