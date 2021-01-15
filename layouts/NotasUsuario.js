import React, { useEffect } from "react";
import {
  Button,
  Icon,
  Layout,
  List,
  ListItem,
  Card,
} from "@ui-kitten/components";

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
    width: "90%",
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

export default function NotasUsuario({ route, navigation }) {
  const { userId } = route.params;
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
        placeholder="Buscar Nota..."
        onChangeText={(e) => filter(e)}
        value={search}
      />
      <ListNotasUsuariosComponent navigation={navigation} users={users} />
    </Layout>
  );
  function filter(searchNew) {
    setSearch(searchNew);
    let array = [];
    if (searchNew != "") {
      allusers.map((e) => {
        let comment = e.comment;
        if (comment.toUpperCase().includes(searchNew.toUpperCase()))
          array.push(e);
      });
      setUsers(array);
    } else {
      setUsers(allusers);
    }
  }

  function populateDataUsers() {
    fetch(
      `https://garageapi.pre.manki.es/api/Client/GetClientCommentsByClientId/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (resp) {
        setUsers(resp);
        setAllusers(resp);
      });
  }
}

function ListNotasUsuariosComponent({ navigation, users }) {
  const renderItem = ({ item, index }) => {
    let fecha = item.createdOn.split("T")[0];
    let hora = item.createdOn.split("T")[1].split(".")[0];
    return (
      <Card style={styles.card}>
        <Layout style={styles.container}>
          <Layout style={styles.layout}>
            <Icon style={styles.icon} fill="#357776" name="file-outline" />
          </Layout>
          <Layout style={styles.layout2}>
            <Text>+{item.comment}</Text>
            <Text style={styles.description}>{fecha + "  " + hora}</Text>
          </Layout>
        </Layout>
      </Card>
    );
  };

  return <List style={styles.root} data={users} renderItem={renderItem} />;
}
