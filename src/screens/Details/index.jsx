import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Planetarepository from '../../models/Planeta/PlanetaRepository';
import { useNavigation } from "@react-navigation/native";
import styles from './styles';

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
      <View style={styles.container}>
        <Text style={styles.heading}>Detalhes do planeta</Text>
        <View>
          <View style={styles.profileInfo}>
          <Image source={require("../../../assets/planeta.png")} style={styles.img} />
            <Text style={styles.info}> Nome do planeta: {data.name}</Text>
            <Text style={styles.info}> data de contato: {data.date}</Text>
            <Text style={styles.info}> cor1:{data.cor1}</Text>
            <Text style={styles.info}> cor2: {data.cor2}</Text>
            <Text style={styles.info}> populacao: {data.populacao}</Text>
            <Text style={styles.info}> galaxia: {data.galaxia}</Text>
            <Text style={styles.info}> sistemaSolar: {data.sistemaSolar}</Text>
            <Text style={styles.info}> coordenadasEspaciais: {data.coordenadasEspaciais}</Text>
            <Text style={styles.info}> governantes: {data.governante}</Text>
            <View>
              <TouchableOpacity style={styles.button} onPress={editPlanet}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.cancelButton} onPress={deletePlanet}>
                <Text style={styles.cancelButtonText}>Remover</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  );

}
