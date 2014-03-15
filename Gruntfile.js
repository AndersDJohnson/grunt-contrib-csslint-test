module.exports = function (grunt) {
    
    grunt.initConfig({
      csslint: {
        starFalse: {
          options: {
            '*': false,
            'star-property-hack': true
          },
          src: ['fixtures/**/*.css']
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-csslint');

    grunt.registerTask('default', ['csslint:starFalse']);
};
