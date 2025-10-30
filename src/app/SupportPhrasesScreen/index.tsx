import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {router} from 'expo-router';
import Header from '@/src/components/ui/Header';
import theme from '@/src/Global/theme';
import Ionicons from '@expo/vector-icons/Ionicons';

const SupportPhrasesScreen = () => {
  const handlePlayAudio = () => {
    console.log('Play audio pressed');
  };

  const handleHelp = () => {
    console.log('Help pressed');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      overScrollMode="never">
      <Header
        userName="nome"
        onProfilePress={() => router.push('/profile')}
        avatarSource={require('@/src/assets/icons/ProfileImage.png')}
      />

      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Palavras de</Text>
        <Text style={styles.title}>afirmação</Text>

        <View style={styles.audioContainer}>
          <TouchableOpacity style={styles.playButton} onPress={handlePlayAudio}>
            <Ionicons name="volume-high" size={60} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.helpButton} onPress={handleHelp}>
          <Text style={styles.helpIcon}>😊</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 36,
    color: '#86A0BF',
    fontFamily: theme.FONT_FAMILY.Agbalumo,
    textAlign: 'center',
    lineHeight: 45,
  },
  audioContainer: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#5B94D3',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 12,
  },
  footerContainer: {
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingBottom: 20,
  },
  helpButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#7FA8C4',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  helpIcon: {
    fontSize: 32,
  },
});

export default SupportPhrasesScreen;
