import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DeatilsScreen = () => {
  return (
    <View style={[styles.container, {flexDirection: 'row'}]}>
      <View style={{flex: 1, backgroundColor: "red"}}/>
      <View style={{flex: 2, backgroundColor: "green"}}/>
      <View style={{flex: 3, backgroundColor: "blue"}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1
  }
})

export default DeatilsScreen