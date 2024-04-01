import { useEffect, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import planetaRep from "../../models/Planeta/PlanetaRepository";
import Title from "../../components/Title";
import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allPlanets, setAllplanets] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const planets = planetaRep.getAll();
      setAllplanets(planets);
    }
  }, [isFocused]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <View>
          <Text style={styles.title}>Bem-vindo ao sistema interestrelar </Text>
        </View>
        <View>
          <Text style={styles.subtitle}> 
            Bem-vindo ao nosso app de gerenciamento de planetas intergaláctico!
            Aqui, você está no controle completo - crie, edite e exclua planetas conforme desejar.
            Prepare-se para uma experiência simples, mas incrível, onde o cosmos é o seu playground!</Text>
        </View>
        <Text style={styles.title2}>Nesse APP vc pode:</Text>
        <View style={styles.container2}>
        <View style={styles.navigationButtons}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.buttonText}>conhecer sobre o criador</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Planets')}>
              <Text style={styles.buttonText}>ver os planetas cadastrados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Form')}>
              <Text style={styles.buttonText}>cadastrar planetas</Text>
            </TouchableOpacity>
          </View>
        </View>

        </View>

    </ScrollView>
  );
}
