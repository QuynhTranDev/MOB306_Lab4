import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PicScreen = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
      setData(data);
      })
      .catch((error)=>{
        console.log('error: ', error);
      })
    }, []);


    const renderItem = ({item}) => {
      return (
        <TouchableOpacity style={styles.itemContanier}>
            <View style={styles.imageContainer}>
            <Image
                source={{ uri: item.thumbnailUrl }}
                style={styles.image}
            />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.id}>id: {item.id}</Text>
                <Text style={styles.titleItem} numberOfLines={3}>title: {item.title}</Text>
            </View>
        </TouchableOpacity>
      )
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Quản lý Album</Text>
      </View>
      <View style={styles.bottom}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item)=>item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  top:{
    flex: 1,
    backgroundColor: '#ffde40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
  },
  bottom:{
    flex: 9,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  itemContanier:{
      borderWidth: 1,
      padding: 10,
      marginBottom: 20,
      flexDirection: 'row',
      elevation: 8,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderRadius: 8,
  },
  imageContainer:{
      marginRight: 8,
  },
  image:{
      width: 100,
      height: 100,
      borderRadius: 30,
  },
  infoContainer:{
      flex: 1,
  },
  id:{
      color: 'black',
      fontSize: 16,
  },
  titleItem:{
      color: 'black',
      fontSize: 16,
  },
})

export default PicScreen