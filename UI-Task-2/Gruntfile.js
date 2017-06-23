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
      },
       browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'sass/*.scss',
                        'css/*.css',
                        'app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        }
    
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
};
