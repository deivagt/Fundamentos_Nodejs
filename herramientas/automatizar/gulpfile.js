const GULP = require('gulp');
const server = require('gulp-server-livereload')

GULP.task('build',(callback)=>{
    console.log('Construyendo el sitio');
    setTimeout(callback, 1000);
    
})

GULP.task('serve',(callback)=>{
    GULP.src('www').pipe(server({
        livereload:true,
        open:true,
    }))
})

GULP.task('default', GULP.series('build','serve'))