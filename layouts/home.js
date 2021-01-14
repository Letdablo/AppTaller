import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  Icon,
} from "@ui-kitten/components";
import ListUsuarios from "./Usuarios";
import ListVehiculos from "./Vehiculos";
import ListaEventos from "./eventos";
import InfoUsuario from "./InfoUsuario";
const Stack = createStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

const EmailIcon = (props) => <Icon {...props} name="email-outline" />;

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab icon={PersonIcon} title="USUARIOS" />
    <BottomNavigationTab icon={EmailIcon} title="VEHICULOS" />
    <BottomNavigationTab icon={BellIcon} title="ORDENES" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator
    initialRouteName="Usuarios"
    tabBar={(props) => <BottomTabBar {...props} />}
  >
    <Screen name="Usuarios" component={ListUsuarios} />
    <Screen name="Vehiculos" component={ListVehiculos} />
    <Screen name="Ordenes" component={ListUsuarios} />
  </Navigator>
);
const StackTabNavigator = () => (
  <Stack.Navigator
    initialRouteName="Usuarios"
    tabBar={(props) => <BottomTabBar {...props} />}
  >
    <Stack.Screen name="Home" component={TabNavigator} />
    <Stack.Screen name="Citas" component={ListaEventos} />
    <Stack.Screen name="Informacion Usuario" component={InfoUsuario} />
  </Stack.Navigator>
);

export default function AppNavigator() {
  return (
    <NavigationContainer independent={true}>
      <StackTabNavigator />
    </NavigationContainer>
  );
}
