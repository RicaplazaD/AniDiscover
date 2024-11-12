import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greetingText}>
        Hello, Welcome <Image style={styles.wavingImage} source={require('../../assets/wave 1.png')} />
      </Text>
      <Text style={styles.nameText}>Dave Z Ricaplaza</Text>

      <Text style={styles.aboutText}>Want to know about?</Text>
      <View style={styles.linksContainer}>
        <Link style={styles.buttonStyle} href="/carnivores">Carnivores</Link>
        <Link style={styles.buttonStyle} href="/herbivores">Herbivores</Link>
        <Link style={styles.buttonStyle} href="/omnivores">Omnivores</Link>
        <Link style={styles.buttonStyle} href="/produces">Produces</Link>
        <Link style={styles.buttonStyle} href="/decomposer">Decomposer</Link>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Use flexGrow to ensure the ScrollView expands
    justifyContent: 'left',
    alignItems: 'flex-start', // Align items to the left
    backgroundColor: '#B2CCF3',
    padding: 40,
  },
  greetingText: {
    textAlign: 'left',
    alignSelf: 'flex-start', // Ensure the text aligns to the left
  },
  wavingImage: {
    width: 16,
    height: 16,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 5,
  },
  aboutText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'left',
  },
  linksContainer: {
    alignItems: 'flex-start', // Align links to the left
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: '#5C9DFF',
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 40,
    height: 60,
    width: '100%', // Full width for buttons
    padding: 10,
    fontSize: 28,
    fontWeight: '600',
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
});