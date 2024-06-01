import { useRouter } from 'expo-router'
import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProductList } from '../../components'
const History = () => {
  const router = useRouter()
  // const [refreshing, setRefreshing] = React.useState(false)

  // const onRefresh = async () => {
  //   setRefreshing(true);
  //   // new products rest call
  //   setRefreshing(false);
  // }

  const navigateToProduct = (code: string) => {
    router.push(`/(products)/${code}`)
  }

  return (
    <SafeAreaView className="bg-white h-full">
      {/* <Header title="Scan History" enableBackNavigation={false} /> */}
      {/* <FlatList
     data={[{id: 1}, {id:2}, {id:3}]}
     keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
          <ProductListItems />
      )}

    ListEmptyComponent={() => (
      <View className="flex-1 justify-center items-center">
        <NoData title="" subtitle="You haven't scanned any product yet." />
      </View>
    )
    }
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    /> */}
      <ProductList
        onHandlePress={(code: string) => navigateToProduct(code)}
        imageSrc="https://images.openfoodfacts.org/images/products/890/106/302/9309/front_en.20.400.jpg"
      />
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  )
}

export default History
