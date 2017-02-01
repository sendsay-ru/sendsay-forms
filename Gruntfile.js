module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
        options: {
            sourceMap: true,
            presets: ['es2015']
        },
        dist: {
            files: [{
                "expand": true,
                "cwd": "src/",
                "src": ["*.js", "classes/**/*.js"],
                "dest": "compiled/",
                "ext": ".js"
            }]
        }
      },
      browserify: {
         dist: {
            options: {
               transform: [
                  ["babelify", {
                     sourceMap: true,
                     presets: ['es2015']
                  }]
               ]
            },
            files: {
              "./dist/sendsayforms.js": ["./src/*.js", "./src/classes/**/*.js"]
            }
         },
         dev: {
            options: {
              transform: [
                  ["babelify", {
                     sourceMap: true,
                     presets: ['es2015']
                  }]
               ]
             },
             files: {
                "./test-dist/sendsayforms.js": ["./src/*.js", "./src/classes/**/*.js", "./tests/classes/*.js"]
             }
         }
      },
      connect: {
        server: {
          port: 8082,
          base: 'src'
        }
      },
      uglify: {
        target: {
          files: {
            'dist/sendsayforms.min.js': ['dist/sendsayforms.js']
          }
        }
      },
      less: {
        dev: {
          files: {
            'src/css/sendsayforms.css': ['src/css/less/general.less',
                                         'src/css/less/bar.less',
                                         'src/css/less/toggleable.less',
                                         'src/css/less/animations.less']
          }
        },
        dist: {
          options: {
            compress: true,
            plugins: [
              new (require('less-plugin-autoprefix'))(),
            ]
          },
          files: {
            'dist/sendsayforms.css': ['src/css/less/general.less',
                                      'src/css/less/bar.less',
                                      'src/css/less/toggleable.less',
                                      'src/css/less/animations.less']
          }
        }
      },
      watch: {
        scripts: {
          files: 'src/css/**/*.less',
          tasks: ['less:dev'],
          options: {
            interrupt: true,
          }
        },
      }
  });


  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['babel', 'browserify', 'uglify']);
  grunt.registerTask('build', ['browserify', 'uglify', 'less:dist']);


};