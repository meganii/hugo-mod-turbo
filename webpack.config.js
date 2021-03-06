const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'turbo.js',
        path: path.resolve(__dirname, 'assets/jslibs/turbo'),
    },
};