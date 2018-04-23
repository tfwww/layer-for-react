const path = require('path');
const dir = 'example'
const outputPath = `${dir}/dist`

module.exports = {
    mode: 'development',
  	entry: `./${dir}/src/index.js`,
  	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, outputPath)
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: dir,
        port: 7777
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};