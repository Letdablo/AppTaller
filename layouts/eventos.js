import React from "react";
import { Layout, List, Card, Divider } from "@ui-kitten/components";

import { StyleSheet, View, Text } from "react-native";

const data = new Array(3).fill({
  title: "12/10/20 16:40h",
  description: "Revision",
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
  },

  root: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
  },
  card: {
    marginBottom: 20,
    width: "47%",
    height: 160,
    elevation: 5,
    borderColor: "#53BEB4",
    backgroundColor: "#357776",
    borderRadius: 10,
    margin: 5,
  },
  title: {
    color: "#fff",
    fontSize: 15,
  },
  description: {
    color: "#fff",
  },
  divider: {
    marginBottom: 10,
  },
});

export default function ListEventos() {
  const renderItem = ({ item, index }) => (
    <Layout style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title} category="h2">
          {item.title}
        </Text>
        <Divider style={styles.divider} />
        <Text style={styles.description}>{item.description}</Text>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.title} category="h2">
          {item.title}
        </Text>
        <Divider style={styles.divider} />
        <Text style={styles.description}>{item.description}</Text>
      </Card>
    </Layout>
  );

  return <List style={styles.root} data={data} renderItem={renderItem} />;
}
