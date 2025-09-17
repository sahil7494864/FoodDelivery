import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AddButton from './AddButton';  

const OrderScreen = () => {
  const [totalItems, setTotalItems] = useState(0);  

  
  const data = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
  ];

 
  const updateTotalItems = (change) => {
    setTotalItems((prevCount) => Math.max(0, prevCount + change)); 
  };

 
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <AddButton updateTotalItems={updateTotalItems} />  
    </View>
  );

  return (
    <View style={styles.container}>
  

 
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  orderCountContainer: {
    marginBottom: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    position:'absolute',
    bottom:0,
    width:'100%',
    marginLeft:19
  },
  orderCountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderScreen;