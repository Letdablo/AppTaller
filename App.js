import React, { useEffect, useRef } from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from "@ui-kitten/components";
import { default as theme } from "./theme.json";
import { default as mapping } from "./mapping.json";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./layouts/login";
import Registro from "./layouts/registro";
import ListUsuarios from "./layouts/Usuarios";
import ListaEventos from "./layouts/eventos";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Menu from "./components/menu";
import AppNavigator from "./layouts/home";
export default () => {
  const [login, setLogin] = React.useState(false);
  const Stack = createStackNavigator();
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <IconRegistry icons={EvaIconsPack} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registro" component={Registro} />
          <Stack.Screen name="Usuarios" component={ListUsuarios} />
          <Stack.Screen name="Home" component={AppNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};
