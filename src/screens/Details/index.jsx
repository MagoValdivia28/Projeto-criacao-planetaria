import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Planetarepository from '../../models/Planeta/PlanetaRepository';
import { useNavigation } from "@react-navigation/native";


export default function Home({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const deletePlanet = () => {
    Planetarepository.remove(data.id);
    navigation.navigate("Home");
  };

  const editPlanet = () => {
    navigation.navigate("Form", { planet: data, edit: true });
  };

  return (
      <ScrollView>
        <View>
          {data ? (
            <Text>Detalhes dos planetas:</Text>
          ) : (
            <Text>Selecione um planeta</Text>
          )}

          <View>
            <View>
            <Text>1 Nome do planeta: {data.name}</Text>
              <Text>2 data de contato: {data.date}</Text>
              <Text>3 cor1:{data.cor1}</Text>
              <Text>4 cor2: {data.cor2}</Text>
              <Text>5 populacao: {data.populacao}</Text>
              <Text>6 galaxia: {data.galaxia}</Text>
              <Text>7 sistemaSolar: {data.sistemaSolar}</Text>
              <Text>8 coordenadasEspaciais: {data.coordenadasEspaciais}</Text>
              <Text>9 governantes: {data.governante}</Text>
              <View>
                <TouchableOpacity onPress={editPlanet}>
                  <Text>Editar</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity onPress={deletePlanet}>
                  <Text>Remover</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </ScrollView>
  );

}
