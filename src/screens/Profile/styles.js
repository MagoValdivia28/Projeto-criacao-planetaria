import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(../../../assets/galaxia.jpg)',
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
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    heading2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        textAlign: 'center',
    },
    description: {
        marginBottom: 10,
        fontSize: 18,
    },
    info: {
        marginBottom: 5,
        fontSize: 20,
    },
    img: {
        width: 300,
        height: 300,
        margin: "auto"
    },
});

export default styles;