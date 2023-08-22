import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Home } from '~components/templates'
import type { AppStackNavigatorParamList } from './routes'

const Stack = createNativeStackNavigator<AppStackNavigatorParamList>()
export const navigationRef = createNavigationContainerRef<AppStackNavigatorParamList>()

export function navigate(name: any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params as any)
  }
}
export function reset(name: keyof AppStackNavigatorParamList) {
  if (navigationRef.isReady()) {
    navigationRef.reset({ index: 0, routes: [{ name: name }] })
  }
}

// const role = 'rrtm'
// const channel = [EChannel.ONT]

export default function App() {
  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: false }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    </TouchableWithoutFeedback>
  )
}
