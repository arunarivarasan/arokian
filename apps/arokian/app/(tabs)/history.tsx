
import React from 'react'
import { FlatList, RefreshControl, StatusBar, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NoData, ProductListItems } from '../../components'
const History = () => {
  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = async () => {
    setRefreshing(true);
    // new products rest call
    setRefreshing(false);
  }
  return (
    <SafeAreaView className="bg-white h-full">
    <FlatList
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
    />
    <StatusBar barStyle="dark-content" />
  </SafeAreaView>
  )
}

export default History
