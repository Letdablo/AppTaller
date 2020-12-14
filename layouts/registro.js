import React, { useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Input, Card, Layout, Text } from "@ui-kitten/components";
import Coche from "../components/registro.svg";
import { StyleSheet, View } from "react-native";
import { Keyboard } from "react-native";

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
    marginLeft: -7,
    width: "105%",
    height: 300,
    zIndex: 2,
    marginTop: 40,
    marginBottom: 10,
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

function CardRegistro({ navigation }) {
  const [focus, setFocus] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [pasword, setPasword] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [correo, setCorreo] = React.useState("");

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
            <Input
              ref={inputRefP}
              size="large"
              textContentType="nickname"
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
              placeholder="Correo"
              textContentType="emailAddress"
              value={correo}
              style={styles.input}
              onChangeText={(nextValue) => setCorreo(nextValue)}
              onFocus={(focus) => setFocus(focus)}
              onBlur={(focus) => setFocus(!focus)}
            />
            <Input
              ref={inputRefP}
              size="large"
              placeholder="telefono"
              textContentType="telephoneNumber"
              value={telefono}
              style={styles.input}
              onChangeText={(nextValue) => setTelefono(nextValue)}
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
            <Button appearance="filled" size="large" style={styles.button}>
              Registro
            </Button>
            <Button
              appearance="filled"
              size="large"
              style={styles.textButton}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Button>
          </Layout>
        </KeyboardAwareScrollView>
      </Card>
    </View>
  );
}

export default function Registro({ navigation }) {
  return (
    <Layout style={styles.root}>
      <CardRegistro navigation={navigation}></CardRegistro>
    </Layout>
  );
}
