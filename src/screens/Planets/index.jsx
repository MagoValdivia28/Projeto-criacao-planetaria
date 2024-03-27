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
      <View style={styles.container3}>
        <View style={styles.backgroundImage}>
          <Text style={styles.title}>Bem-vindo ao sistema interestrelar </Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.planetText1}>
            Este site foi desenvolvido para facilitar a gestão de planetas
            conquistados. Aqui, você pode cadastrar novos planetas, remover
            aqueles que não estão mais sob seu domínio e atualizar informações
            de planetas já cadastrados. Tudo para tornar sua jornada de
            conquista espacial mais organizada e eficiente.
          </Text>
        </View>
        <View style={styles.container4}>
          <View style={styles.titlePlanets}>
            <Title style={styles.planetText} title="Planetas" />
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigation.navigate("Form", { edit: false })}
            >
              <Text style={styles.detailsButtonText}>Adicionar planeta</Text>
            </TouchableOpacity>
          </View>

          {allPlanets.length > 0 ? (
            <View>
              {allPlanets.map((planet) => (
                <View key={planet.id} style={styles.planetContainer}>
                  <View style={styles.planetContainer2}>
                  
                    <Text style={styles.planetText}>
                     {planet.name}
                    </Text>
                    <Text style={styles.planetText}>
                      população: {planet.populacao}
                    </Text>
                    <Text style={styles.planetText}>
                      governante: {planet.governante}
                    </Text>

                    <TouchableOpacity
                      style={styles.detailsButton}
                      onPress={() =>
                        navigation.navigate("Form", { data: planet })
                      }
                    >
                      <Text style={styles.detailsButtonText}>Detalhes</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <Text>Não há planetas cadastrados...</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
