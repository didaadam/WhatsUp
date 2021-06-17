import React from 'react'
import { StyleSheet, Text, View, StatusBar} from 'react-native'
import {A,B} from './Misalkan'
import Nav from './Navigation'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="transparent" translucent showHideTransition={'fade'}/>
      <Nav/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
})