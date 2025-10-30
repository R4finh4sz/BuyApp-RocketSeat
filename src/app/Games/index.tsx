import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Image} from 'expo-image';
import {router} from 'expo-router';
import Header from '@/src/components/ui/Header';
import theme from '@/src/Global/theme';
import {GAMES_LIST} from '@/src/Mock/MockDataGames';

const GamesScreen = () => {
  const handleGamePress = (route: string) => {
    console.log(`${route} pressed`);
    router.push(route);
  };

  const handleHelp = () => {
    console.log('Help pressed');
  };

  const renderHeader = () => (
    <View style={styles.logoContainer}>
      <Image
        source={require('@/src/assets/icons/Games-icon.png')}
        style={styles.icon}
        contentFit="contain"
      />
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.helpButton} onPress={handleHelp}>
        <Text style={styles.helpIcon}>😊</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}: {item: (typeof GAMES_LIST)[0]}) => (
    <TouchableOpacity
      style={styles.gameButton}
      onPress={() => handleGamePress(item.route)}>
      <Text style={styles.gameButtonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={GAMES_LIST}
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
  },
  title: {
    fontSize: 32,
    color: '#86A0BF',
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  gameButton: {
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
  gameButtonText: {
    fontSize: 16,
    color: '#0B4892',
    fontFamily: theme.FONT_FAMILY.BOLD,
    textAlign: 'center',
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

export default GamesScreen;
