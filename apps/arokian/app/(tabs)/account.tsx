import React from 'react'
import { StatusBar } from 'react-native'
import { ProductForm } from '../../components'
import { Container } from '../../tamagui.config'
const Account = () => {
  return (
    // <SafeAreaView className="bg-white h-full">
    <Container>
      <ProductForm />
      <StatusBar barStyle="dark-content" />
    </Container>
  )
}

export default Account
