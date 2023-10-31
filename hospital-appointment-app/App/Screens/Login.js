import { View, Text, Image } from 'react-native'
import React from 'react'
import Hospital from '../../assets/donation.png'

export default function Login() {
  return (
    <View>
      <Image source={Hospital} style={{width:300, height:400}}/>
    </View>
  )
}