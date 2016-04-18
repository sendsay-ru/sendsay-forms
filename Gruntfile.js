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
      connect: {
        server: {
          port: 8082,
          base: 'src'
        }
      },

  });


  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-connect');

  // Default task(s).
  grunt.registerTask('default', ['babel']);


};