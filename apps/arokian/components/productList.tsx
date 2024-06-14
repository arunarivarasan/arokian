import { ChevronRight } from '@tamagui/lucide-icons'
// import { useRouter } from 'expo-router'
import React from 'react'
import { Separator, Theme, YGroup } from 'tamagui'
import ListItemControl from '../controls/listItemControl'
import { Product } from '../model'

interface ProductListProps {
  onHandlePress: (code: string) => void
  products: Product[]
}

const ProductList = ({ onHandlePress, products }: ProductListProps) => {
  // const router = useRouter()
  return (
    <Theme name="light">
      <YGroup
        alignSelf="center"
        bordered
        width="100%"
        size="$5"
        separator={<Separator />}
      >
        {products.map((product, index) => (
          <YGroup.Item key={index}>
            <ListItemControl
              hoverTheme
              pressTheme
              imageSrc={
                product.productImage ?? 'https://via.placeholder.com/50'
              }
              title={product.name}
              text={product.brand}
              subtitle={product.quality}
              description={product.description}
              iconAfter={ChevronRight}
              onPress={() => onHandlePress(product.code)}
            />
          </YGroup.Item>
        ))}
      </YGroup>
    </Theme>
  )
}

export default ProductList
