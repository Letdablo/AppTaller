import React from "react";
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

const styles = StyleSheet.create({
  input: {
    marginBottom: 5,
    borderRadius: 70,
    borderColor: theme["primary"],
  },
  button: {
    borderRadius: 70,
    backgroundColor: theme["secondary"],
    borderColor: theme["secondary"],
    marginBottom: 5,
  },
  textButton: {
    borderColor: theme["primary"],
    backgroundColor: theme["primary"],
  },
  layoutFormulary: {
    marginTop: "55%",
    borderColor: "#53BEB4",
    backgroundColor: "#53BEB4",
  },
  layoutCoche: {
    marginTop: -400,
    width: "90%",
    zIndex: 2,
    top: 40,
    backgroundColor: "rgba(76, 175, 80, 0)",
  },
  card: {
    position: "absolute",
    margin: 40,
    width: "96%",
    height: "70%",
    bottom: -20,
    borderRadius: 70,
    borderColor: "#53BEB4",
    backgroundColor: "#53BEB4",
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
  const [user, setUser] = React.useState("");
  const [pasword, setPasword] = React.useState("");

  return (
    <View style={styles.view}>
      <Layout style={styles.layoutCoche}>
        <Coche></Coche>
      </Layout>

      <Card style={styles.card}>
        <Layout style={styles.layoutFormulary}>
          <Text style={styles.text} category="h2">
            Taller APP
          </Text>
          <Input
            size="large"
            placeholder="Usuario"
            value={user}
            style={styles.input}
            onChangeText={(nextValue) => setUser(nextValue)}
          />
          <Input
            size="large"
            placeholder="Contraseña"
            value={pasword}
            style={styles.input}
            onChangeText={(nextValue) => setPasword(nextValue)}
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

export default () => (
  <ApplicationProvider
    {...eva}
    theme={{ ...eva.light, ...theme }}
    customMapping={mapping}
  >
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CardSimpleUsageShowcase></CardSimpleUsageShowcase>
    </Layout>
  </ApplicationProvider>
);
