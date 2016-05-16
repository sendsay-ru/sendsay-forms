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
              "./dist/sendsayforms.js": ["./src/*.js", "./src/classes/*.js"]
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
                "./test-dist/sendsayforms.js": ["./src/*.js", "./src/classes/*.js", "./tests/classes/*.js"]
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
      }

  });


  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['babel', 'browserify', 'uglify']);
  grunt.registerTask('build', ['browserify', 'uglify']);


};