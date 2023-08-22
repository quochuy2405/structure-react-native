module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true
      }
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          '~pages': './pages',
          '~assets': './assets',
          '~images': './images',
          '~constants': './constants',
          '~components': './components',
          '~apis': './apis',
          '~helpers': './helpers',
          '~redux': './redux',
          '~routes': './routes',
          '~types': './types',
          '~redux': './redux'
        },
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json', '.tsx', '.ts', '.native.js']
      }
    ]
  ]
}
