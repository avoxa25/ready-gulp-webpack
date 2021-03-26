const path = require('path');

const entryPoints = {};
entryPoints['main'] = path.resolve(__dirname, 'src/scripts', 'main.ts');

module.exports = (env, argv) => {
  const config = {
    mode: argv.mode,
    entry: entryPoints, 
    output: {
      path: path.resolve(__dirname, 'src/scripts'),
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.ts']
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: 'ts-loader' }
      ]
    },
    optimization: {
      minimize: argv.mode === 'production',
      nodeEnv: argv.mode
    },
    watch: true
  };

  return config;
};