import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'expo-image';
import {router} from 'expo-router';
import theme from '@/src/Global/theme';

interface HeaderProps {
  userName?: string;
  avatarSource?: any;
  BackButtonSource?: any;
  onProfilePress?: () => void;
  showBackButton?: boolean;
  title?: string;
}

const Header = ({
  userName,
  avatarSource,
  onProfilePress,
  BackButtonSource,
  showBackButton = false,
  title,
}: HeaderProps) => {
  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.header}>
      {showBackButton ? (
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <View style={styles.backIconContainer}>
            <Image
              source={BackButtonSource}
              style={styles.avatar}
              contentFit="cover"
            />
          </View>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onProfilePress} style={styles.profileButton}>
          {avatarSource ? (
            <Image
              source={avatarSource}
              style={styles.avatar}
              contentFit="cover"
            />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
          )}
        </TouchableOpacity>
      )}

      <Text style={styles.welcomeText}>
        {title || (userName ? `Bem vindo, ${userName}` : '')}
      </Text>

      <View style={styles.headerSpacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#86A0BF',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 20,
  },
  backIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  backIcon: {
    fontSize: 24,
    color: '#86A0BF',
    fontWeight: 'bold',
  },
  backText: {
    fontSize: 16,
    color: theme.COLORS.WHITE,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginTop: 20,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarPlaceholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
  },
  avatarText: {
    fontSize: 24,
  },
  welcomeText: {
    fontSize: 18,
    marginTop: 20,
    color: theme.COLORS.WHITE,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  headerSpacer: {
    width: 50,
  },
});

export default Header;
