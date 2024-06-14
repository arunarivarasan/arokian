import React from 'react'
import { Image } from 'tamagui'

interface ProductListProps {
  url: string
}

const ProductImage = ({ url }: ProductListProps) => {
  return (
    <Image
      source={{
        uri: url,
        width: 200,
        height: 200
      }}
      resizeMode="contain"
    />
  )
}

export default ProductImage
