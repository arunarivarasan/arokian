import { Tabs } from 'expo-router'
import { Image, ImageSourcePropType, Text, View } from 'react-native'
import icons from '../../constants/icons'

const TabIcon = ({
  icon,
  name,
  color,
  focused
}: {
  icon: ImageSourcePropType
  name: string
  color: string
  focused: boolean
}) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`text-xs ${
          focused ? 'Poppins-SemiBold' : 'Poppins-Regular'
        }`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  )
}
const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Scan History',
          headerStyle: {
            backgroundColor: '#4CA7E4'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.history}
              color={color}
              focused={focused}
              name="History"
            />
          )
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.scan}
              color={color}
              focused={focused}
              name="Scan"
            />
          )
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Account',
          headerStyle: {
            backgroundColor: '#4CA7E4'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.account}
              color={color}
              focused={focused}
              name="Account"
            />
          )
        }}
      />
    </Tabs>
  )
}

export default TabLayout
