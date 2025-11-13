import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Image} from 'expo-image';
import type {FilterType} from '@/src/Interfaces/InterfaceShopping';
import theme from '@/src/Global/theme';

type ShoppingFilterProps = {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onClear: () => void;
};

export function ShoppingFilter({
  activeFilter,
  onFilterChange,
  onClear,
}: ShoppingFilterProps) {
  return (
    <View style={styles.container}>
      <View style={styles.filtersWrapper}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === 'pending' && styles.filterButtonActive,
          ]}
          onPress={() => onFilterChange('pending')}>
          <Image
            source={require('@/src/assets/icons/CheckBoxDefault.png')}
            style={[
              styles.checkbox,
              activeFilter === 'pending' && styles.checkboxActive,
            ]}
            contentFit="contain"
          />
          <Text
            style={[
              styles.filterText,
              activeFilter === 'pending' && styles.filterTextActive,
            ]}>
            Pendentes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === 'completed' && styles.filterButtonActive,
          ]}
          onPress={() => onFilterChange('completed')}>
          <Image
            source={require('@/src/assets/icons/CheckBoxActive.png')}
            style={[
              styles.checkbox,
              activeFilter === 'completed' && styles.checkboxActive,
            ]}
            contentFit="contain"
          />
          <Text
            style={[
              styles.filterText,
              activeFilter === 'completed' && styles.filterTextActive,
            ]}>
            Comprados
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.clearButton} onPress={onClear}>
        <Text style={styles.clearText}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 16,
    borderBottomColor: '#E4E6EC',
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  filtersWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    transform: [{scale: 1}],
  },
  filterButtonActive: {
    transform: [{scale: 1.1}],
  },
  checkbox: {
    width: 15,
    height: 15,
    marginRight: 6,
  },
  checkboxActive: {
    width: 18,
    height: 18,
  },
  filterText: {
    fontSize: 12,
    color: theme.COLORS.TEXT_MUTED,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
  filterTextActive: {
    fontSize: 12,
    color: theme.COLORS.TEXT_CONTRAST,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
  clearButton: {
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  clearText: {
    fontSize: 12,
    color: theme.COLORS.TEXT_MUTED,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
});
