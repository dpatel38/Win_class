const ESLintPlugin = require('eslint-webpack-plugin');
 
module.exports = {
    entry: {
      app: "./javascript/index"
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [new ESLintPlugin()],
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                   loader: 'babel-loader',
                }
             },
          {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader'}
            ]
          }
        ]
      },
      devServer: {
        contentBase: './dist',
        port: '3000',
        inline: true
      },
      watch: true
  };