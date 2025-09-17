import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const AddButton = ({ updateTotalItems }) => {
  const [num, setNum] = useState(0);
  const [addShown, setAddShown] = useState(true);

 
  const addItem = () => {
    setNum(1);
    setAddShown(false);
    updateTotalItems(1); 
  };

  
  const increment = () => {
    setNum(num + 1);
    updateTotalItems(1);  
  };

 
  const decrement = () => {
    if (num > 1) {
      setNum(num - 1);
      updateTotalItems(-1); 
    } else {
      setNum(0);
      setAddShown(true);
      updateTotalItems(-1);  
    }
  };

  return (
    <View style={styles.container}>
      {addShown && num === 0 ? (
        <TouchableOpacity onPress={addItem} style={styles.addbtn}>
          <Text style={styles.addText}>ADD</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.itemAddBtn}>
          <TouchableOpacity onPress={decrement} style={styles.controlButton}>
            <Text style={styles.controlButtonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>{num}</Text>

          <TouchableOpacity onPress={increment} style={styles.controlButton}>
            <Text style={styles.controlButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  addbtn: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemAddBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  controlButton: {
    padding: 10,
  },
  controlButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default AddButton;