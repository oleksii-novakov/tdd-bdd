module.exports = function(grunt) {
    grunt.initConfig({
        postcss: {
            options: {
                map: {
                    inline: false, // save all sourcemaps as separate files...
                    annotation: 'src/dist' // ...to the specified directory
                },

                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                ]
            },
            dist: {
                src: 'src/*.css'
            }
        },
        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: ['index_bundle.js', 'index2.js'],
                dest: 'src/app.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'src/app.min.js': ['src/app.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['test/*.js'],
                tasks: ['mocha'],
                options: {
                    spawn: false
                }
            }
        },
        mocha: {
            test: {
                src: ['test/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('tests', ['watch']);
    grunt.registerTask('release', ['postcss', 'concat', 'uglify', 'mocha']);
    grunt.registerTask('develop', ['postcss', 'watch']);
};
