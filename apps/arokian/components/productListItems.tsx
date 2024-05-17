import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import images from '../constants/images'

const ProductListItems = ({onPress, containerStyles }) => {
  return (
    <TouchableOpacity onPress={onPress}>
   <View className='flex-row h-[100px] p-4'>
      <View className='basis-1/4'>
      <Image
        source={images.noImageFound}
        className="w-full h-full"
        resizeMode="contain"
      />
      </View>
      <View className='basis-3/4'>
        <View className='basis-3/4'>
          <Text>Product Name</Text>
          <Text>Brand</Text>
          <Text>Score</Text>
        </View>
      </View>
   </View>
   </TouchableOpacity>
  )
}

export default ProductListItems
