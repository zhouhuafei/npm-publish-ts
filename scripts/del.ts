import path from 'path'
import del from 'del'

const distDir = path.resolve(__dirname, '../dist')
del.sync([distDir], { force: true })
