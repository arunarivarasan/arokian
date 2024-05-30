import React, { useEffect, useMemo, useState } from 'react'
import {
  Button,
  Form,
  Input,
  Label,
  Spinner,
  Theme,
  XStack,
  YStack
} from 'tamagui'
import PRODUCT_CATEGORIES from '../constants/productCategory'
import { SelectControl } from '../controls'

const ProductForm = () => {
  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>(
    'off'
  )

  const categoryList = useMemo(() => {
    return Object.keys(PRODUCT_CATEGORIES).map(category => ({ name: category }))
  }, [])
  useEffect(() => {
    if (status === 'submitting') {
      const timer = setTimeout(() => setStatus('off'), 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [status])
  return (
    <Theme name="light">
      <Form
        alignItems="center"
        minWidth={300}
        gap="$2"
        onSubmit={() => setStatus('submitting')}
        borderWidth={1}
        borderRadius="$4"
        backgroundColor="white"
        borderColor="$borderColor"
        padding="$8"
      >
        <YStack
          width="100%"
          minHeight={250}
          overflow="hidden"
          space="$2"
          margin="$3"
          padding="$2"
        >
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="name">
              Name
            </Label>
            <Input flex={1} id="name" />
          </XStack>
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="brand">
              Brand
            </Label>
            <Input flex={1} id="brand" />
          </XStack>
          <XStack alignItems="center" gap="$4">
            <Label htmlFor="select-demo-1" flex={1} minWidth={80}>
              Category
            </Label>
            <SelectControl
              id="select-demo-1"
              name="Category"
              items={categoryList}
            />
          </XStack>
        </YStack>

        <Form.Trigger asChild disabled={status !== 'off'}>
          <Button
            icon={status === 'submitting' ? () => <Spinner /> : undefined}
          >
            Submit
          </Button>
        </Form.Trigger>
      </Form>
    </Theme>
  )
}

export default ProductForm
