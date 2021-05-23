module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react']
              }
            }
          }, {
              test: /\.css$/,
              use:['style-loader', 'css-loader']
          } 
        ]
      }
}
