import React from "react";
import { Button, Icon, List, ListItem } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const data = new Array(20).fill({
  title: "Title for Item",
  description: "Description for Item",
});

export default function ListUsuarios() {
  const renderItemAccessory = (props) => (
    <Button
      size="tiny"
      style={{ borderColor: "#53BEB4", backgroundColor: "#53BEB4" }}
    >
      CONSULTAR
    </Button>
  );

  const renderItemIcon = (props) => <Icon {...props} name="person" />;

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return <List style={styles.container} data={data} renderItem={renderItem} />;
}

const styles = StyleSheet.create({
  container: {
    maxHeight: "100%",
  },
});
