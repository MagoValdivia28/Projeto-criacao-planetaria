import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    marginTop: 100,
    borderRadius: 5,
  },
  fundo: {
    backgroundImage: `url('../../../assets/galaxiaform.jpg')`,
    backgroundSize: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingBottom: 10,
    textAlign: 'center',
    
  },
  input: {
    width: '100%', // Definindo a largura para ocupar a tela inteira
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,

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
  errorMessage: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;

