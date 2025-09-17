// import {
//   FlatList,
//   View,
//   Text,
//   ImageBackground,
//   TouchableOpacity,Image
// } from "react-native";
// import { styles } from "../Flatlist/Flatliststyle";
// import React, { useEffect, useState } from "react";
  
// const Flatlist = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("https://dummyjson.com/products");

//       if (!response.ok) {
//         throw new Error("failed to fetch data");
//       }
//       const data = await response.json();
//       setData(data?.products);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // fetchData();

//   if (loading) {
//     return <h1>Loading...</h1>;
//   }
//   if (error) {
//     return <div>Error : {error}</div>;
//   }
//   const employes = [
//     {
//       id: 1,
//       Image: require("../../assets/images/flatlistimages/newsimg.jpg"),
//       info: "Prime Minister Narendra Modi will visit Jharkhand on 2nd October and lay the foundation stone.",
//     },
//     {
//       id: 2,
//       Image: require("../../assets/images/flatlistimages/newsimg.jpg"),
//       info: "Prime Minister Narendra Modi will visit Jharkhand on 2nd October and lay the foundation stone.",
//     },
//     {
//       id: 3,
//       Image: require("../../assets/images/flatlistimages/newsimg.jpg"),

//       info: "Prime Minister Narendra Modi will visit Jharkhand on 2nd October and lay the foundation stone.",
//     },
//     {
//       id: 4,
//       Image: require("../../assets/images/flatlistimages/newsimg.jpg"),
//       info: "Prime Minister Narendra Modi will visit Jharkhand on 2nd October and lay the foundation stone.",
//     },
//     {
//       id: 5,
//       Image: require("../../assets/images/flatlistimages/newsimg.jpg"),
//       info: "Prime Minister Narendra Modi will visit Jharkhand on 2nd October and lay the foundation stone.",
//     },
//     {
//       id: 6,
//       Image: require("../../assets/images/flatlistimages/newsimg.jpg"),
//       info: "Prime Minister Narendra Modi will visit Jharkhand on 2nd October and lay the foundation stone.",
//     },
//     {
//       id: 7,
//       Image: require("../../assets/images/flatlistimages/newsimg.jpg"),
//       info: "Prime Minister Narendra Modi will visit Jharkhand on 2nd October and lay the foundation stone.",
//     },
//     {
//       id: 8,
//       Image: require("../../assets/images/flatlistimages/newsimg.jpg"),
//       info: "Prime Minister Narendra Modi will visit Jharkhand on 2nd October and lay the foundation stone.",
//     },
//   ];
//   const handleclick = () => {
//     return alert("Modi");
//   };
//   const renderdata = ({ item }) => (
//     <TouchableOpacity onPress={handleclick}>
//       <View style={styles.list}>
//         <View
//           style={{ height: 50, width: 50, borderRadius: 10, marginLeft: 10 }}
//         >
//           <ImageBackground
//             source={item.thumbnail}
//             style={{ width: 50, height: 50, borderRadius: 10 }}
//             resizeMode="stretch"
//           />
//         </View>

//         <Text style={styles.info}>{item.title}</Text>
//         <Text style={{ display: "flex", flexDirection: "column" }}>
          
//           ${item.price}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
//   const renderdata2 = ({ item }) => (
//     <TouchableOpacity onPress={handleclick}>
//       <View style={styles.list}>
//         <View
//           style={{ height: 50, width: 50, borderRadius: 10, marginLeft: 10 }}
//         >
//           <Image
//             source={item.Image}
//             style={{ width: 50, height: 50, borderRadius: 10 }}
//             resizeMode="stretch"
//           /> 
//         </View>

//         <Text style={styles.info}>{item.info}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.head}>
    
//         <Text style={styles.headtext}>RN News</Text>
//       </View>
//       <FlatList
//         data={employes}
//         renderItem={renderdata2}
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//       />

//       <FlatList data={data} renderItem={renderdata} />
//     </View>
//   );
// };

// export default Flatlist;
