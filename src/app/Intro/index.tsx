import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '@/src/components/Button';
import TextLink from '@/src/components/TextLink';
import {Image} from 'expo-image';

const Intro = () => {
  const handleLogin = () => {
    console.log('Entrar pressed');
  };

  const handleTerms = () => {
    console.log('Termos de uso pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('@/src/assets/Logo/LogotipoPng.png')}
          style={styles.logo}
          contentFit="contain"
        />
        <Button title="ENTRAR" onPress={handleLogin} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Criar conta" onPress={handleLogin} />
      </View>

      <View style={styles.footerContainer}>
        <TextLink text="Termos de uso" onPress={handleTerms} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E5C0',
    justifyContent: 'space-between',
    paddingVertical: 60,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
  logo: {
    width: '60%',
    aspectRatio: 1,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    marginBottom: 40,
  },
  footerContainer: {
    alignItems: 'center',
    gap: 8,
  },
});

export default Intro;
