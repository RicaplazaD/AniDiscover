import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const Tiger = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.animalContainer}>
        <Image style={styles.animalImage} source={require('../assets/tiger.png')} />
        <View style={styles.animalTextContainer}>
          <Text style={styles.animalText}>Tiger</Text>
          <Image style={styles.heart} source={require('../assets/icons/heart.png')} />
        </View>
      </View>
      <Text style={styles.animalDescription}>
        -Tigers (Panthera tigris) are the largest wild cats, distinguished by their striking orange coats with unique black stripes that provide effective camouflage in their diverse habitats, which range from tropical forests and grasslands to mangrove swamps.
        Native to Asia, they can be found in countries like India, China, and Indonesia, where they primarily inhabit areas with abundant prey.
        Adult tigers typically weigh between 220 to 660 pounds (100 to 300 kg), with males being significantly larger than females.
        These solitary predators are expert hunters, relying on their exceptional strength, agility, and stealth to ambush prey, predominantly large ungulates such as deer, wild boar, and water buffalo.
        Tigers are also known for their powerful vocalizations; their roar can be heard up to 2 miles (3 km) away, serving as a means of communication and territorial marking.
        Their social structure is largely solitary, although they may come together during mating season or when a mother is raising her cubs.
        A typical litter consists of 2 to 4 cubs, which are born blind and depend on their mother for survival during their early months.
        Unfortunately, tigers face significant threats from habitat destruction due to deforestation and human encroachment, as well as poaching driven by demand for their fur and body parts in traditional medicine.
        This has led to a dramatic decline in tiger populations, with some subspecies, like the Caspian tiger and the Javan tiger, already extinct. Tigers are currently classified as endangered by the International Union for Conservation of Nature (IUCN), prompting global conservation initiatives aimed at habitat protection, anti-poaching measures, and raising awareness about the importance of preserving these magnificent creatures.
        Efforts like the Global Tiger Initiative and various protected areas are crucial in ensuring a future for tigers in the wild, emphasizing the need for ongoing commitment to their conservation.
      </Text>
    </ScrollView>
  );
};

export default Tiger;

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
    textAlign: 'left', // Align text to the left
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