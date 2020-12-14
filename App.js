import React, { useEffect, useRef } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { default as theme } from "./theme.json";
import { default as mapping } from "./mapping.json";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./layouts/login";
import Registro from "./layouts/registro";
import ListUsuarios from "./layouts/Usuarios";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

export default () => {
  const Stack = createStackNavigator();
  return (
    <ApplicationProvider
      {...eva}
      theme={{ ...eva.light, ...theme }}
      customMapping={mapping}
    >
      <IconRegistry icons={EvaIconsPack} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Registro"
            component={Registro}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Usuarios" component={ListUsuarios} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};
