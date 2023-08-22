import React, { ReactNode } from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, View } from 'react-native'
import { theme } from '~constants/theme'
import { Styles } from './Styles'
export interface LayoutWithHeadingProps {
  children: ReactNode
}

const LayoutWithHeading: React.FC<LayoutWithHeadingProps> = ({ children }) => {
  // const navigation = useNavigation<AppScreenNavigationProp>()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.color.white.default }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          flex: 1
        }}
      >
        <KeyboardAvoidingView
          style={Styles.Outer}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={20}
        >
          <View style={{ ...Styles.Container }}>
            <View style={Styles.ContainerBody}>
              <ScrollView style={Styles.Main} contentContainerStyle={Styles.MainChild}>
                {children}
              </ScrollView>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

export default LayoutWithHeading
