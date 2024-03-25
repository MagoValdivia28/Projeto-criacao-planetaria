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
    navigation.navigate("Category", { planet: data, edit: true });
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
              <Text>{data.name}</Text>
              <Text>{data.dataConquista}</Text>
              <Text>{data.cor1}</Text>
              <Text>{data.cor2}</Text>
              <Text>{data.população}</Text>
              <Text>{data.galaxia}</Text>
              <Text>{data.sistemasolar}</Text>
              <Text>{data.coordenadasespaciais}</Text>
              <Text>{data.governante}</Text>

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
