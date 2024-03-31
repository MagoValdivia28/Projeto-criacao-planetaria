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
          <Text style={styles.title}>
            Planetas cadastratados no Sistema Interestrelar </Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.planetText1}>
            Seja bem-vindo à nossa coleção de planetas no sistema interestelar!
            Aqui, você encontrará uma variedade de mundos fascinantes esperando para serem explorados.
            Embarque nesta jornada intergaláctica conosco e mergulhe nas maravilhas do universo além da nossa imaginação.
          </Text>
        </View>
        <View style={styles.container4}>

          <View style={styles.titlePlanets}>
            <Title style={styles.planetText} title="Planetas cadastrados:" />
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
                    
                    <View style={styles.img_name}>
                      <Image source={require("../../../assets/planeta.png")} style={styles.planetImage} />
                      <Text style={styles.planetText}>
                        {planet.name}
                      </Text>
                    </View>

                    <Text style={styles.planetText}> governante: {planet.governante} </Text>

                    <TouchableOpacity
                      style={styles.detailsButton}
                      onPress={() =>
                        navigation.navigate("Details", { data: planet })
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
