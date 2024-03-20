import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { Pla } from "../../data/planets";

export default function Category() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title title="Category" />
      <TouchButton 
        title="Go to Profile" 
        onPress={() => navigation.navigate('Profile')}
      />
      <TouchButton 
        title="Go to Home" 
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}