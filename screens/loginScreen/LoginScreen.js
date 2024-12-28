import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import styles from "./loginScreenStyles";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    let isValid = true;

    setUsernameError("");
    setPasswordError("");

    if (username.trim() === "") {
      setUsernameError("Username cannot be empty");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password cannot be empty");
      isValid = false;
    }

    if (isValid) {
      if (username === "Madusha" && password === "12345678") {
        navigation.navigate("Home", { username });
      } else {
        Alert.alert("Error", "Invalid username or password");
      }
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/login3.png")}
      style={styles.background}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.loginBox}>
              <Text style={styles.title}>Login</Text>
              <Text style={styles.head}>
                Welcome Back! Please log in to continue.
              </Text>
              <Text style={styles.username}>Username</Text>
              {usernameError ? (
                <Text style={styles.error}>{usernameError}</Text>
              ) : null}
              <TextInput
                style={styles.input}
                placeholder="Enter your username"
                placeholderTextColor="rgb(179, 179, 179)"
                value={username}
                onChangeText={setUsername}
              />

              <Text style={styles.username}>Password</Text>
              {passwordError ? (
                <Text style={styles.error}>{passwordError}</Text>
              ) : null}
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="rgb(179, 179, 179)"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />

              <TouchableOpacity style={styles.login} onPress={handleLogin}>
                <Text style={styles.loginText}>LOG IN</Text>
              </TouchableOpacity>
              <Text style={styles.register}>
                Don't have an account?{" "}
                <Text
                  style={{ color: "rgb(255, 115, 0)" }}
                  onPress={() => navigation.navigate("Register")}
                >
                  Register now!
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;
