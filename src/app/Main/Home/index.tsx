import {useState} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {Image} from 'expo-image';
import {ShoppingListItem} from '@/src/components/Ui/ShoppingListItem';
import {ShoppingFilter} from '@/src/components/Ui/ShoppingFilter';
import {ShoppingInput} from '@/src/components/Ui/ShoppingInput';
import {EmptyList} from '@/src/components/Ui/EmptyList';
import type {
  ShoppingItem,
  FilterType,
} from '@/src/Interfaces/InterfaceShopping';
import {styles} from './styles';

export default function ShoppingScreen() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState<FilterType>('pending');

  const handleAddItem = () => {
    if (!inputText.trim()) return;

    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name: inputText.trim(),
      completed: false,
    };

    setItems([...items, newItem]);
    setInputText('');
  };

  const handleToggleItem = (id: string) => {
    setItems(
      items.map(item =>
        item.id === id ? {...item, completed: !item.completed} : item,
      ),
    );
  };

  const handleDeleteItem = (id: string) => {
    Alert.alert('Excluir item', 'Deseja realmente excluir este item?', [
      {text: 'Cancelar', style: 'cancel'},
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => setItems(items.filter(item => item.id !== id)),
      },
    ]);
  };

  const handleClearList = () => {
    Alert.alert('Limpar lista', 'Deseja realmente limpar toda a lista?', [
      {text: 'Cancelar', style: 'cancel'},
      {
        text: 'Limpar',
        style: 'destructive',
        onPress: () => setItems([]),
      },
    ]);
  };

  const filteredItems = items.filter(item =>
    filter === 'pending' ? !item.completed : item.completed,
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/src/assets/Logo/Logo.png')}
          style={styles.LogoStyle}
          contentFit="contain"
        />
      </View>

      <ShoppingInput
        value={inputText}
        onChangeText={setInputText}
        onSubmit={handleAddItem}
      />
      <View style={{flex: 1, backgroundColor: '#F6F6F6', borderRadius: 32}}>
        <ShoppingFilter
          activeFilter={filter}
          onFilterChange={setFilter}
          onClear={handleClearList}
        />
        <FlatList
          data={filteredItems}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({item}) => (
            <ShoppingListItem
              item={item}
              onToggle={handleToggleItem}
              onDelete={handleDeleteItem}
            />
          )}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </View>
  );
}
