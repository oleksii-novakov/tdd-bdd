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
                files: ['*.js'],
                tasks: ['mochaTest'],
                options: {
                    spawn: false
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'results.txt', // Optionally capture the reporter output to a file
                    quiet: false, // Optionally suppress output to standard out (defaults to false)
                    clearRequireCache: true // Optionally clear the require cache before running tests (defaults to false)
                },
                src: ['test/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('tests', ['mochaTest', 'watch']);
    grunt.registerTask('release', ['postcss', 'concat', 'uglify', 'mochaTest']);
    grunt.registerTask('develop', ['postcss', 'watch']);
};
