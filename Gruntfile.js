/* jshint node: true */
module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            expanded: {
                files: {
                    'test/test.css': 'test/test.scss'
                },
                options: {
                    outputStyle: 'expanded',
                    sourceMap: false,
                    precision: 5
                }
            }
        },

        watch: {
            cssFiles: {
                expand: true,
                files: ['scss/**/*.scss', 'test/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass']);

};
