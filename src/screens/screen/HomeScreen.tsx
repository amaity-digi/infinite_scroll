import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Models from './Models';

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <SafeAreaView style={{ flex: 1 }}>
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

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("InfinityScroll")}>
          <Text>{"Infinity Scroll"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Theme")}>
          <Text>{"Theme Screen"}</Text>
        </TouchableOpacity>

        <Icon name="rocket" size={30} color="#900" />

        <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
        >
          {Platform.OS !== "android" ? " Login with Facebook" : "Login with Insta"}
        </Icon.Button>

        <Image
          source={{ uri: "https://reactnative.dev/assets/images/debugging-rndt-sources-paused-with-device-d1d48a3df5a69d3bf92a16845f0f9c12.jpg" }}
          style={{ width: 390, height: 200 }}
        />


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