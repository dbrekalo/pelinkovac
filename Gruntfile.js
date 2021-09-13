/* jshint node: true */
module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            expanded: {
                files: {
                    'test/test.css': 'test/test.scss'
                },
                options: {
                    implementation: require('sass'),
                    outputStyle: 'expanded',
                    sourceMap: false,
                    precision: 5
                }
            }
        },

        bump: {
            options: {
                files: ['package.json'],
                commitFiles: ['package.json'],
                tagName: '%VERSION%',
                push: false
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', ['sass']);

};
