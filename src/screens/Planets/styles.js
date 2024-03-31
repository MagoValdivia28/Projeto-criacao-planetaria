import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundImage: `url('../../../assets/martePlanets.jpg')`,
    backgroundSize: "cover",
  },
  container3: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20,
  },
  container2: {
    padding: 20,
    borderRadius: 10,
    margin: 20,
    marginBottom: 100,
  },
  planetText1: {
    marginBottom: 5,
    color: "lightgray",
    fontSize: 18,
  },
  container4: {
    marginTop: 40,
    paddingTop: 35,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "auto",
    paddingBottom: 90,
  },
  textContainer: {
    marginBottom: 20,
  },
  titlePlanets: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20, // Corrected 'paddingtop' to 'paddingTop'
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 40,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  img_name: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  planetText: {
    marginBottom: 5,
    color: "black",
    width: 100, // Changed width to a reasonable value
    fontWeight: "bold",
  },
  detailsButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    height: 40,
  },
  detailsButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  planetImage: {
    width: 50,
    height: 50,
    marginRight: 20,
  },  
});

export default styles;