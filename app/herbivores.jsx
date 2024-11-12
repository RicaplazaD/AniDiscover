import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router'; // Import useRouter

const Herbivores = () => {
  const router = useRouter(); // Get the router instance

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
        />
      </View> 

      {/* Lion Section */}
      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/deer')}>
        <Image style={styles.animalImage} source={require('../assets/deer.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Deer</Text>
      </View>

      {/* Tiger Section */}
      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/rabbit')}>
        <Image style={styles.animalImage} source={require('../assets/rabbit.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Rabbit</Text>
      </View>

      {/* Cheetah Section */}
      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/elephant')}>
        <Image style={styles.animalImage} source={require('../assets/elephant.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Elephant</Text>
      </View>

      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/panda')}>
        <Image style={styles.animalImage} source={require('../assets/panda.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Giant panda</Text>
      </View>

      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/horse')}>
        <Image style={styles.animalImage} source={require('../assets/horse.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Horse</Text>
      </View>

      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/goat')}>
        <Image style={styles.animalImage} source={require('../assets/goat.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Goat</Text>
      </View>
    </ScrollView>
  );
}

export default Herbivores;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#B2CCF3',
    padding: 20,
  },
  animalContainer: {
    marginBottom: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  animalImage: {
    height: 320,
    width: 320,
    borderRadius: 10,
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 20,
    width: 340,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  linksContainer: {
    alignItems: 'flex-start',
    marginTop: 0,
  },
  buttonStyle: {
    fontSize: 35,
    textAlign: 'left',
    marginBottom: 20,
    fontWeight: 'bold',
    marginBottom: 100,
  },
});