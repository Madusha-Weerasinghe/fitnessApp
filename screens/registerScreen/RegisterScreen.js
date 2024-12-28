import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./registerScreenStyles";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({});

  const [isPickerVisible, setPickerVisible] = useState(false);
  const [isPickerGenderVisible, setPickerGenderVisible] = useState(false);

  const handleSelectAge = (selectedAge) => {
    setAge(selectedAge);
    setPickerVisible(false);
  };

  const handleSelectGender = (selectedGender) => {
    setGender(selectedGender);
    setPickerGenderVisible(false);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required.";
      isValid = false;
    }

    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "A valid email is required.";
      isValid = false;
    }

    if (!age) {
      newErrors.age = "Age is required.";
      isValid = false;
    }

    if (!gender) {
      newErrors.gender = "Gender is required.";
      isValid = false;
    }

    if (!password || password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
      isValid = false;
    }

    if (password !== reenterPassword) {
      newErrors.reenterPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = () => {
    if (validateForm()) {
      navigation.navigate("Login");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/login3.png")}
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={100}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.loginBox}>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.head}>Join Today, Transform Tomorrow!</Text>

            <Text style={styles.username}>Username</Text>
            {errors.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="rgb(179, 179, 179)"
              value={username}
              onChangeText={setUsername}
            />

            <Text style={styles.username}>Email</Text>
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="rgb(179, 179, 179)"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.username}>Age</Text>
            {errors.age && <Text style={styles.error}>{errors.age}</Text>}
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setPickerVisible(true)}
            >
              <Text style={styles.dropdownText}>
                {age ? `${age}` : "Select your age"}
              </Text>
            </TouchableOpacity>

            <Modal visible={isPickerVisible} transparent animationType="slide">
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <FlatList
                    data={Array.from({ length: 100 }, (_, i) => `${i + 1}`)}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.option}
                        onPress={() => handleSelectAge(item)}
                      >
                        <Text style={styles.optionText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setPickerVisible(false)}
                  >
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <Text style={styles.username}>Gender</Text>
            {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setPickerGenderVisible(true)}
            >
              <Text style={styles.dropdownText}>
                {gender ? `${gender}` : "Select your gender"}
              </Text>
            </TouchableOpacity>

            <Modal
              visible={isPickerGenderVisible}
              transparent
              animationType="slide"
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  {["Male", "Female"].map((item) => (
                    <TouchableOpacity
                      key={item}
                      style={styles.option}
                      onPress={() => handleSelectGender(item)}
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setPickerGenderVisible(false)}
                  >
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <Text style={styles.username}>Password</Text>
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="rgb(179, 179, 179)"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Text style={styles.username}>Re-enter Password</Text>
            {errors.reenterPassword && (
              <Text style={styles.error}>{errors.reenterPassword}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Re-enter your password"
              placeholderTextColor="rgb(179, 179, 179)"
              secureTextEntry
              value={reenterPassword}
              onChangeText={setReenterPassword}
            />

            <TouchableOpacity style={styles.login} onPress={handleRegister}>
              <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default RegisterScreen;
