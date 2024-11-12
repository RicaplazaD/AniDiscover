import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router'; // Import useRouter

const Omnivores = () => {
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
      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/hedgehog')}>
        <Image style={styles.animalImage} source={require('../assets/hedgehog.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Hedgehog</Text>
      </View>

      {/* Tiger Section */}
      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/chimp')}>
        <Image style={styles.animalImage} source={require('../assets/chimp.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Chimpanzee</Text>
      </View>

      {/* Cheetah Section */}
      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/badger')}>
        <Image style={styles.animalImage} source={require('../assets/badger.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Badger</Text>
      </View>

      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/piranha')}>
        <Image style={styles.animalImage} source={require('../assets/piranha.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Piranha</Text>
      </View>

      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/squirrel')}>
        <Image style={styles.animalImage} source={require('../assets/squirrel.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Squirrel</Text>
      </View>

      <TouchableOpacity style={styles.animalContainer} onPress={() => router.push('/crow')}>
        <Image style={styles.animalImage} source={require('../assets/crow.png')} />
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.buttonStyle}>Crow</Text>
      </View>
    </ScrollView>
  );
}

export default Omnivores;

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