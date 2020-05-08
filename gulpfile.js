let gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite');

gulp.task('svgToSprite', () => {
    let config = {
        log: "verbose",
        shape: {
            id: {
                separator: "-"
            },
            transform: [
                {
                    svgo: {
                        plugins: [
                            {
                                cleanupListOfValues: {
                                    floatPrecision: 1
                                }
                            },
                            { removeXMLNS: true },
                            { removeTitle: false }
                        ]
                    }
                }
            ]
        },
        mode: {
            symbol: {
                dest: ".",
                sprite: "sprite.svg"
            }
        }
    };
    return gulp.src("**/*.svg", { cwd: "src/assets" })
        .pipe(svgSprite(config))
        .pipe(gulp.dest('dist/img'));
})

gulp.task(
    "build",
    gulp.series(
        "svgToSprite"
    )
);
gulp.task("default", gulp.task("svgToSprite"));