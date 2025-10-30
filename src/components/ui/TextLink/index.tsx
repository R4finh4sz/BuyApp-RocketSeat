import theme from '@/src/Global/theme';
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface TextLinkProps {
  text: string;
  onPress: () => void;
}

export default function TextLink({text, onPress}: TextLinkProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: theme.COLORS.BLUE_DARK,
    fontFamily: theme.FONT_FAMILY.LIGHT,
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
