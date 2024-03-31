import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundImage: `url('../../../assets/planetaHome.jpg')`,
    backgroundSize: "cover",
  },
  container1: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    paddingTop: 20,
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
    marginTop: 20,
  },

  button1: {
    backgroundImage: `url('../../../assets/imgBotao1.jpg')`,
    backgroundSize: "cover",
    padding: 25,
    margin: 10,
    borderRadius: 5,
  },
  button2: {
    backgroundImage: `url('../../../assets/imgBotao2.jpg')`,
    backgroundSize: "cover",
    padding: 25,
    margin: 10,
    borderRadius: 5,
  },
  button3: {
    backgroundColor: "white",
    padding: 25,
    margin: 10,
    borderRadius: 5,
  },
  button4: {
    backgroundColor: "white",
    padding: 25,
    margin: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 25,
    fontSize: 23,
  },


});

export default styles;
