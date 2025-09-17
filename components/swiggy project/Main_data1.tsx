import React from "react";
import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./Main_datastyle";
import SwiggyHeader from "./SwiggyHeader";
import SwiggyFooter from "./SwiggyFooter";
import MoreSwiggy from "./MoreSwiggy";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
function Main_data1() {
  const navigation = useNavigation();
  const dishvarity = [
    {
      id: 1,
      Image: require("../../assets/images/swiggy-maindata1/khichdi.png"),
      Image2: require("../../assets/images/SwiggyImages/aaloghobhi.jpg"),
      resturants: "Great Indian Khichdi by EatFit ",
      rating: "4.6 25-30 mins",
      menu: "Indian, Home Food, Healthy Food, Snacks ",
      location: "Sector 24",
      list5: "Potato",
    },
    {
      id: 2,
      Image: require("../../assets/images/swiggy-maindata1/subway.png"),
      Image2: require("../../assets/images/SwiggyImages/burger.jpg"),
      resturants: "Subway ",
      rating: "4.4 15-20 mins",
      menu: "Fast Food, Healthy Food, Salads, Snacks, Desserts,Beverages ",
      location: "Sector 19",
      list5: " Burger",
    },
    {
      id: 3,
      Image: require("../../assets/images/swiggy-maindata1/cake.png"),
      Image2: require("../../assets/images/SwiggyImages/chawmin.jpg"),
      resturants: "The Belgian Waffle Co. ",
      rating: "4.7 20-25 mins",
      menu: "Waffle, Desserts, Ice Cream",
      location: "Sector 8B",
      list5: "Hot Dog",
    },
    {
      id: 4,
      Image: require("../../assets/images/swiggy-maindata1/kfc.png"),
      Image2: require("../../assets/images/SwiggyImages/chole.jpg"),
      resturants: "KFC. ",
      rating: "4.2 15-20 mins",
      menu: "Burgers, Fast Food, Rolls & Wraps",
      location: "Sector 8",
      list5: "Chole",
    },
    {
      id: 5,
      Image: require("../../assets/images/swiggy-maindata1/icecream.png"),
      Image2: require("../../assets/images/SwiggyImages/fries.jpg"),
      resturants: "Kwality Walls Ice Cream and More. ",
      rating: "4.7 15-20 mins",
      menu: "Ice Cream, Desserts, Ice Cream Cakes",
      location: "East Chd",
      list5: "fries ",
    },
    {
      id: 6,
      Image: require("../../assets/images/swiggy-maindata1/mcd.png"),
      Image2: require("../../assets/images/SwiggyImages/noodles.jpg"),
      resturants: "McDonald's ",
      rating: "4.3 30-35 mins",
      menu: "American, Fast Food",
      location: "Sector 22",
      list5: "Noodles ",
    },
    {
      id: 7,
      Image: require("../../assets/images/swiggy-maindata1/navtrimeal.png"),
      Image2: require("../../assets/images/SwiggyImages/mixture.jpg"),
      resturants: "Navratri Meals by LunchBox",
      rating: "4.3 30-35 mins",
      menu: "Biryani, North Indian, Desserts, Beverages",
      location: "Sector 22",
      list5: "Mixture",
    },
    {
      id: 8,
      Image: require("../../assets/images/swiggy-maindata1/newmcd.png"),
      Image2: require("../../assets/images/SwiggyImages/momos.jpg"),
      resturants: "McDonald's ",
      rating: "4.3 30-35 mins",
      menu: "American, Fast Food",
      location: "Sector 22",
      list5: "Momos",
    },
  ];

  const dishvaritydata = ({ item }) => (
    <View style={styles.boxlist1}>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Orderpage')}>
          <Image
            source={item.Image}
            style={{
              height: 70,
              width: 70,
              marginTop: 10,
              backgroundColor: "black",
              borderRadius: 100,
            }}
            resizeMode="stretch"
          />
        </TouchableOpacity>
      </View>
      <Text>{item.text}</Text>
    </View>
  );
  const dishvaritylist2 = ({ item }) => (
    <View style={styles.boxlist2}>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Orderpage')}>
          <Image
            source={item.Image}
            style={{
              height: 180,
              width: 150,
              borderRadius: 10,
              margin: 5,
              backgroundColor: "black",
            }}
            resizeMode="stretch"
          />
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              fontWeight: "bold",
              width: 150,
              marginLeft: 5,
            }}
          >
            {item.resturants}
          </Text>
          <View
            style={{ display: "flex", flexDirection: "row", marginLeft: 4 }}
          >
            <Icon name="star" size={12} color="green" />
            <Text
              numberOfLines={1}
              style={{
                width: 150,
                marginLeft: 5,
                color: "black",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {item.rating}
            </Text>
          </View>
          <Text
            numberOfLines={1}
            style={{ width: 150, marginLeft: 5, fontSize: 12, color: "grey" }}
          >
            {item.menu}
          </Text>
          <Text
            style={{ width: 80, marginLeft: 5, fontSize: 12, color: "grey" }}
          >
            {item.location}
          </Text>
        </TouchableOpacity>
      </View>

      <Text>{item.text}</Text>
    </View>
  );
  const dishvaritylist3 = ({ item }) => (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 7.5,
        marginTop: 7.5,
      }}
    >
      <View style={styles.list3}>
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate('Orderpage')}>
            <Image
              source={item.Image}
              style={{
                height: 150,
                width: "100%",
                borderTopLeftRadius: 18,
                borderTopRightRadius: 18,
              }}
              resizeMode="repeat"
            />
            <Text
              numberOfLines={1}
              style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}
            >
              {item.resturants}
            </Text>
            <Text style={{ marginLeft: 10, fontSize: 18, color: "grey" }}>
              {item.location}
            </Text>
            <Text
              numberOfLines={1}
              style={{ marginLeft: 10, fontSize: 18, color: "grey" }}
            >
              {item.menu}
            </Text>
          </TouchableOpacity>
        </View>

        <Text>{item.text}</Text>
      </View>
    </View>
  );
  const dishvaritylist4 = ({ item }) => (
    <View style={styles.boxlist2}>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Orderpage')}>
          <Image
            source={item.Image2}
            style={{
              height: 120,
              width: 140,

              margin: 5,
            }}
            resizeMode="stretch"
          />
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              fontWeight: "bold",
              width: 150,
              marginLeft: 5,
            }}
          >
            {item.resturants}
          </Text>
          <View
            style={{ display: "flex", flexDirection: "row", marginLeft: 4 }}
          >
            <Icon name="star" size={12} color="green" />
            <Text
              numberOfLines={1}
              style={{
                width: 150,
                marginLeft: 5,
                color: "black",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {item.rating}
            </Text>
          </View>
          <Text
            numberOfLines={1}
            style={{ width: 150, marginLeft: 5, fontSize: 12, color: "grey" }}
          >
            {item.menu}
          </Text>
          <Text
            style={{ width: 80, marginLeft: 5, fontSize: 12, color: "grey" }}
          >
            {item.location}
          </Text>
        </TouchableOpacity>
      </View>

      <Text>{item.text}</Text>
    </View>
  );
  const dishvaritydata5 = ({ item }) => (
    <View style={styles.boxlist1}>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Orderpage')}>
          <Image
            source={item.Image2}
            style={{
              height: 70,
              width: 70,
              marginTop: 10,
              backgroundColor: "black",
            }}
            resizeMode="stretch"
          />
          <Text style={{ marginLeft: 15 }}>{item.list5}</Text>
        </TouchableOpacity>
      </View>
      <Text>{item.text}</Text>
    </View>
  );
  let reverseflat2 = dishvarity;
  return (
    <>
      <ScrollView style={styles.container}>
        <SwiggyHeader />

        <View style={styles.boxlist1}>
          <FlatList
            data={dishvarity}
            renderItem={dishvaritydata}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.boxlist2}>
          <Text
            style={{
              fontSize: 17,
              color: "black",
              marginTop: 10,
              marginLeft: 5,
              fontWeight: "bold",
            }}
          >
            Top rated near you
          </Text>
          <FlatList
            data={dishvarity}
            renderItem={dishvaritylist2}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.boxlist2}>
          <Text
            style={{
              fontSize: 17,
              color: "black",
              marginTop: 10,
              marginLeft: 5,
              fontWeight: "bold",
            }}
          >
            Popular in your city
          </Text>
          <FlatList
            data={[...dishvarity].reverse()}
            renderItem={dishvaritylist2}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <MoreSwiggy />
        <FlatList
          data={[...dishvarity].reverse()}
          renderItem={dishvaritylist4}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.boxlist1}>
          <FlatList
            data={dishvarity}
            renderItem={dishvaritydata5}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
  
        <FlatList
          data={dishvarity}
          renderItem={dishvaritylist3}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>

      <SwiggyFooter />
    </>
  );
}

export default Main_data1;
