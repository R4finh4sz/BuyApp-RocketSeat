import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Image} from 'expo-image';
import type {ShoppingItem} from '@/src/Interfaces/InterfaceShopping';

type ShoppingListItemProps = {
  item: ShoppingItem;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function ShoppingListItem({
  item,
  onToggle,
  onDelete,
}: ShoppingListItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => onToggle(item.id)}>
        <Image
          source={
            item.completed
              ? require('@/src/assets/icons/CheckBoxActive.png')
              : require('@/src/assets/icons/CheckBoxDefault.png')
          }
          style={styles.checkbox}
          contentFit="contain"
        />
        <Text style={[styles.text, item.completed && styles.textCompleted]}>
          {item.name}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onDelete(item.id)}
        style={styles.deleteButton}>
        <Image
          source={require('@/src/assets/icons/Trash.png')}
          style={styles.trashIcon}
          contentFit="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  text: {
    fontSize: 14,
    color: '#333333',
    flex: 1,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#999999',
  },
  deleteButton: {
    padding: 8,
  },
  trashIcon: {
    width: 20,
    height: 20,
  },
});
