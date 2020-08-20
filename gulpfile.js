var gulp = require("gulp");
var uglify = require("gulp-uglify");
function minijs(){
    return gulp.src("./1/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./3/"))
}
module.exports.a = minijs