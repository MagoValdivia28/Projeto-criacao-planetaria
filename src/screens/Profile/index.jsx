import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Sobre from '../../data/Profile';

export default function Profile() {
  return (
      <ScrollView>
        {Sobre ? (
          Sobre.map((item, index) => (
            <View key={index}>
              <View>
                <Image/>
                <Text>{item.name}</Text>
                <Text>{item.date}</Text>
                <Text>{item.email}</Text>
                <Text>{item.phone}</Text>
                <Text>{item.description}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text>Nenhum Perfil cadastrado</Text>
        )}
      </ScrollView>
  );
}