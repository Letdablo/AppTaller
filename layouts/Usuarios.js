import React from "react";
import {
  Button,
  Icon,
  Layout,
  List,
  ListItem,
  Card,
} from "@ui-kitten/components";

import { StyleSheet, View, Text } from "react-native";

const data = new Array(20).fill({
  title: "Title for Item",
  description: "Description for Item",
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: -10,
  },
  layout: {
    backgroundColor: "#fff",
    borderRadius: 0,
    marginVertical: 8,
    marginRight: 10,
  },
  root: {
    width: "100%",
    maxHeight: "100%",
  },
  card: {
    elevation: 3,
    borderColor: "#fff",
    borderRadius: 10,
    margin: 5,
  },
  icon: {
    width: 32,
    height: 32,
  },
  description: {
    color: "#8F9BB3",
  },
});

export default function ListUsuarios() {
  const renderItem = ({ item, index }) => (
    <Card style={styles.card}>
      <Layout style={styles.container}>
        <Layout style={styles.layout}>
          <Icon style={styles.icon} fill="#357776" name="person" />
        </Layout>
        <Layout style={styles.layout}>
          <Text>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </Layout>
        <Layout style={styles.layout}></Layout>
        <Layout style={styles.layout}>
          <Button
            size="small"
            style={{
              backgroundColor: "#357776",
              borderColor: "#357776",
              padding: 3,
            }}
          >
            INFO
          </Button>
        </Layout>
        <Layout style={styles.layout}>
          <Button
            size="small"
            style={{ borderColor: "#53BEB4", backgroundColor: "#53BEB4" }}
          >
            CITAS
          </Button>
        </Layout>
      </Layout>
    </Card>
  );

  return <List style={styles.root} data={data} renderItem={renderItem} />;
}
