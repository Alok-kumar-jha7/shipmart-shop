import { ImageBackground, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Landing = () => {
  const handleGetStarted = () => {
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.backgroundImg}
        resizeMode="cover"
      >
        <View style={styles.contentContainer}>
          <Text style={styles.subtitle}>
            A sleek, user-friendly platform that makes discovering and buying products effortless, fast, and fun.
          </Text>

          <TouchableOpacity onPress={handleGetStarted} style={styles.glassButton}>
            <Text style={styles.glassText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"transparent",
  },
  backgroundImg: {
    flex: 1, 
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 60, 
    alignItems: 'center',
  },
  subtitle: {
    fontFamily: 'outfit',
    fontSize: 20,
    color: '#91dd2eff',
    marginBottom: 240,
    textAlign: 'center',
    opacity: 0.9,
  },
  glassButton: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 25,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    width: '90%',
  },
  glassText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Landing;
