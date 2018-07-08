const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

const dist = path.resolve(__dirname, 'dist')
const src = path.resolve(__dirname, 'src')

module.exports = {
  mode: process.env.MODE || 'development',
  entry: {
    app: './src/index.jsx',
    polyfill: './src/polyfill.js'
  },
  output: {
    path: dist,
    filename: env('assets/javascript/[name].js', 'assets/javascript/[name].[chunkhash:8].js')
  },
  devtool: env('source-map', false),
  devServer: {
    contentBase: dist,
    compress: true,
    port: 9000,
    historyApiFallback: true,
    stats: {
      chunkOrigins: false,
      modules: false
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            query: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')(),
                require('stylelint')(),
                require('postcss-reporter')({
                  clearReportedMessages: true,
                  throwError: env(false, true)
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)/i,
        use: {
          loader: 'file-loader',
          options: {
            name: env('[path][name].[ext]', '[path][name].[hash:8].[ext]'),
            context: src
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      name: 'vendor'
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new HtmlWebpackPlugin({
      title: 'Boilerplate',
      color: '#317efb',
      description: 'Insert description',
      template: './src/index.html',
      faviconPNG: 'images/favicon.png',
      faviconICO: 'images/favicon.ico'
    }),
    new ImageminPlugin({
      disable: env(true, false),
      test: /\assets\/images\/*.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '95-100'
      }
    })
  ],
  resolve: {
    modules: [
      'node_modules',
      src
    ],
    extensions: [ '.js', '.jsx' ]
  }
}

function env (development, production) {
  return process.env.MODE === 'production' ? production : development
}
