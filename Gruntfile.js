module.exports = function(grunt) {
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
			scripts: {
				files: [
					'_config.yml',
					'index.html',  
					'_layouts/**',
					'_posts/**',
					'_includes/**'
				],
				tasks: ['shell:jekyllBuild'],
				options: {
					livereload: true
				},
			},
			css: {
				files: [
					'_sass/**'
				],
				tasks: ['sass', 'shell:jekyllBuild'],
				options: {
					livereload: true
				},
			},
		},

		browserSync: {
			default_options: {
				bsFiles: {
					src: [
						'./_site/*.html',
						'./_site/*.css'
					]
				},
				options: {
					watchTask: true,
					server: './_site',
					watchOptions: {
						ignoreInitial: true,
						ignored: ['*.txt', 'node_modules', '.git'],
					},
					browser: "google chrome",
					notify: false
				}	
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-sass')
	grunt.loadNpmTasks('grunt-contrib-connect')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-shell')
	grunt.loadNpmTasks('grunt-browser-sync');
	
	grunt.registerTask('tasting', ['browserSync', 'watch'])
	grunt.registerTask('default', ['shell', 'connect', 'watch'])
}
