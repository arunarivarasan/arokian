import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { H4 } from 'tamagui'
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
    <Container>
      <H4>{data.brand}</H4>
      <H4>{isFetching ? 'Updating...' : ''}</H4>
    </Container>
  )
}

export default Product
