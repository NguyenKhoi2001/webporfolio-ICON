const path = require('path')

module.exports = {
    entry: './main.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'test.js'
    }
}