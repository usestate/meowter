const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

const configuration = {
  context: process.cwd(),
  mode,
  entry: [path.resolve(__dirname, './src/core/entry.ts')],
  performance: {
    hints: false,
  },
  devServer: {
    port: 3000,
    hotOnly: true,
    publicPath: '/build',
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: {
      index: '/build/index.html',
    },
  },
  devtool:
    mode === 'development' ? 'inline-cheap-module-source-map' : undefined,
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.join(__dirname, '/public/build'),
    publicPath: '/build/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules', path.join(__dirname, './src')].filter(Boolean),
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
      '@linaria/react': path.resolve(
        __dirname,
        'node_modules',
        '@linaria/react',
      ),
      '@linaria/core': path.resolve(__dirname, 'node_modules', '@linaria/core'),
    },
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
  externals: {
    config: 'window.runtimeConfig',
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules[/\\]/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                mode === 'development' &&
                  require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: mode !== 'production',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(jpg|png|webp)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
              webp: {
                enabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
    ],
  },

  optimization:
    mode === 'production'
      ? {
          splitChunks: {
            cacheGroups: {
              styles: {
                name: 'styles',
                test: /\.css$/,
                chunks: 'all',
                enforce: true,
              },
            },
          },
          minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        }
      : {},

  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new MiniCssExtractPlugin({
      // Required to make css HMR work
      filename:
        mode === 'production' ? 'styles-[contenthash].css' : 'styles.css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.CONFIG_PATH': JSON.stringify(
        process.env.CONFIG_PATH || '/config.json',
      ),
    }),
    new HtmlWebPackPlugin({
      template: './src/core/templates/index.html',
      filename: mode === 'production' ? '../index.html' : './index.html',
    }),
    new CleanWebpackPlugin(),
    mode === 'development' && new webpack.HotModuleReplacementPlugin(),
    mode === 'development' &&
      new ReactRefreshWebpackPlugin({
        exclude: [/\.worker\.ts$/, /node_modules/],
      }),
    mode === 'production' && new CompressionPlugin(),
    // new BundleAnalyzerPlugin(),
  ].filter(Boolean),
};

module.exports = configuration;
