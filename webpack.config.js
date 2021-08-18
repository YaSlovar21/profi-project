const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: { 
    index: './src/pages/index.js',
    btp: './src/pages/btp.js',
    ti: './src/pages/ti.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    assetModuleFilename: 'images/[hash][ext]',
    //publicPath: ''
  },
    // добавили режим разработчика
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

    open: true // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [ // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/'
      },
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /CNAME/,
        loader: 'file-loader',
        options: {
          name: '[name]',
        },
      },
      {
        // применять это правило только к CSS-файлам
        test: /\.css$/,
        //include: path.resolve(__dirname, 'styles'),
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: (resourcePath, context) => {
                  // publicPath is the relative path of the resource to the context
                  // e.g. for ./css/admin/main.css the publicPath will be ../../
                  // while for ./css/main.css the publicPath will be ../
                  return path.relative(path.resolve(__dirname, './dist'), context) + "/";
                },
              },
            }, 
            {
                loader: 'css-loader',
                options: { importLoaders: 1 }
            }, 
            'postcss-loader'
          ],
        
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к файлу index.html
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/btp.html', // путь к файлу index.html
      filename: 'products/btp.html',
      chunks: ['btp'],
    }),
    new HtmlWebpackPlugin({
      template: './src/ti-xx-xx.html', // путь к файлу index.html
      filename: 'catalog/ti-077.html',
      chunks: ['ti'],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    })
  ] 
}