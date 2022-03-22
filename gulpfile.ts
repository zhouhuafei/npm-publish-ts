import gulp from 'gulp'
import ts from 'gulp-typescript'
import { compilerOptions } from './tsconfig.json'

const src = './src'
const dist = './dist'
const rootDir = './'
const isProduction = process.env.NODE_ENV === 'production'

function ts2cjs () {
  return gulp.src(`${src}/**/*.ts`)
    .pipe(ts({ rootDir, ...compilerOptions }))
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
