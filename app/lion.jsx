import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const Lion = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.animalContainer}>
        <Image style={styles.animalImage} source={require('../assets/lion.png')} />
        <View style={styles.animalTextContainer}>
          <Text style={styles.animalText}>Lion</Text>
          <Image style={styles.heart} source={require('../assets/icons/heart.png')} />
        </View>
        <Text style={styles.animalDescription}>
          -Lions (Panthera leo) are iconic big cats that primarily inhabit sub-Saharan Africa and a small population in the Gir Forest of India.
          Known for their striking social structure, lions live in groups called prides, which typically consist of several related females, their cubs, and a few dominant males.
          Adult males weigh between 330 to 550 pounds (150 to 250 kg) and are easily identified by their impressive manes, which can vary in color and size, reflecting their health and genetic fitness. 
          These powerful predators are primarily nocturnal hunters, preying on large herbivores such as wildebeest, zebras, and buffalo, and they often employ cooperative hunting strategies, allowing them to take down prey larger than themselves.
          Lions communicate through a variety of vocalizations, including roars, growls, and grunts, with their roars being capable of being heard up to 5 miles (8 km) away, serving to establish territory and coordinate within the pride. Their social dynamics are fascinating, with females often forming strong bonds and sharing responsibilities in rearing cubs, while males defend the pride's territory from rival males.
          Cubs, born blind and dependent, start to eat solid food around three months but continue nursing for about six months.
          Unfortunately, lions face significant threats, including habitat loss due to agriculture and urban development, human-wildlife conflict, and poaching for their body parts and trophies. 
          These factors have led to a notable decline in their populations, resulting in their classification as vulnerable by the International Union for Conservation of Nature (IUCN). 
          Conservation efforts are critical to protecting their habitats, promoting coexistence with human communities, and ensuring the long-term survival of this majestic species in the wild.
          Initiatives include creating protected areas, anti-poaching measures, and community education programs that raise awareness about the importance of lions in the ecosystem.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Lion;

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
    justifyContent: 'space-between', // Add space between items
    width: '100%', // Full width for alignment
  },
  animalText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
  },
  heart: {
    width: 25,
    height: 25,
    marginLeft: 10, // Optional: Space between text and heart
    marginTop: 10,

  },
  animalDescription: {
    marginTop: 10,
    textAlign: 'left', // Adjust text alignment
    fontSize: 16,
    lineHeight: 24,
  },
});