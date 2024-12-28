import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 18,
    color: "rgba(255, 115, 0, 0.75)",
  },
  topView: {
    height: 275,
    width: "100%",
    backgroundColor: "black",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  imageStyle: {
    resizeMode: "cover",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  user: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  textArea: {
    marginLeft: 25,
    marginTop: 30,
  },
  sub: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 100,
    color: "white",
  },
  headText: {
    fontSize: 25,
    fontWeight: "400",
    color: "black",
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  floatingButton: {
    position: "absolute",
    bottom: 100,
    right: 20,
    backgroundColor: "rgba(255, 115, 0, 0.75)",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 5,
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
