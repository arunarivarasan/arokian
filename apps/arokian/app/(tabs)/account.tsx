import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { ProductForm } from '../../components'
const Account = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ProductForm />
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  )
}

export default Account
