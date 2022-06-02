const lessFiles = [
  'src/css/less/general.less',
  'src/css/less/bar.less',
  'src/css/less/toggleable.less',
  'src/css/less/notify.less',
  'src/css/less/embedded.less',
  'src/css/less/animations.less',
];

const pathToCss = ({ min }) =>
  `https://image.sendsay.ru/app/js/forms/forms${min ? '.min' : ''}.css`;

module.exports = (grunt) => {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    rewrite: {
      default: {
        src: 'dist/forms.js',
        editor(contents) {
          return contents.replace(/DEFAULT_PATH_TO_CSS/g, pathToCss({ min: false }));
        },
      },
      min: {
        src: 'dist/forms.min.js',
        editor(contents) {
          return contents.replace(/DEFAULT_PATH_TO_CSS/g, pathToCss({ min: true }));
        },
      },
    },
    browserify: {
      dist: {
        options: {
          transform: [
            [
              'babelify',
              {
                sourceMaps: true,
                presets: ['@babel/preset-env'],
              },
            ],
          ],
        },
        files: {
          './dist/forms.js': ['./src/*.js', './src/classes/**/*.js'],
        },
      },
      test: {
        options: {
          transform: [
            [
              'babelify',
              {
                sourceMaps: true,
                presets: ['@babel/preset-env'],
              },
            ],
          ],
        },
        files: {
          './test-dist/sendsayforms.js': [
            './src/*.js',
            './src/classes/**/*.js',
            './tests/classes/*.js',
          ],
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
          plugins: [new (require('less-plugin-autoprefix'))()],
        },
        files: {
          'dist/forms.min.css': lessFiles,
        },
      },
    },
    watch: {
      scripts: {
        files: 'src/**/*.js',
        tasks: ['browserify', 'rewrite:default'],
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
  grunt.loadNpmTasks('grunt-rewrite');

  // Default task(s).
  grunt.registerTask('build', ['browserify', 'uglify', 'rewrite', 'less']);
  grunt.registerTask('default', ['build']);
};
