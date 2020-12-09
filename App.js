import React, { useEffect, useRef } from "react";
import { BackHandler, Alert } from "react-native";

import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  Input,
  Card,
  Layout,
  Text,
} from "@ui-kitten/components";

import Coche from "./components/coche2.svg";
import { StyleSheet, View } from "react-native";
import { default as theme } from "./theme.json"; // <-- Import app theme
import { default as mapping } from "./mapping.json"; // <-- Import app mapping
import { Keyboard } from "react-native";

const styles = StyleSheet.create({
  input: {
    zIndex: 4,
    marginBottom: 5,
    borderRadius: 70,
    borderColor: theme["primary"],
  },
  button: {
    zIndex: 4,
    borderRadius: 70,
    backgroundColor: theme["secondary"],
    borderColor: theme["secondary"],
    marginBottom: 5,
  },
  textButton: {
    zIndex: 4,
    borderColor: theme["primary"],
    backgroundColor: theme["primary"],
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
    height: 300,
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
});

const CardSimpleUsageShowcase = () => {
  const [focus, setFocus] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [pasword, setPasword] = React.useState("");
  const inputRefU = useRef(null);
  const inputRefP = useRef(null);
  keyboardDidHide = () => {
    setFocus(false);
    inputRefU.current.blur();
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
        <Layout style={styles.layoutFormulary}>
          <Text style={styles.text} category="h2">
            Taller APP
          </Text>
          <Input
            ref={inputRefU}
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
            value={pasword}
            style={styles.input}
            onChangeText={(nextValue) => setPasword(nextValue)}
            onFocus={(focus) => setFocus(focus)}
            onBlur={(focus) => setFocus(!focus)}
          />
          <Button appearance="filled" size="large" style={styles.button}>
            Login
          </Button>
          <Button appearance="filled" size="large" style={styles.textButton}>
            Registrarse
          </Button>
        </Layout>
      </Card>
    </View>
  );
};

export default () => {
  return (
    <ApplicationProvider
      {...eva}
      theme={{ ...eva.light, ...theme }}
      customMapping={mapping}
    >
      <Layout
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CardSimpleUsageShowcase></CardSimpleUsageShowcase>
      </Layout>
    </ApplicationProvider>
  );
};
