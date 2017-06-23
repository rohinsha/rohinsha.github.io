module.exports = function (grunt) {
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
        	css : {
       		files: ['sass/*.scss','sass/pages/*.scss','sass/vendors/*.scss'],
        	tasks: ['sass']
        }
      }
    
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
  
};
