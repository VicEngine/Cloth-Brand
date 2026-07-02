import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Wishlist = () => {
  return (
    <View style={styles.container}>

        <Text style={{fontSize:50,color:"#202020",fontWeight:"bold"
        }}>
        Wishlist
      </Text>

    </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F9F9F9",
    
  }  
})