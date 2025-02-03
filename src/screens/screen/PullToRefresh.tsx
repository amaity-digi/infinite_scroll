import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'

const initialData = Array.from({length: 20}, (_, index) =>({
    id: index.toString(),
    title: `Digital AI - ${index + 1}`
}))
const PullToRefresh = () => {
    const [dataList, setDataList] = useState(initialData);
    const [loading, setLoading] = useState(false);

    const renderItem = ({item}: {item: {id: string, title: string}}) => (
     <View style={styles.item}>
        <Text>{item.title}</Text>
     </View>
    )

    const loadMoreItem = () => {
     if(!loading){
        setLoading(true);
        setTimeout(() => {
          const newData = Array.from({length: 10}, (_, index) => ({
            id: (dataList.length + index).toString(),
            title: `Digital AI = ${dataList.length + index + 1}`
          }))
          setDataList([...dataList, ...newData]);
          setLoading(false);
        }, 1000)
     }
    }

   console.log("dataList11111", dataList)
  return (
    <View style={styles.container}>
      <Text>{"Large Data with pull to refresh and infinite scroll"}</Text>
      <FlatList 
      data= {dataList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReached={loadMoreItem}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        loading ? <ActivityIndicator size="large" color={"#00ff00"}/> : null
      }
     />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        // borderBottomColor: "#eee"
    }
})
export default PullToRefresh