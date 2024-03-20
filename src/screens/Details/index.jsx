import React from "react";
import { View, Text } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";

export default function PlanetProfile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Title title="Planet Profile" />
      <View style={styles.profileContainer}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{data.nome}</Text>

        <Text style={styles.label}>Data de Conquista:</Text>
        <Text style={styles.value}>{data.dataConquista}</Text>

        <Text style={styles.label}>Cor Primária:</Text>
        <Text style={styles.value}>{data.corPrimaria}</Text>

        <Text style={styles.label}>Cor Secundária:</Text>
        <Text style={styles.value}>{data.corSecundaria}</Text>

        <Text style={styles.label}>População:</Text>
        <Text style={styles.value}>{data.populacao}</Text>

        <Text style={styles.label}>Recursos Naturais:</Text>
        <Text style={styles.value}>{data.recursosNaturais}</Text>

        <Text style={styles.label}>Número de Assentamentos:</Text>
        <Text style={styles.value}>{data.numAssentamentos}</Text>

        <Text style={styles.label}>Localização:</Text>
        <Text style={styles.value}>
          Galáxia: {data.galaxia}, Sistema Solar:{" "}
          {data.sistemaSolar}, Coordenadas:{" "}
          {data.coordenadas}
        </Text>

        <Text style={styles.label}>Comunicação:</Text>
        <Text style={styles.value}>
          Frequência: {data.frequencia}, Codificação:{" "}
          {data.codificacao}
        </Text>

        <Text style={styles.label}>Governante:</Text>
        <Text style={styles.value}>
          Nome: {data.nome}, Título: {data.titulo}
        </Text>
      </View>
    </View>
  );
}
