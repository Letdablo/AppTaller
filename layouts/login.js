import React, { useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Input, Card, Layout, Text } from "@ui-kitten/components";
import Coche from "../components/coche2.svg";
import { StyleSheet, View } from "react-native";
import { Keyboard } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const styles = StyleSheet.create({
  input: {
    zIndex: 4,
    marginBottom: 5,
    borderRadius: 70,
    borderColor: "#53BEB4",
  },
  button: {
    zIndex: 4,
    borderRadius: 70,
    backgroundColor: "#357776",
    borderColor: "#357776",
    marginBottom: 5,
  },
  textButton: {
    zIndex: 4,
    borderColor: "#53BEB4",
    backgroundColor: "#53BEB4",
  },
  layoutFormulary: {
    borderColor: "#53BEB4",
    backgroundColor: "#53BEB4",
  },
  layoutCoche: {
    width: "92%",
    height: 300,
    zIndex: 2,
    marginTop: 40,
    backgroundColor: "rgba(76, 175, 80, 0)",
  },
  layoutCoche2: {
    height: 240,
    zIndex: -2,

    backgroundColor: "rgba(76, 175, 80, 0)",
  },
  card: {
    marginTop: "-45%",
    width: "96%",
    height: "72%",
    bottom: 0,
    borderRadius: 70,
    borderColor: "#53BEB4",
    backgroundColor: "#53BEB4",
    justifyContent: "flex-end",
  },
  view: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    color: "white",
    margin: 2,
    marginBottom: 20,
  },
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

function CardLogin({ navigation }) {
  const [focus, setFocus] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [pasword, setPasword] = React.useState("");
  const inputRefU = useRef(null);
  const inputRefP = useRef(null);
  keyboardDidHide = () => {
    setFocus(false);
    if (inputRefP != null && inputRefP.current != null)
      inputRefP.current.blur();
  };
  Keyboard.addListener("keyboardDidHide", keyboardDidHide);

  return (
    <View style={styles.view}>
      {!focus ? (
        <Layout style={styles.layoutCoche}>
          <Coche></Coche>
        </Layout>
      ) : (
        <Layout style={styles.layoutCoche2}></Layout>
      )}

      <Card style={styles.card}>
        <KeyboardAwareScrollView>
          <Layout style={styles.layoutFormulary}>
            <Text style={styles.text} category="h2">
              Taller APP
            </Text>
            <Input
              ref={inputRefP}
              size="large"
              placeholder="Usuario"
              value={user}
              style={styles.input}
              onChangeText={(nextValue) => setUser(nextValue)}
              onFocus={(focus) => setFocus(focus)}
              onBlur={(focus) => setFocus(!focus)}
            />
            <Input
              ref={inputRefP}
              size="large"
              placeholder="Contraseña"
              textContentType="password"
              secureTextEntry={true}
              value={pasword}
              style={styles.input}
              onChangeText={(nextValue) => setPasword(nextValue)}
              onFocus={(focus) => setFocus(focus)}
              onBlur={(focus) => setFocus(!focus)}
            />
            <Button
              appearance="filled"
              size="large"
              style={styles.button}
              onPress={() => navigation.navigate("Usuarios")}
            >
              Login
            </Button>
            <Button
              appearance="filled"
              size="large"
              style={styles.textButton}
              onPress={() => navigation.navigate("Registro")}
            >
              Registrarse
            </Button>
          </Layout>
        </KeyboardAwareScrollView>
      </Card>
    </View>
  );
}

export default function Login({ navigation }) {
  return (
    <Layout style={styles.root}>
      <CardLogin navigation={navigation}></CardLogin>
    </Layout>
  );
}
