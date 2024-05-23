import React from 'react'
// import { SafeAreaView, View } from 'react-native'
// import Header from '../../components/header'
import { Stack } from 'expo-router'
const ProductLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="[code]" options={{ headerShown: false }} />
    </Stack>
  )
}

export default ProductLayout
