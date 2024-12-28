import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

const HomeCard = ({
  navigation,
  name,
  target,
  bodyPart,
  equipment,
  imgUrl,
}) => {
  return (
    <View style={styles.cardView}>
      <View style={styles.cardLeft}>
        <Image source={{ uri: imgUrl }} style={styles.image} />
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.target}>
          Target : <Text style={styles.textData}>{target}</Text>
        </Text>
        <Text style={styles.target}>
          Body Part: <Text style={styles.textData}>{bodyPart}</Text>
        </Text>
        <Text style={styles.target}>
          Equipment : <Text style={styles.textData}>{equipment}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    display: "flex",
    flexDirection: "row",
    height: 120,
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 15,
    marginBottom: 15,
  },
  cardLeft: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardRight: {
    height: "black",
    flex: 2,
    paddingLeft: 20,
    paddingTop: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 500,
  },
  target: {
    marginBottom: 5,
    fontWeight: 350,
  },
  textData: {
    color: "gray",
  },
});
export default HomeCard;
