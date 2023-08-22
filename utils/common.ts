/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dimensions } from 'react-native'

export const clsx = (styles: object, customs: Record<string, boolean>) => {
  const stylesCustom = Object.entries(customs)
    .filter(([_, value]) => value)
    .reduce((contain, item) => {
      const style = JSON.parse(item[0])
      return { ...contain, ...style }
    }, {})
  return { ...styles, ...stylesCustom }
}

const { width, height } = Dimensions.get('window')
export const SCREEN_WIDTH = width < height ? width : height
export const SCREEN_HEIGHT = width < height ? height : width

const getDivByWidth = (SCREEN_WIDTH: number) => {
  if (SCREEN_WIDTH < 500) {
    return 800
  } else {
    if (SCREEN_WIDTH < 1080) {
      return 1024
    }
    return 2000
  }
}
export const scalePoint = (num: number) => {
  const { width, height } = Dimensions.get('window')
  const SCREEN_WIDTH = width < height ? width : height
  const SCREEN_HEIGHT = width < height ? height : width
  return (SCREEN_HEIGHT / getDivByWidth(SCREEN_WIDTH)) * num
}
