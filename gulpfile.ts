import gulp from 'gulp'
import ts from 'gulp-typescript'
import tsconfig from './tsconfig.json'
import alias from 'gulp-ts-alias-fix'

const src = './src'
const dist = './dist'
const isProduction = process.env.NODE_ENV === 'production'

function ts2cjs () {
  return gulp.src(`${src}/**/*.ts`)
    .pipe(alias(tsconfig as any))
    .pipe(ts(tsconfig.compilerOptions))
    .pipe(gulp.dest(dist))
}

function watcher () {
  gulp.watch(`${src}/**/*.ts`, gulp.series(ts2cjs))
}

const series: Array<any> = [ts2cjs]
if (!isProduction) {
  series.push(watcher)
}
export default gulp.series(...series)
