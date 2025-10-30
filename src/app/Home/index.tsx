import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Image} from 'expo-image';
import {router} from 'expo-router';
import Header from '@/src/components/ui/Header';
import theme from '@/src/Global/theme';
import {MENU_ITEMS} from '@/src/Mock/MockDataMenuItens';

const Home = () => {
  const handleMenuPress = (route: string) => {
    router.push(route);
  };

  const handleProfile = () => {
    router.push('/profile');
  };

  const handleHelp = () => {
    router.push('/help');
  };

  const renderHeader = () => (
    <>
      <Header
        userName="Rafael"
        onProfilePress={handleProfile}
        avatarSource={require('@/src/assets/icons/ProfileImage.png')}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('@/src/assets/Logo/LogotipoPng.png')}
          style={styles.logo}
          contentFit="contain"
        />
      </View>
    </>
  );

  const renderFooter = () => (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.helpButton} onPress={handleHelp}>
        <Text style={styles.helpIcon}>😊</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}: {item: (typeof MENU_ITEMS)[0]}) => (
    <MenuButton
      title={item.title}
      onPress={() => handleMenuPress(item.route)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      />
    </View>
  );
};

const MenuButton = ({title, onPress}: {title: string; onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.menuButton} onPress={onPress}>
      <Text style={styles.menuButtonText}>{title}</Text>
    </TouchableOpacity>
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
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  logo: {
    width: 200,
    height: 200,
  },
  menuButton: {
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
  menuButtonText: {
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

export default Home;
