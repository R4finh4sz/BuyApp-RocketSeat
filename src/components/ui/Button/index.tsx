import theme from '@/src/Global/theme';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({title, onPress}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#D9D9D9',
    borderWidth: 2,
    borderColor: '#86A0BF',
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.COLORS.BLUE_DARK,
    fontSize: 25,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    letterSpacing: 1,
  },
});
