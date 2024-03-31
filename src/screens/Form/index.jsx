import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import Planet from '../../models/Planeta/Planeta'
import planetaRepository from '../../models/Planeta/PlanetaRepository'

export default function Form({ route }) {
  let { planet, edit } = route.params;

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [cor1, setCor1] = useState("");
  const [cor2, setCor2] = useState("");
  const [população, setPopulação] = useState("");
  const [galaxia, setGalaxia] = useState("");
  const [sistemasolar, setSistemasolar] = useState("");
  const [coordenadasespaciais, setCoordenadasespaciais] = useState("");
  const [governante, setGovernante] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setName(planet.name);
      setDate(planet.date);
      setCor1(planet.cor1);
      setCor2(planet.cor2);
      setPopulação(planet.população);
      setGalaxia(planet.galaxia);
      setSistemasolar(planet.sistemasolar);
      setCoordenadasespaciais(planet.coordenadasespaciais);
      setGovernante(planet.governante);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [planet, edit]);

  const handlePlanet = () => {
    if (isUpdate) {
      planetaRepository.update(planet.id, name, date, cor1, cor2, população, galaxia, sistemasolar, coordenadasespaciais, governante || 0);
      clearInputs();
    } else {
      const newPlanet = new Planet(name, date, cor1, cor2, população, galaxia, sistemasolar, coordenadasespaciais, governante);
      planetaRepository.add(newPlanet);
      clearInputs();
    }
    navigation.navigate("Planets");
  };

  const clearInputs = () => {
    setIsUpdate(false);
    setName("");
    setDate("");
    setCor1("");
    setCor2("");
    setPopulação("");
    setGalaxia("");
    setSistemasolar("");
    setCoordenadasespaciais("");
    setGovernante("");
    edit = false;
  };

  return (
    <ScrollView style={styles.fundo}>
      <View style={styles.container}>
        <Text style={styles.title}>CADASTRE SEU PLANETA!!!</Text>
        <View>

          <TextInput style={styles.input} placeholder="Nome do planeta" onChangeText={text => setName(text)} value={name} />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Data do Primeiro Contato" onChangeText={text => setDate(text)} value={date} />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Cor Primária" onChangeText={text => setCor1(text)} value={cor1} />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Cor Secundária" onChangeText={text => setCor2(text)} value={cor2} />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="População" onChangeText={text => setPopulação(text)} value={população} />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Galáxia" onChangeText={text => setGalaxia(text)} value={galaxia} />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Sistema Solar" onChangeText={text => setSistemasolar(text)} value={sistemasolar} />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Coordenadas Espaciais" onChangeText={text => setCoordenadasespaciais(text)} value={coordenadasespaciais} />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Governante" onChangeText={text => setGovernante(text)} value={governante} />
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePlanet}>
          <Text style={styles.buttonText}>{isUpdate ? "Salvar Alterações" : "Criar Planeta"}</Text>
        </TouchableOpacity>
        {isUpdate && (
          <TouchableOpacity style={styles.cancelButton} onPress={clearInputs}>
            <Text style={styles.cancelButtonText}>Cancelar Edição</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}