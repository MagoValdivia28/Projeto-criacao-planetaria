import { useEffect, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import planetaRep from "../../models/Planeta/PlanetaRepository";
import Title from "../../components/Title";

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
    <ScrollView>
      <View>
        <Text>Lista de Planetas:</Text>
        <Text>Nesse Site criado para melhor organização, o dominador consegue cadastrar os planetas conquistados por ele, remover caso ele tenha perdido o planeta e editar caso hover alguma mudança com o planeta que ele havia conquistado, facilitando a sua vida na conquista dos planetas planetas</Text>

      </View>
      <Title title="Planetas" />
      <Text>Planetas Cadastrados:</Text>

      {allPlanets.length > 0 ? (
        <View>
          {allPlanets.map((planet) => (
            <View key={planet.id}>
              <View>
                <Text>{planet.name}</Text>
                <Text>{planet.date}</Text>
              </View>
              <View>
                <TouchableOpacity

                  onPress={() => navigation.navigate("details", { data: planet })}
                >
                  <Text>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <Text>Não há planetas cadastrados...</Text>
      )}
    </ScrollView>
  );
}