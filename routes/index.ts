import { RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type TTractList = 'oft_contracts_hunter'
export type AppStackNavigatorParamList = {
  // AuthScreen: NavigatorScreenParams<AuthStackNavigatorParamList>;
  Home: {}
}

// export type AppScreenNavigationProp = CompositeNavigationProp<
//   NativeStackNavigationProp<AppStackNavigatorParamList>,
//   // NativeStackNavigationProp<HomeStackNavigatorParamList>
// >
export type AppScreenNavigationProp = NativeStackNavigationProp<AppStackNavigatorParamList>
export type AppScreenRouterProps<RouteName extends keyof AppStackNavigatorParamList> = RouteProp<
  AppStackNavigatorParamList,
  RouteName
>
