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
      onSelect={() => navigation.navigate("Citas")}
      indicatorStyle={{
        backgroundColor: "#357776",
        height: 4,
      }}
    >
      <BottomNavigationTab
        icon={PersonIcon}
        title="USUARIOS"
        onPress={() => navigation.navigate("Citas")}
      />
      <BottomNavigationTab
        icon={BellIcon}
        title="VEHICULOS"
        onPress={() => navigation.navigate("Citas")}
      />
      <BottomNavigationTab
        icon={EmailIcon}
        title="ORDENES"
        onPress={() => navigation.navigate("Citas")}
      />
    </BottomNavigation>
  );
}
