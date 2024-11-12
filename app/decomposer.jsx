import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router'; // Import useRouter

const Decomposer = () => {
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
      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/mushrooms')}>
        <Image style={styles.animalImage} source={require('../assets/fungi.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Mushrooms</Text>
      </View>

      {/* Tiger Section */}
      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/bacteria')}>
        <Image style={styles.animalImage} source={require('../assets/bacteria.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Bacteria</Text>
      </View>

      {/* Cheetah Section */}
      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/earthworm')}>
        <Image style={styles.animalImage} source={require('../assets/earthworm.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Earthworm</Text>
      </View>

      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/slug')}>
        <Image style={styles.animalImage} source={require('../assets/slug.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Slug</Text>
      </View>

      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/millipede')}>
        <Image style={styles.animalImage} source={require('../assets/millipede.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Millipede</Text>
      </View>

      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/springtails')}>
        <Image style={styles.animalImage} source={require('../assets/springtails.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Springtails</Text>
      </View>
    </ScrollView>
  ); 
}

export default Decomposer;

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