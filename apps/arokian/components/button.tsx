import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity  onPress={handlePress} activeOpacity={0.7}
    className={`bg-blue-400 rounded-xl min-h-[62px] justify-center items-center
    ${containerStyles} ${isLoading ? 'opacity-50' : ''}`} disabled={isLoading}>
      <Text className={`bg-transparent font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
