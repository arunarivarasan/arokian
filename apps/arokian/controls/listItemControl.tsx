import React from 'react'
import {
  Image,
  ListItem,
  ListItemSubtitle,
  ListItemText,
  ListItemTitle,
  XStack,
  styled
} from 'tamagui'
import images from '../constants/images'

// Styled image container
const ImageWrapper = styled(XStack, {
  marginRight: 10,
  alignItems: 'center',
  justifyContent: 'center'
})

// Custom ListItem component
const ListItemControl = ({ imageSrc, title, subtitle, text, ...props }) => {
  return (
    <ListItem {...props}>
      {imageSrc && (
        <ImageWrapper>
          <Image
            source={images.noImageFound}
            style={{ width: 50, height: 50 }}
          />
        </ImageWrapper>
      )}
      <XStack flexDirection="column">
        {title && <ListItemTitle>{title}</ListItemTitle>}
        {text && <ListItemText>{text}</ListItemText>}
        {subtitle && <ListItemSubtitle>{subtitle}</ListItemSubtitle>}
        {}
      </XStack>
    </ListItem>
  )
}

export default ListItemControl
