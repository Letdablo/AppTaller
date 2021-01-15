import React, { useEffect } from "react";
import { Layout, List, Card, Divider, Icon } from "@ui-kitten/components";
import { Linking } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "@ui-kitten/components";
const styles = StyleSheet.create({
  card: {
    elevation: 3,
    borderColor: "#fff",
    borderRadius: 10,
    margin: 20,
  },
  container: {
    flexDirection: "row",
    marginLeft: -10,
    width: "100%",
  },
  containerButtons: {
    flexDirection: "row",
    margin: 20,
    width: "100%",
  },
  text: {
    fontSize: 18,
    margin: 15,
  },
  textDescripcion: {
    marginTop: -5,
    color: "#8F9BB3",
  },
  textHeader: {
    fontSize: 22,
    margin: 15,
    color: "white",
  },
  cardHeader: {
    elevation: 3,

    borderColor: "#fff",
    backgroundColor: "#357776",
    borderRadius: 10,
    margin: 20,
  },
  icon: { width: 32, height: 32, marginTop: 10 },
  iconButton: { width: 30, height: 30, marginTop: 0 },
  layout: {
    backgroundColor: "#fff",
    borderRadius: 0,
    marginVertical: 8,

    margin: 5,
  },
  layout2: {
    borderRadius: 0,
    marginVertical: 8,
    marginRight: 10,
  },
  buttonNotas: {
    width: "40%",
    margin: 10,
    backgroundColor: "#357776",
    borderRadius: 10,
    borderColor: "#357776",
    paddingTop: 15,
    paddingBottom: 15,
    padding: 3,
  },
});
const NotasIcon = (props) => (
  <Icon style={styles.iconButton} fill="white" name="file-outline" />
);

const CitasIcon = (props) => (
  <Icon style={styles.iconButton} fill="white" name="calendar-outline" />
);

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
      <Card style={styles.cardHeader}>
        <Text style={styles.textHeader}>
          {datauser.clientName + " " + datauser.surname}
        </Text>
      </Card>
      <Card style={styles.card}>
        <Layout style={styles.container}>
          <Layout style={styles.layout}>
            <Icon style={styles.icon} fill="#357776" name="person-outline" />
          </Layout>
          {datauser.documentType ? (
            <Layout style={styles.layout2}>
              <Text style={styles.text}>
                {datauser.documentType.name + "  " + datauser.document}
              </Text>
            </Layout>
          ) : (
            <Text style={styles.text}></Text>
          )}
        </Layout>
        <Divider></Divider>
        <Layout style={styles.container}>
          <Layout style={styles.layout}>
            <Icon style={styles.icon} fill="#357776" name="email-outline" />
          </Layout>
          <Layout style={styles.layout2}>
            <Text
              onPress={() => Linking.openURL("mailto:" + datauser.clientEmail)}
              style={styles.text}
            >
              {datauser.clientEmail}
            </Text>
          </Layout>
        </Layout>
        <Divider></Divider>
        <Layout style={styles.container}>
          <Layout style={styles.layout}>
            <Icon style={styles.icon} fill="#357776" name="phone-outline" />
          </Layout>
          {datauser.phones ? (
            datauser.phones.map((e) => {
              return (
                <Layout style={styles.layout2}>
                  <Text
                    style={styles.text}
                    onPress={() =>
                      Linking.openURL(`tel:${"+34" + e.phoneNumber}`)
                    }
                  >
                    {e.phoneNumber}
                  </Text>
                </Layout>
              );
            })
          ) : (
            <Text style={styles.text}>Sin telefonos</Text>
          )}
          <Divider></Divider>
        </Layout>
      </Card>
      <Card style={styles.card}>
        <Layout style={styles.container}>
          {datauser.vehicles ? (
            datauser.vehicles.map((e, i) => {
              return (
                <Layout style={styles.container}>
                  <Layout style={styles.layout}>
                    <Icon
                      style={styles.icon}
                      fill="#357776"
                      name="car-outline"
                    />
                  </Layout>
                  <Layout style={styles.layout2}>
                    <Text style={styles.text}>{e.make + " " + e.model}</Text>
                    <Text style={styles.textDescripcion}>
                      {"  " + "  " + e.plateNumber}
                    </Text>
                  </Layout>
                </Layout>
              );
            })
          ) : (
            <Text style={styles.text}>Sin vehiculos</Text>
          )}
        </Layout>
      </Card>
      <Layout style={styles.containerButtons}>
        <Button
          onPress={() =>
            navigation.navigate("Citas", {
              userId: datauser.clientId,
            })
          }
          size="medium"
          style={styles.buttonNotas}
          accessoryLeft={CitasIcon}
        >
          <Text style={{ marginBottom: 10 }}>CITAS</Text>
        </Button>
        <Button
          onPress={() =>
            navigation.navigate("Notas Usuario", {
              userId: datauser.clientId,
            })
          }
          size="medium"
          style={styles.buttonNotas}
          accessoryLeft={NotasIcon}
        >
          <Text style={{ marginBottom: 10 }}>NOTAS</Text>
        </Button>
      </Layout>
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
