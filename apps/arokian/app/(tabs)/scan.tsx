import { Camera, CameraType } from 'expo-camera'
import { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

const Scan = () => {
  const [type, setType] = useState(CameraType.back)
  const [permission, requestPermission] = Camera.useCameraPermissions()

  if (!permission) {
    // Camera permissions are still loading
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View className="flex flex-col justify-center">
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  function toggleCameraType() {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    )
  }

  return (
    <View className="flex justify-center">
      <Camera className="flex-1" type={type}>
        <View className="flex flex-row bg-transparent m-64">
          <TouchableOpacity onPress={toggleCameraType}>
            <Text>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}

export default Scan
