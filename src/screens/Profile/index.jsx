import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Sobre from '../../data/Profile';
import styles from './styles';

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>SOBRE O CRIADOR</Text>
      <View style={styles.profileInfo}>
        <Image source={require("../../../assets/felipe.jpg")} style={styles.img} />
        <Text style={styles.heading2}>quem sou eu??</Text>

        <Text style={styles.description}>{Sobre.description}</Text>
        <Text style={styles.info}>Nome: {Sobre.name}</Text>
        <Text style={styles.info}>Data de nascimento: {Sobre.date}</Text>
        <Text style={styles.info}>Email: {Sobre.email}</Text>
        <Text style={styles.info}>Telefone: {Sobre.phone}</Text>
      </View>
    </ScrollView>
  );
}
