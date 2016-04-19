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
              "./build/sendsayforms.js": ["./src/*.js", "./src/classes/*.js"]
            }
         }
      },
      connect: {
        server: {
          port: 8082,
          base: 'src'
        }
      },

  });


  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks("grunt-browserify");

  // Default task(s).
  grunt.registerTask('default', ['babel', 'browserify']);
  grunt.registerTask('build', ['browserify']);


};