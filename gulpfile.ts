import gulp from 'gulp'
import changed from 'gulp-changed'
import ts from 'gulp-typescript'
import tsconfig1 from './tsconfig.json'
import tsconfig2 from './tsconfig.ts2js.json'
import alias, { PluginOptions } from 'gulp-ts-alias-fix'

const src = './src'
const dist = './dist'
const isProduction = process.env.NODE_ENV === 'production'
const tsconfig = {
  compilerOptions: {
    ...tsconfig2.compilerOptions,
    ...tsconfig1.compilerOptions
  }
}

function ts2js () {
  return gulp.src(`${src}/**/*.ts`)
    .pipe(changed(dist, { extension: '.js' }))
    .pipe(alias(tsconfig as PluginOptions))
    .pipe(ts(tsconfig.compilerOptions))
    .pipe(gulp.dest(dist))
}

function watcher () {
  gulp.watch(`${src}/**/*.ts`, gulp.series(ts2js))
}

const series: Array<gulp.TaskFunction> = [ts2js]
if (!isProduction) {
  series.push(watcher)
}
export default gulp.series(...series)
