import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 30,flexDirection:"row",gap:10,alignItems:"center" }}>
        <Text style={styles.tag}>
          Shop
        </Text>
        <View style={{ backgroundColor: "#F8F8F8", width: "80%", height: 50, borderRadius: 30, justifyContent: "space-between", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, }}>
          <TextInput
          placeholder='Search'
          placeholderTextColor={'#C7C7C7'}
          style={{fontSize:16,fontWeight:"medium",flex:1}}
          />
          <TouchableOpacity>
          <Image source={require('../assets/icons/cam.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    padding: 20,
  },
  tag: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#202020"
  },
})