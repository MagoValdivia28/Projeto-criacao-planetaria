import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundImage: `url('../../../assets/planetaHome.jpg')`,
    backgroundSize: "cover",
  },
  container1: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    paddingTop: 20,
    flex: 1,
  },  
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    margin: 40,
    textAlign: "left",
    color: "white",
  },
  title2: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: 40,
    marginBottom: 20,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },
  navigationButtons: {

    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#610575',
    paddingVertical: 30,
    paddingHorizontal: 100,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },


});

export default styles;
