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
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate("Planets")}
          >
            <Text style={styles.buttonText}>Ver planetas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate("CreatePlanet")}
          >
            <Text style={styles.buttonText}>Criar planeta</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.button3}
            onPress={() => navigation.navigate("CreatePlanet")}
          >
            <Text style={styles.buttonText}>Criar planeta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button4}
            onPress={() => navigation.navigate("CreatePlanet")}
          >
            <Text style={styles.buttonText}>Criar planeta</Text>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  );
}
