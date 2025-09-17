import React from 'react';
import { ScrollView, Image, StyleSheet, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 

const ImageScroll = () => {
  const images = [
    
    require('../../assets/images/SwiggyImages/headimg1.jpeg'),
    require('../../assets/images/SwiggyImages/headimg2.jpeg'),
    require('../../assets/images/SwiggyImages/headimg6.jpeg'),
    require('../../assets/images/SwiggyImages/headimg5.jpeg'),
  ];
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {images.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={image} style={styles.image} 
          resizeMode="stretch"/>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    
     position:'absolute',
     height: 250,  
  },
  imageContainer: {
    width: width,
    height: 250,  
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
});

export default ImageScroll;