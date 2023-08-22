declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  export const content: React.FC<SvgProps> & SvgProps
  export default content
}

declare module '@env' {
  export const BACKEND_NODE_API_ENDPOINT: string
  export const GOOGLE_MAPS_APIKEY: string
}

declare module '*.jpg'
declare module '*.png'
