import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { H4, Label, ListItem, ScrollView, YGroup, YStack } from 'tamagui'
import ProductImage from '../../components/productImage'
import { useProduct } from '../../services/queries'
import { Container } from '../../tamagui.config'
const Product = () => {
  const { code } = useLocalSearchParams<{ code: string }>()
  const { isPending, error, data, isFetching } = useProduct(code ?? '')

  if (isPending) {
    return (
      <Container>
        <H4>Loading...</H4>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <H4>An error has occurred: {error.message}</H4>
      </Container>
    )
  }

  return (
    <ScrollView maxHeight="100%">
      <YStack flex={1} space="$2" padding="$2">
        <YGroup>
          <YGroup.Item>
            <ListItem
              title={data.name}
              size="$8"
              padding="$4"
              subTitle={data.brand}
            />
          </YGroup.Item>
        </YGroup>
        <YStack
          height={200}
          backgroundColor="#eaf5fc"
          padding="$2"
          alignItems="center"
          justifyContent="center"
        >
          <ProductImage url={data.product_image_url} />
        </YStack>
        {/* Brand Name Row */}

        <YStack padding="$4" flex={1}>
          <Label width={90} size="$5" htmlFor="ingredients">
            Ingredients
          </Label>
          <H4>{data.ingredients_text}</H4>
        </YStack>
        <YStack padding="$4" flex={1}>
          <Label width={90} size="$5" htmlFor="additives">
            Additives
          </Label>
          <H4>{data.additives}</H4>
        </YStack>
        <YStack padding="$4" flex={1}>
          <Label width={90} size="$5" htmlFor="allergens">
            allergens
          </Label>
          <H4>{data.allergens}</H4>
        </YStack>
      </YStack>
    </ScrollView>
  )
}

export default Product
