import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black'
    },
    container2: {
        padding: 20,
        backgroundColor: '#775f96',
        borderRadius: 10,
        margin: 20,
        },
    backgroundImage: {
        backgroundColor: 'transparent',
        backgroundImage: `url('../../../assets/imgTOP.jpg')`,
        backgroundSize: 'cover',
        padding: 20,
   },
   separator: {
    height: 5,
    backgroundColor: 'white'
  },
    textContainer: {
      marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 40,
        textAlign: 'center',
        color: 'white',
    },
    planetContainer: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: 'lightgray',
      padding: 10,
    },
    planetText: {
      marginBottom: 5,
      color: 'white',

    },
    detailsButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    detailsButtonText: {
      color: 'white',
      fontWeight: 'bold',
    }
    });

export default styles;

