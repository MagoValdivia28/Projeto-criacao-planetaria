import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Details from "../screens/Details";
import planetdata from "../data/planets";

import planetRep from "../models/Planeta/PlanetaRepository";

const planets = planetRep.getAll();

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Category"
    >


      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ planets }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="aperture"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Planetas",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Tab.Screen
        name="details"
        component={Details}
        initialParams={{ data: planetdata }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="edit"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "detalhes",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Tab.Screen
        name="Category"
        component={Category}
        initialParams={{ planet: null, edit: false }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Cadastro",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
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
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;

''




























// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import Home from "../screens/Home";
// import Profile from "../screens/Profile";
// import Category from "../screens/Category";




// const Tab = createBottomTabNavigator();

// const TabRoutes = () => {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen name="Home" component={Home}
//         options={{
//           tabBarLabel: 'Planetas',
//           tabBarIcon: ({ focused }) => {
//             return <MaterialCommunityIcons name="atom" color={"#131313"} size={24} />;
//           }
//         }}

//       />
//       <Tab.Screen name="Profile" component={Profile}
//         options={{
//           tabBarLabel: 'Perfil',
//           tabBarIcon: ({ focused }) => {
//             return <MaterialCommunityIcons name="account" color={"#131313"} size={24}
            
//             />;
//           }
//         }}

//       />
//       <Tab.Screen name="Category" component={Category}
//         options={{
//           tabBarLabel: 'Add',
//           tabBarIcon: ({ focused }) => {
//             return <MaterialCommunityIcons name="alien-outline" color={"#131313"} size={24} />;
//           }
//         }}

//       />



//     </Tab.Navigator>
//   );
// };

// export default TabRoutes;