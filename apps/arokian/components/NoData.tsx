import { router } from 'expo-router'
import { Image, Text, View } from 'react-native'
import Button from '../components/button'
import images from '../constants/images'

const NoData = ({ title, subtitle }) => {
  return (
    <View className="flex justify-center items-center px-4">
      <Image
        source={images.noScanHistory}
        resizeMode="contain"
        className="w-[200px] h-[200px] my-20"
      />

      <Text className="text-sm font-pmedium text-gray">{title}</Text>
      <Text className="text-xl text-center font-psemibold text-black mt-2">
        {subtitle}
      </Text>

      <Button
        title="Scan products"
        handlePress={() => router.push('/scan')}
        containerStyles="w-[300px] my-5"
        textStyles={null}
        isLoading={null}
      />
    </View>
  )
}

export default NoData
