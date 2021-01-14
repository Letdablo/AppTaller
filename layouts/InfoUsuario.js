import React, { useEffect } from "react";
import { Layout, List, Card, Divider } from "@ui-kitten/components";

import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    borderColor: "#fff",
    borderRadius: 10,
    margin: 20,
  },
});

export default function InfoUsuario({ route, navigation }) {
  const [datauser, setDatauser] = React.useState(0);
  const { userId } = route.params;
  useEffect(() => {
    populateDataUser(userId);
  }, []);

  return (
    <Layout
      style={{
        width: "100%",
        flex: 1,
      }}
    >
      <Card style={styles.card}>
        <Text>{datauser.clientName + " " + datauser.surname}</Text>
        {datauser.documentType ? (
          <Text>{datauser.documentType.name + ": " + datauser.document}</Text>
        ) : (
          <Text></Text>
        )}

        <Text>{datauser.clientEmail}</Text>

        {datauser.phones ? (
          datauser.phones.map((e) => {
            return <Text>{e.phoneNumber}</Text>;
          })
        ) : (
          <Text>Sin telefonos</Text>
        )}
        <Text>Vehiculos:</Text>
        {datauser.vehicles ? (
          datauser.vehicles.map((e, i) => {
            return <Text>{"  " + (i + 1) + ". " + e.plateNumber}</Text>;
          })
        ) : (
          <Text>Sin vehiculos</Text>
        )}
      </Card>
    </Layout>
  );

  function populateDataUser(clientId) {
    fetch(`https://garageapi.pre.manki.es/api/Client/Details/${clientId}`, {})
      .then(function (response) {
        return response.json();
      })
      .then(function (resp) {
        setDatauser(resp);
      });
  }
}
