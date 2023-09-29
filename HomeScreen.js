import { Button, View } from 'react-native'
import React from 'react'


const HomeScreen = ({ navigation }) => {
  return (
    <View>
          <Button title='Chuyển màn hình' onPress={() => {navigation.navigate('Profile', { name: 'Long', tuoi: 20, mssv: 'PH11131' })}}/>
          <Button title="New Screen" onPress={() => navigation.navigate('New')} />
          <Button title="Pic Screen" onPress={() => navigation.navigate('Pic')} />
    </View>

  )
}

export default HomeScreen;