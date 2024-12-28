import React, { useState } from "react";
import styles from "./landingPageStyles";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const LandingPage = ({ navigation }) => {
  const handleGetStart = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/landing4.png")} // Replace with your image path
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Don’t stop when you’re tired.</Text>
        <Text style={styles.title}>Stop when you’re done.</Text>
        <Text style={styles.subtitle}>
          Your Journey to a Dream Body Starts Here.
        </Text>
        <TouchableOpacity style={styles.getStart} onPress={handleGetStart}>
          <Text style={styles.getStartText}>GET START</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LandingPage;
