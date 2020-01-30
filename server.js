const superstatic = require('superstatic');
const browseSync = require('browser-sync').create();

browseSync.init({
    server: {
    baseDir: 'src',
    middleware: [superstatic({ stack: 'strict' })]    
    },
    port: 3001,
    watch: true,
    files: ['./src/*.html', './src/**/*.css', './src/**/*.js']
});


