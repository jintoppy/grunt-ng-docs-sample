module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-ngdocs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.initConfig({
    ngdocs: {
      options: {
        title: "Sample App Docs",
        scripts: [
        'angular.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'dist/templates.js',
        'scripts/app.js',
        'scripts/directive.js',
        'scripts/service.js'],
        html5Mode: false
      },
      all: ['scripts/**/*.js']
    },
    connect: {
      options: {
        keepalive: true
      },
      server: {}
    },
    clean: ['docs'],
    html2js: {
      options: {
        rename: function(moduleName){
          return moduleName.replace("../","");
        }
      },
      main: {
        src: ['partials/**/*.tpl.html'],
        dest: 'dist/templates.js'
      }
  }
  });


  grunt.registerTask('default', [
      'clean',
      'html2js',
      'ngdocs',
      'connect'
    ]);

};
