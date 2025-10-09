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
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#B8A6D9',
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#B8A6D9',
    fontSize: 25,
    fontWeight: '500',
    letterSpacing: 1,
  },
});
