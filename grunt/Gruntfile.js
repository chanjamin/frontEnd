module.exports=function (grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch:{
            script: {
                files:['src/**/*.js'],
                tasks:['concat','babel', 'uglify'],
                options : {spawn : false}
            },
            babel:{
                files:'src/**/*.js',
                task:['babel']
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/js/*.js'],
                dest: './dist/built.js',
            },
        },
        babel:{
            options:{
                sourceMap:true,
                preset:['es2015']
            },
            dist:{
                filse:[{
                    cwd:'/dist',
                    'built-es5.js':'built.js'
                }]

            }
        },
        uglify: {
            option: {
                banner: '/* <%=pkg.name %> -v <%=pkg.version%> time: <%=grunt.template.today("yyyy-mm-dd") */'
            },
            build: {
                files: {
                    'build/js/built-<%=pkg.name%>-<%=pkg.version%>.min.js': ['./dist/built-es5.js']
                }
            }
        },
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.registerTask('default', ['concat','babel', 'uglify']);
    grunt.registerTask('watcher', ['default','watch']);
}