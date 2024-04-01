import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Details from "../screens/Details";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Planets from "../screens/Planets";
import Form from "../screens/Form";

import planetRep from "../models/Planeta/PlanetaRepository";

const planets = planetRep.getAll();

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#FFD700', // Amarelo ouro
        inactiveTintColor: 'gray', // Cinza
        tabBarStyle: {
          backgroundColor: '#000000', // Preto
          borderTopWidth: 0,
          paddingHorizontal: 20, // Margem horizontal
          paddingVertical: 10, // Margem vertical
          borderRadius: 20, // Borda arredondada
          marginHorizontal: 20, // Margem horizontal externa
          marginBottom: 20, // Margem inferior externa
        },
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 5, // Espaço extra abaixo do texto
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#FFD700" : "gray"}
            />
          ),
          tabBarLabel: "Início",
        }}
      />

      <Tab.Screen
        name="Planets"
        component={Planets}
        initialParams={{ planets }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="globe"
              size={24}
              color={focused ? "#FFD700" : "gray"}
            />
          ),
          tabBarLabel: "Planetas",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#FFD700" : "gray"}
            />
          ),
          tabBarLabel: "Perfil",
        }}
      />



      <Tab.Screen 
        name="Form" 
        component={Form} 
        initialParams={{ hidden: true }}
        options={{
          tabBarItemStyle: {
            display: 'none',
          },
          tabBarLabel: "Formulário",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Tab.Screen
        name="Details"
        component={Details}
        initialParams={{ hidden: true }}
        options={{
          tabBarItemStyle: {
            display: 'none',
          },
          tabBarLabel: "Detalhes",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

    </Tab.Navigator>
  );
};

export default TabRoutes;