
module.exports = function(grunt) {
  grunt.initConfig({
    test: {
      unit: 'simplemocha:unit'
    },
    simplemocha: {
      options: {
        ui: 'bdd',
        reporter: 'dot'
      },
      unit: {
        src: ['test/**/*.js']
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['simplemocha:unit']);
};
