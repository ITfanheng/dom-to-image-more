module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js'],
            options: {
                jshintrc: true,
            },
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                background: false,
                singleRun: true,
            },
        },
        uglify: {
            options: {
                banner: '/*! dom-to-image-more <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                sourceMap: true,
            },
            dist: {
                files: {
                    'dist/dom-to-image-more.min.js': ['src/dom-to-image-more.js'],
                },
            },
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['test'],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['karma']);
    grunt.registerTask('default', ['jshint', 'test', 'uglify']);
    grunt.registerTask('ci', ['jshint', 'uglify']);
};
