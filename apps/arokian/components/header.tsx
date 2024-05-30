import { ChevronLeft } from '@tamagui/lucide-icons'
import { router } from 'expo-router'
import React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { Button, H4, styled } from 'tamagui'

// Calculate status bar height based on platform
const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0

// Calculate header height
const headerHeight = 50 + statusBarHeight

const HeaderContainer = styled(View, {
  paddingTop: statusBarHeight, // Adjust for status bar
  height: headerHeight,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
  marginHorizontal: 10, // Add margin horizontally
  borderRadius: 10, // Add border radius for rounded corners
  overflow: 'hidden' // Ensure border radius is applied properly
})

const BackButton = styled(Button, {
  marginRight: 10,
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000',
  fontSize: 30
})

const HeaderText = styled(H4, {
  fontSize: 18,
  fontWeight: 'bold',
  flex: 1,
  textAlign: 'center',
  color: '#000',
  paddingHorizontal: 10 // Add padding horizontally
})

const Header = ({ title, enableBackNavigation = true }) => {
  return (
    <HeaderContainer>
      {enableBackNavigation ? (
        <BackButton
          onPress={() => router.back()}
          icon={ChevronLeft}
          chromeless
        ></BackButton>
      ) : null}
      <HeaderText>{title}</HeaderText>
      <View style={{ width: 60 }}></View>
    </HeaderContainer>
  )
}

export default Header
