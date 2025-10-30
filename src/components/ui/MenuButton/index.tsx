import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '@/src/Global/theme';

interface MenuButtonProps {
  title: string;
  onPress: () => void;
}

const MenuButton = ({title, onPress}: MenuButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 30,
    paddingVertical: 18,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#7FA8C4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    color: '#4A6B7F',
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
});

export default MenuButton;
