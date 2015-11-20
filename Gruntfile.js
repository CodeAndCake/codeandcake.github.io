module.exports = function (grunt) {
  grunt.initConfig({
    shell: {
        jekyllBuild: {
            command: 'jekyll build'
        }
    },
    connect: {
        server: {
            options: {
                port: 8080,
                base: '_site'
            }
        }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'sassy.css': '_sass/sassy.scss'
        }
      }
    },
    watch: {
      livereload: {
        files: [
          '_config.yml',
          'index.html',
          '*.css',
          '_sass/**',
          '_layouts/**',
          '_posts/**',
          '_includes/**'
        ],
        tasks: ['sass', 'shell:jekyllBuild'],
        options: {
          livereload: true
        },
      },
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-shell')
  grunt.registerTask('default', ['shell', 'connect', 'watch'])
}