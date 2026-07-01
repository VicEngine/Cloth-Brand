import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import User from '../screen/User'
import Home from '../screen/Home'
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})