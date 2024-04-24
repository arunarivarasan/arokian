import React from 'react'
import { SafeAreaView, StatusBar, Text } from 'react-native'

const Account = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <Text className='px-4'>Account</Text>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  )
}

export default Account
