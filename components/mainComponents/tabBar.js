import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const TabBar = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <View style={styles.cardView}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => setSelectedTab("home")}
      >
        <Icon
          name="home"
          size={30}
          color={selectedTab === "home" ? "rgba(255, 115, 0, 0.75)" : "black"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => setSelectedTab("notification")}
      >
        <Icon
          name="bell"
          size={30}
          color={
            selectedTab === "notification" ? "rgba(255, 115, 0, 0.75)" : "black"
          }
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => setSelectedTab("settings")}
      >
        <Icon
          name="cog"
          size={30}
          color={
            selectedTab === "settings" ? "rgba(255, 115, 0, 0.75)" : "black"
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    display: "flex",
    flexDirection: "row",
    height: 80,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "space-around",
    alignItems: "center",
  },
  tab: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabBar;
