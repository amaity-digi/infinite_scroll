import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Product = ({navigation}) => {
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>{"Product"}</Text>

        </TouchableOpacity>
      
    </View>
  )
}

export default Product