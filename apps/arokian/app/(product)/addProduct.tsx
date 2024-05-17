import { useRealm } from '@realm/react'
import React from 'react'
import { Text, View } from 'react-native'

const addProduct = () => {
  const realm = useRealm()

  const handleAddProduct = () => {
    realm.write(() => {
      realm.create('Product', {
        name: 'Test Product',
        brand: 'Test Brand',
        category: 'Test Category',
        code: 'Test Code',
        image: 'Test Image',
        ingredientsImage: 'Test Ingredients Image',
        user_id: 'Test User ID'
      })
    })
  }

  return (
    <View>
      <Text>addProduct</Text>
    </View>
  )
}

export default addProduct
