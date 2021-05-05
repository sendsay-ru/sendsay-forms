const lessFiles = [
  'src/css/less/general.less',
  'src/css/less/bar.less',
  'src/css/less/toggleable.less',
  'src/css/less/notify.less',
  'src/css/less/embedded.less',
  'src/css/less/animations.less',
];

module.exports = (grunt) => {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', {
              sourceMaps: true,
              presets: ['@babel/preset-env'],
            }],
          ],
        },
        files: {
          './dist/forms.js': ['./src/*.js', './src/classes/**/*.js'],
        },
      },
      dev: {
        options: {
          transform: [
            ['babelify', {
              sourceMaps: true,
              presets: ['@babel/preset-env'],
            }],
          ],
        },
        files: {
          './test-dist/sendsayforms.js': ['./src/*.js', './src/classes/**/*.js', './tests/classes/*.js'],
        },
      },
    },
    uglify: {
      target: {
        files: {
          'dist/forms.min.js': ['dist/forms.js'],
        },
      },
    },
    less: {
      dev: {
        files: {
          'dist/forms.css': lessFiles,
        },
      },
      dist: {
        options: {
          compress: true,
          plugins: [
            new (require('less-plugin-autoprefix'))(),
          ],
        },
        files: {
          'dist/forms.min.css': lessFiles,
        },
      },
    },
    watch: {
      scripts: {
        files: 'src/**/*.js',
        tasks: ['browserify'],
        options: {
          interrupt: true,
        },
      },
      styles: {
        files: 'src/css/**/*.less',
        tasks: ['less:dev'],
        options: {
          interrupt: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('build', ['browserify', 'uglify', 'less']);
  grunt.registerTask('default', ['build']);
};
