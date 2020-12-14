import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ListUsuarios from "./Usuarios";

import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Menu from "../components/menu";

export default function AppNavigator() {
  const [login, setLogin] = React.useState(false);
  const Stack = createStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Usuarios"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Usuarios" component={ListUsuarios} />
        <Stack.Screen name="Vehiculos" component={ListUsuarios} />
        <Stack.Screen name="Ordenes" component={ListUsuarios} />
      </Stack.Navigator>
      <Menu></Menu>
    </NavigationContainer>
  );
}
