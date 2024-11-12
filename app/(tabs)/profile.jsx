import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={require('../../assets/sqwert.png')} />
      <Text style={styles.profileText}>Dave Ricaplaza</Text>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#B2CCF3', // Optional: background color
  },
  profileImage: {
    width: 150, // Set desired width
    height: 150, // Set desired height
    borderRadius: 100, // Make it a circle
    marginBottom: 20, // Space between image and text
  },
  profileText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 280,
  },
});