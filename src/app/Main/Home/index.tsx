import {useState} from 'react';
import {
  View,
  FlatList,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Image} from 'expo-image';
import {ShoppingListItem} from '@/src/components/Ui/ShoppingListItem';
import {ShoppingFilter} from '@/src/components/Ui/ShoppingFilter';
import {ShoppingInput} from '@/src/components/Ui/ShoppingInput';
import {EmptyList} from '@/src/components/Ui/EmptyList';
import type {
  FilterType,
  ShoppingItem,
} from '@/src/Interfaces/InterfaceShopping';
import {useShoppingStorage} from '@/src/hooks/useShoppingStorage';
import {styles} from './styles';

export default function ShoppingScreen() {
  const {
    items,
    isLoading,
    error,
    addItem,
    updateItem,
    deleteItem,
    clearAllItems,
  } = useShoppingStorage();

  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState<FilterType>('pending');

  const handleAddItem = async () => {
    if (!inputText.trim()) {
      Alert.alert(
        'Campo vazio',
        'Por favor, digite o nome do item antes de adicionar.',
        [{text: 'OK'}],
      );
      return;
    }

    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name: inputText.trim(),
      completed: false,
    };

    const success = await addItem(newItem);
    if (success) {
      setInputText('');
    } else {
      Alert.alert('Erro', 'Não foi possível adicionar o item.');
    }
  };

  const handleToggleItem = async (id: string) => {
    const item = items.find(i => i.id === id);
    if (item) {
      await updateItem(id, {completed: !item.completed});
    }
  };

  const handleDeleteItem = (id: string) => {
    Alert.alert('Excluir item', 'Deseja realmente excluir este item?', [
      {text: 'Cancelar', style: 'cancel'},
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          const success = await deleteItem(id);
          if (!success) {
            Alert.alert('Erro', 'Não foi possível excluir o item.');
          }
        },
      },
    ]);
  };

  const handleClearList = () => {
    Alert.alert('Limpar lista', 'Deseja realmente limpar toda a lista?', [
      {text: 'Cancelar', style: 'cancel'},
      {
        text: 'Limpar',
        style: 'destructive',
        onPress: async () => {
          const success = await clearAllItems();
          if (!success) {
            Alert.alert('Erro', 'Não foi possível limpar a lista.');
          }
        },
      },
    ]);
  };

  const filteredItems = items.filter(item =>
    filter === 'pending' ? !item.completed : item.completed,
  );

  if (isLoading) {
    return (
      <View style={[styles.container, {justifyContent: 'center'}]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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
        <ScrollView>
          <FlatList
            data={filteredItems}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContent}
            ListHeaderComponent={
              <ShoppingFilter
                activeFilter={filter}
                onFilterChange={setFilter}
                onClear={handleClearList}
              />
            }
            renderItem={({item}) => (
              <ShoppingListItem
                item={item}
                onToggle={handleToggleItem}
                onDelete={handleDeleteItem}
              />
            )}
            ListEmptyComponent={<EmptyList />}
          />
        </ScrollView>
      </View>
    </View>
  );
}
