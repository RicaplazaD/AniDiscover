import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router'; // Import useRouter

const Carnivores = () => {
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
      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/lion')}>
        <Image style={styles.animalImage} source={require('../assets/lion.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Lion</Text>
      </View>

      {/* Tiger Section */}
      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/tiger')}>
        <Image style={styles.animalImage} source={require('../assets/tiger.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Tiger</Text>
      </View>

      {/* Cheetah Section */}
      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/cheetah')}>
        <Image style={styles.animalImage} source={require('../assets/Cheetah1.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Cheetah</Text>
      </View>

      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/eagle')}>
        <Image style={styles.animalImage} source={require('../assets/eagle.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Eagle</Text>
      </View>

      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/polar')}>
        <Image style={styles.animalImage} source={require('../assets/polar.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Polar Bear</Text>
      </View>

      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/shark')}>
        <Image style={styles.animalImage} source={require('../assets/shark.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Shark</Text>
      </View>
    </ScrollView>
  );
}

export default Carnivores;

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
    marginBottom: 100,
    fontWeight: 'bold',
  },
});