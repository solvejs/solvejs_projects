const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: "none",
    devServer: {
        port: 3000,
        public: 'http://127.0.0.1:3000/bumpers',
        proxy: 
                [{'/api': 'http://127.0.0.1:3001/'}, {'bumpers': 'http://127.0.0.1:3001/'}, {'/api/': 'http://127.0.0.1:3001/'}]
        
    },
})