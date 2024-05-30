import { ChevronRight } from '@tamagui/lucide-icons'
// import { useRouter } from 'expo-router'
import React from 'react'
import { Separator, Theme, YGroup } from 'tamagui'
import ListItemControl from '../controls/listItemControl'

interface ProductListProps {
  onHandlePress: (code: string) => void
}

const ProductList = ({ onHandlePress }: ProductListProps) => {
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
        <YGroup.Item>
          <ListItemControl
            hoverTheme
            pressTheme
            imageSrc="https://via.placeholder.com/50"
            title="Parle-G"
            text="Britannia"
            subtitle="Poor"
            description="John is a software engineer with 5 years of experience in full-stack development."
            iconAfter={ChevronRight}
            onPress={() => onHandlePress('8901063029309')}
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItemControl
            hoverTheme
            pressTheme
            imageSrc="https://via.placeholder.com/50"
            title="Marie Gold"
            text="Britannia"
            subtitle="Average"
            description="John is a software engineer with 5 years of experience in full-stack development."
            iconAfter={ChevronRight}
          />
        </YGroup.Item>
      </YGroup>
    </Theme>
  )
}

export default ProductList
