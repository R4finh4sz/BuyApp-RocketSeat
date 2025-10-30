import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Image} from 'expo-image';
import {router} from 'expo-router';
import Header from '@/src/components/ui/Header';
import theme from '@/src/Global/theme';
import {RELAXING_SOUNDS} from '@/src/Mock/MockDataRelaxing';

const RelaxingSoundsScreen = () => {
  const handleSoundPress = (sound: string) => {
    console.log(`${sound} pressed`);
    router.push(`/sound-player?sound=${sound}`);
  };

  const handleHelp = () => {
    console.log('Help pressed');
  };

  const renderHeader = () => (
    <View style={styles.logoContainer}>
      <Image
        source={require('@/src/assets/icons/sounds-icon.png')}
        style={styles.icon}
        contentFit="contain"
      />
      <Text style={styles.title}>Sons Relaxantes</Text>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.helpButton} onPress={handleHelp}>
        <Text style={styles.helpIcon}>😊</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}: {item: (typeof RELAXING_SOUNDS)[0]}) => (
    <TouchableOpacity
      style={styles.soundButton}
      onPress={() => handleSoundPress(item.sound)}>
      <Text style={styles.soundButtonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={RELAXING_SOUNDS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <Header
              showBackButton
              BackButtonSource={require('@/src/assets/icons/BackButton.png')}
            />
            {renderHeader()}
          </>
        }
        ListFooterComponent={renderFooter}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50,
    paddingHorizontal: 40,
  },
  icon: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: '#86A0BF',
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  soundButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    paddingVertical: 18,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#86A0BF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
    marginHorizontal: 40,
  },
  soundButtonText: {
    fontSize: 18,
    color: '#0B4892',
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  footerContainer: {
    alignItems: 'flex-end',
    padding: 10,
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

export default RelaxingSoundsScreen;
