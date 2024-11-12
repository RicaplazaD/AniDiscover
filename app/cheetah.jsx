import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';

const Cheetah = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.animalContainer}>
        <Image style={styles.animalImage} source={require('../assets/Cheetah1.png')} />
        <View style={styles.animalTextContainer}>
          <Text style={styles.animalText}>Cheetah</Text>
          <Image style={styles.heart} source={require('../assets/icons/heart.png')} />
        </View>
        <Text style={styles.animalDescription}>
          -Cheetahs (Acinonyx jubatus) are the fastest land animals, known for their incredible speed and agility.
          Native to various regions of Africa and parts of Iran, cheetahs are easily recognizable by their distinctive black tear stripes running from their eyes to their mouths, which help reduce glare and enhance their focus on prey.
          Adult cheetahs typically weigh between 77 to 143 pounds (35 to 65 kg) and have a slender body built for speed, with long legs and a flexible spine that allows for powerful acceleration.
          Unlike other big cats, cheetahs are diurnal hunters, relying on their exceptional eyesight to spot prey during the day. 
          They primarily hunt small to medium-sized ungulates, such as gazelles and impalas, using a combination of stealth and explosive speed to chase down their target.
          Once they initiate a sprint, cheetahs can reach speeds of up to 75 miles per hour (120 km/h) in just a few seconds, although they can only maintain this speed for short distances.
          Unfortunately, cheetah populations are declining due to habitat loss, human-wildlife conflict, and poaching. 
          Conservation efforts are underway to protect their habitats and ensure their survival in the wild.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Cheetah;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#B2CCF3',
    padding: 20,
  },
  animalContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  animalImage: {
    height: 340,
    width: 340,
    borderRadius: 10,
  },
  animalTextContainer: {
    flexDirection: 'row', // Align text and heart in a row
    alignItems: 'center', // Center vertically
    justifyContent: 'space-between', // Space between items
    width: '100%', // Full width for alignment
  },
  animalText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
  },
  heart: {
    width: 25,
    marginTop: 10,
    height: 25,
    marginLeft: 10, // Space between text and heart
  },
  animalDescription: {
    marginTop: 10,
    textAlign: 'left',
    fontSize: 16,
    lineHeight: 24,
  },
});