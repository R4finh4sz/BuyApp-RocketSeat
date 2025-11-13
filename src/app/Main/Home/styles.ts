import theme from '@/src/Global/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND_PRIMARY,
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },
  LogoStyle: {
    width: 120,
    height: 120,
  },
  listContent: {
    paddingHorizontal: 16,
    flexGrow: 1,
  },
});
