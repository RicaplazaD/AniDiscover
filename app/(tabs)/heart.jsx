import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const Heart = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.animalImage} 
          source={require('../../assets/lion.png')} 
        />
        <View style={styles.textHeartContainer}>
          <Text style={styles.animalText}>Lion</Text>
          <Image style={styles.heartImage} source={require('../../assets/heart2.png')} />
        </View>
      </View>
    </ScrollView>
  );
}

export default Heart;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#B2CCF3',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center', 
    marginBottom: 20, 
    marginTop: 30,
  },
  animalImage: {
    height: 320,
    width: 320,
    borderRadius: 10,
    borderWidth: 5, 
    borderColor: 'white', 
  },
  animalText: {
    marginTop: 10, 
    fontSize: 35, 
    fontWeight: 'bold', 
  },
  textHeartContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 10, 
  },
  heartImage: {
    width: 35, 
    height: 35,
    marginLeft: 180,
    marginTop: 10,
  },
});