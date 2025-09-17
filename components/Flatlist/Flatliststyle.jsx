import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
 
   
  },
  info: {
    width: 340,

    justifyContent: "center",
    marginLeft: 25,
    fontSize: 15,
    height: 50,
    fontWeight: 600,
    marginBottom: 10,
  },

  list: {
    width: 395,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",

    borderRadius: 5,
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    // margin: 10,
    height: 70,
    paddingLeft: 5,
    marginLeft:15,
    marginTop:7
  },
  headtext: {
    fontSize: 20,

    fontWeight: 800,
    position: "absolute",
    bottom: 10,
  },
  head: {
    backgroundColor: "white",
    height: 90,
    paddingLeft: 10,
  },
});
