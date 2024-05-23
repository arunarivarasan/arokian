import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Header, ProductForm } from '../../components'
const Account = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <Header title="Profile" enableBackNavigation={false} />
      <ProductForm />
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  )
}

export default Account
