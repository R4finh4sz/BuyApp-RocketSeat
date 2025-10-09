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
    color: '#B8A6D9',
    fontSize: 20,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
});
