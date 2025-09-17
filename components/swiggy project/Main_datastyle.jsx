const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
     
    
  },
  list1container: {
    backgroundColor: "white",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  list2container: {
    backgroundColor: "white",
    marginBottom: 10,
  },
  list3container: {
    backgroundColor: "green",
  },
  boxlist1: {
    backgroundColor: "white",
    paddingLeft:5,
   
  },
  boxlist2: {
    backgroundColor: "white",
    marginBottom: 10,
  },

  list3: {
    width: '90%',
    borderRadius: 18,
    backgroundColor: "white",

    height: 250,
    
    
    shadowColor: "black", // Color of the shadow
    shadowOffset: { width: 0, height: 5 }, // Shadow direction
    shadowOpacity: 0.3, // Opacity of the shadow
    shadowRadius: 2, // Blur radius
    elevation: 5, // For Android
  },
});
