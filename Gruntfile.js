module.exports = function(grunt) {

    // Configuração das tarefas
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      // Compilação LESS
      less: {
        development: {
          files: {
            'css/style.css': 'less/style.less'
          }
        }
      },
  
      // Minificação de JavaScript
      uglify: {
        my_target: {
          files: {
            'js/output.min.js': ['js/input.js']
          }
        }
      }
    });
  
    // Carrega os plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Tarefas padrão
    grunt.registerTask('default', ['less', 'uglify']);
  };
  