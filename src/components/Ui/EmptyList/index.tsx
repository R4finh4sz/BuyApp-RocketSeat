import theme from '@/src/Global/theme';
import {View, Text, StyleSheet} from 'react-native';

export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nenhum item aqui</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 60,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: theme.COLORS.TEXT_MUTED,
  },
});
