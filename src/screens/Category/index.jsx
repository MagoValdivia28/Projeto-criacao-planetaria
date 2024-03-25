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
  const [cores, setCores] = useState("");
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
      setCores(planet.cores);
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
      planetaRepository.update(planet.id, name, date, cores, população, galaxia, sistemasolar, coordenadasespaciais, governante || 0);
      clearInputs();
    } else {
      const newPlanet = new Planet(name, date, cores, população, galaxia, sistemasolar, coordenadasespaciais, governante);
      planetaRepository.add(newPlanet);
      clearInputs();
    }
    navigation.navigate("Home");

  };


  const clearInputs = () => {
    setIsUpdate(false);
    setName("");
    setDate("");
    setCores("");
    setPopulação("");
    setGalaxia("");
    setSistemasolar("");
    setCoordenadasespaciais("");
    setGovernante("");
    edit = false;
  };
