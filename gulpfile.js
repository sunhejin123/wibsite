var gulp = require("gulp");

gulp.task("image",function(){
    gulp.src("./src/images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
});