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
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['postcss', 'concat', 'uglify']);
};
