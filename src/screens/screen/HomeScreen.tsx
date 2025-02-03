import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Models from './Models'

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <SafeAreaView style={{flex: 1}}>
    <View>
      <Text>{"HomeScreen"}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Details")}>
        <Text>{"Go to Details Page"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(!modalVisible)}>
        <Text>{"Show Model"}</Text>
      </TouchableOpacity>

      {modalVisible && <Models setModalVisible={setModalVisible} modalVisible={modalVisible} />}

      <TouchableOpacity onPress={() => navigation.navigate("InfinityScroll")}>
        <Text>{"Infinity Scroll"}</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  btn: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    minWidth: 250,
    marginTop: 20
  }
})

export default HomeScreen