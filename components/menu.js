import React from "react";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

const EmailIcon = (props) => <Icon {...props} name="email-outline" />;

export default function Menu({ navigation }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
      indicatorStyle={{
        backgroundColor: "#357776",
        height: 4,
      }}
    >
      <BottomNavigationTab
        icon={PersonIcon}
        title="USUARIOS"
        onSelect={(index) => navigation.navigate("Usuarios")}
      />
      <BottomNavigationTab
        icon={BellIcon}
        title="VEHICULOS"
        onSelect={(index) => navigation.navigate("Vehiculos")}
      />
      <BottomNavigationTab
        icon={BellIcon}
        title="ORDENES"
        onSelect={(index) => navigation.navigate("Ordenes")}
      />
    </BottomNavigation>
  );
}
