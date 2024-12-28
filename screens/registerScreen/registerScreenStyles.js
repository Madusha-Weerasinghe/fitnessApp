import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
    textAlign: "center",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
    fontSize: 16,
    color: "white",
  },
  loginBox: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "90%",
    padding: 15,
    backdropFilter: "blur(50px)",
    borderRadius: 15,
  },

  username: {
    fontSize: 16,
    color: "white",
    textAlign: "left",
    marginBottom: 5,
  },
  login: {
    backgroundColor: "rgba(255, 115, 0, 0.75)",
    marginTop: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: 40,
    borderRadius: 15,
  },

  loginText: {
    fontSize: "16",
    fontWeight: "500",
    color: "white",
  },

  head: {
    color: "white",
    marginBottom: 10,
  },

  register: {
    color: "white",
    marginBottom: 5,
    marginTop: 30,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  dropdownText: {
    fontSize: 16,
    color: "rgb(179, 179, 179)",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    maxHeight: "50%",
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(220, 220, 220)",
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "rgba(255, 115, 0, 0.75)",
    borderRadius: 15,
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  ageGender: {
    display: "flex",
  },
  left: {
    flex: 1,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 5,
  },
});

export default styles;
