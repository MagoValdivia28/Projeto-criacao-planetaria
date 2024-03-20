import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import PlanetaConquistado  from "../../models/user/Planeta";
import  PlanetasRepository from "../../models/user/PlanetaRepository";
import { useNavigation } from "@react-navigation/native";

const planetasRepository = new PlanetasRepository(); 

let planetaId = 1; 

export default function Users() {
  const navigation = useNavigation();

  const [nomePlaneta, setNomePlaneta] = useState("");
  const [dataConquista, setDataConquista] = useState("");
  const [corPrimaria, setCorPrimaria] = useState("");
  const [corSecundaria, setCorSecundaria] = useState("");
  const [populacao, setPopulacao] = useState("");
  const [recursosNaturais, setRecursosNaturais] = useState("");
  const [numAssentamentos, setNumAssentamentos] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [comunicacao, setComunicacao] = useState("");
  const [governanteNome, setGovernanteNome] = useState("");
  const [governanteTitulo, setGovernanteTitulo] = useState("");

  const [allPlanetas, setAllPlanetas] = useState([]);

  const createPlaneta = () => {
    const novoPlaneta = new PlanetaConquistado(
      nomePlaneta,
      dataConquista,
      corPrimaria,
      corSecundaria,
      parseInt(populacao) || 0,
      recursosNaturais,
      parseInt(numAssentamentos) || 0,
      localizacao,
      comunicacao ? { frequencia: comunicacao, codificacao: 'AES-256' } : null,
      { nome: governanteNome, titulo: governanteTitulo }
    );

    planetasRepository.add(novoPlaneta);
    setAllPlanetas(planetasRepository.getAll());

    clearInputs();

    return novoPlaneta;
  };

  const clearInputs = () => {
    setNomePlaneta("");
    setDataConquista("");
    setCorPrimaria("");
    setCorSecundaria("");
    setPopulacao("");
    setRecursosNaturais("");
    setNumAssentamentos("");
    setLocalizacao("");
    setComunicacao("");
    setGovernanteNome("");
    setGovernanteTitulo("");
  };

  return (
    <View style={styles.container}>
      <Title title="Planets" />

      <View>
        <TextInput
          placeholder="Nome do Planeta"
          style={styles.userInput}
          onChangeText={setNomePlaneta}
          value={nomePlaneta}
        />
        <TextInput
          placeholder="Data de Conquista"
          style={styles.userInput}
          onChangeText={setDataConquista}
          value={dataConquista}
        />
        <TextInput
          placeholder="Cor Primária"
          style={styles.userInput}
          onChangeText={setCorPrimaria}
          value={corPrimaria}
        />
        <TextInput
          placeholder="Cor Secundária"
          style={styles.userInput}
          onChangeText={setCorSecundaria}
          value={corSecundaria}
        />
        <TextInput
          placeholder="População"
          style={styles.userInput}
          onChangeText={setPopulacao}
          value={populacao}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Recursos Naturais"
          style={styles.userInput}
          onChangeText={setRecursosNaturais}
          value={recursosNaturais}
        />
        <TextInput
          placeholder="Número de Assentamentos"
          style={styles.userInput}
          onChangeText={setNumAssentamentos}
          value={numAssentamentos}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Localização"
          style={styles.userInput}
          onChangeText={setLocalizacao}
          value={localizacao}
        />
        <TextInput
          placeholder="Comunicação (Frequência)"
          style={styles.userInput}
          onChangeText={setComunicacao}
          value={comunicacao}
        />
        <TextInput
          placeholder="Nome do Governante"
          style={styles.userInput}
          onChangeText={setGovernanteNome}
          value={governanteNome}
        />
        <TextInput
          placeholder="Título do Governante"
          style={styles.userInput}
          onChangeText={setGovernanteTitulo}
          value={governanteTitulo}
        />

        <TouchableOpacity style={styles.button} onPress={createPlaneta}>
          <Text>Criar Planeta</Text>
        </TouchableOpacity>
      </View>

      <View>
        {allPlanetas.length > 0 ? (
          allPlanetas.map((planeta) => (
            <TouchableOpacity
              key={planetaId++}
              onPress={() => navigation.navigate("Profile", { data: planeta })}
            >
              <Text>{planeta.nome}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Não há planetas cadastrados</Text>
        )}
      </View>

      <TouchButton route="Category" title="Go to Category" />
    </View>
  );
}
