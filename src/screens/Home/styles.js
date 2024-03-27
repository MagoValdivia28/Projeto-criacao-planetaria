import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundImage: `url('../../../assets/imgTOP.jpg')`,
    backgroundSize: "cover",
  },
  container3: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  container2: {
    padding: 20,
    backgroundColor: "black",
    borderRadius: 10,
    margin: 20,
    marginBottom: 100,
  },
  container4: {
    paddingTop: 35,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 1000,
  },
  separator: {
    height: 5,
    backgroundColor: "white",
  },
  textContainer: {
    marginBottom: 20,
  },
  titlePlanets: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between", // Add this line to align the text elements with space between them
    paddingtop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 40,
    textAlign: "center",
    color: "white",
  },
  planetContainer: {
    marginBottom: 20,
    borderColor: "lightgray",
    padding: 10,
    borderBottomWidth: 2,
  },
  planetContainer2: {
    display: "flex",
    flexDirection: "row", // Add this line to make the text elements appear side by side
    justifyContent: "center",
  },
  planetText1: {
    marginBottom: 5,
    color: "white",
    width: "100%",
  },
  planetText: {
    marginBottom: 5,
    color: "black",
    width: "100%",
  },
  detailsButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    height: 40,
  },
  detailsButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;
