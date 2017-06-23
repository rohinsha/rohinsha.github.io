module.exports = function (grunt) {
  var environment = grunt.option('target') || 'dev';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          development: {
            options: {
              style: 'expanded'
            },
            files: {
              "css/style.css": "sass/style.scss"
            }
          }
      },

 
        watch: {
          files: ["sass/**/*.scss"],
          tasks: ["sass"]
        }
      });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask( "default", ["sass", "watch"]);
    grunt.registerTask("deploy", ['sass', + environment ]);
};
