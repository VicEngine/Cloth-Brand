import { StyleSheet, Text, View,Image, } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
const CreateAccount = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Image source={require('../assets/images/Group03.png')} />
        </View>
           <View position='absolute'style={{top:122, left:30}}>
          <Text style={{fontSize: 50, fontWeight: 'bold',fontFamily:"Raleway"}}>Create {'\n'} Account</Text>
          </View>
          <Image source={require('../assets/images/Group01.png')}/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default CreateAccount

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F2F2F2',
    },
})