import React from 'react'
import { SafeAreaView, StatusBar, Text } from 'react-native'

const Scan = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <Text className='px-4'>Scan</Text>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  )
}

export default Scan
