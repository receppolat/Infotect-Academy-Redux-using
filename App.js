import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  selectCount
} from './counterSlice'
export default function App() {

  const counter = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => {
          dispatch(decrement())
        }}
        style={{ borderRadius: 30, width: '5%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}
      >
        <Text style={{ color: 'white' }}>
          -
        </Text>
      </TouchableOpacity>

      <Text style={{ marginRight: '5%', marginLeft: '5%' }}>{counter}</Text>
      
      <TouchableOpacity
        onPress={() => {
          dispatch(increment())
        }}
        style={{ borderRadius: 30, width: '5%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}
      >
        <Text>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})