/**
 * @format
 */
// import { registerRootComponent } from 'expo'
Blob.prototype[Symbol.toStringTag] = 'Blob'
File.prototype[Symbol.toStringTag] = 'File'

import { name as appName } from 'app.json'
import App from 'App.tsx'
import { AppRegistry, NativeModules } from 'react-native'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { store } from '~redux/store'

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true)
}

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => Index)
// registerRootComponent(Index)
