import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 80,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url(../../../assets/galaxia.jpg)',
      paddingBottom: 100,
    },
    heading:{
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 80,
      color: 'white',
    },
    profileInfo: {
      width: '100%',
      maxWidth: 400,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'white',
    },
    info: {
      marginBottom: 5,
      fontSize: 20,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#007bff',
      padding: 15,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    cancelButton: {
      alignItems: 'center',
      padding: 15,
      marginTop: 10,
      alignItems: 'center',
      backgroundColor: 'red',
      borderRadius: 5,
    },
    cancelButtonText: {
      color: 'white',
      fontWeight: 'bold',
      
    },
    img:{
      width: 200,
      height: 200,
      borderRadius: 50,
      marginBottom: 10,
margin:"auto"    
    }
  });

  export default styles;