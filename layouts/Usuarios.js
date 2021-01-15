import React, { useEffect } from "react";
import {
  Button,
  Icon,
  Layout,
  List,
  ListItem,
  Card,
} from "@ui-kitten/components";
import { Alert } from "react-native";
import { Linking } from "react-native";
import { SearchBar } from "react-native-elements";

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
  layout2: {
    width: "45%",
    backgroundColor: "#fff",
    borderRadius: 0,
    marginVertical: 8,
    marginRight: 10,
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

export default function ListUsuarios({ navigation }) {
  const [users, setUsers] = React.useState(0);
  const [allusers, setAllusers] = React.useState(0);
  const [search, setSearch] = React.useState(0);
  useEffect(() => {
    populateDataUsers();
  }, []);

  return (
    <Layout
      style={{
        width: "100%",
        flex: 1,
      }}
    >
      <SearchBar
        style={{ width: 400 }}
        placeholder="Buscar Clientes..."
        onChangeText={(e) => filter(e)}
        value={search}
      />
      <ListUsuariosComponent navigation={navigation} users={users} />
    </Layout>
  );
  function filter(searchNew) {
    setSearch(searchNew);
    let array = [];
    if (searchNew != "") {
      allusers.map((e) => {
        let fullname = e.clientName + " " + e.surname;
        if (fullname.toUpperCase().includes(searchNew.toUpperCase()))
          array.push(e);
      });
      setUsers(array);
    } else {
      setUsers(allusers);
    }
  }

  function populateDataUsers() {
    fetch(`https://garageapi.pre.manki.es/api/Client/ClientSearch`, {
      method: "POST",
      body: JSON.stringify({
        name: "",
        surname: "",
        document: "",
        email: "",
        phone: "",
        onlyPendingComments: false,
        onlyOpenOrders: false,
        onlyFavorite: false,
        tags: [],
        orderCriteriaId: "1",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (resp) {
        setUsers(resp);
        setAllusers(resp);
      });
  }
}

function ListUsuariosComponent({ navigation, users }) {
  const renderItem = ({ item, index }) => (
    <Card style={styles.card}>
      <Layout style={styles.container}>
        <Layout style={styles.layout}>
          <Icon style={styles.icon} fill="#357776" name="person" />
        </Layout>
        <Layout style={styles.layout2}>
          <Text>+{item.clientName + " " + item.surname}</Text>
          <Text
            onPress={() => Linking.openURL(`tel:${"+" + item.phone}`)}
            style={styles.description}
          >
            {"+" + item.phone}
          </Text>
        </Layout>
        <Layout style={styles.layout}></Layout>
        <Layout style={styles.layout}>
          <Button
            onPress={() =>
              navigation.navigate("Informacion Usuario", {
                userId: item.clientId,
              })
            }
            size="small"
            style={{
              backgroundColor: "#357776",
              borderColor: "#357776",
              paddingTop: 15,
              paddingBottom: 15,
              padding: 3,
            }}
          >
            INFO
          </Button>
        </Layout>
        <Layout style={styles.layout}>
          <Button
            onPress={() =>
              navigation.navigate("Citas", { userId: item.clientId })
            }
            size="small"
            style={{
              paddingTop: 15,
              paddingBottom: 15,
              borderColor: "#53BEB4",
              backgroundColor: "#53BEB4",
            }}
          >
            CITAS
          </Button>
        </Layout>
      </Layout>
    </Card>
  );

  return <List style={styles.root} data={users} renderItem={renderItem} />;
}
