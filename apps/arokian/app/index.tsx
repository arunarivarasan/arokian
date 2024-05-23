import { router } from 'expo-router'
import React from 'react'
import { Image, ScrollView, StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/button'
import images from '../constants/images'
const App = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          {/* <Link href="/home" className="text-white">Home</Link> */}
          <View className="relative mt-5">
            <Text className="text-xl text-white font-bold text-center">
              Your Food Health Companion
            </Text>
          </View>
          <Button
            title="Continue with Email"
            handlePress={() => {
              router.push('/history')
            }}
            containerStyles="w-full mt-7"
            textStyles={null}
            isLoading={null}
          />
        </View>
      </ScrollView>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  )
}

export default App
