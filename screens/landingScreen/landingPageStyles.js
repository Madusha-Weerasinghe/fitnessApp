import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },

  title: {
    color: "white",
    textAlign: "center",
    fontSize: "25",
    fontWeight: "600",
  },

  subtitle: {
    color: "white",
    textAlign: "center",
    fontSize: "18",
    fontWeight: "300",
    marginTop: 10,
  },
  getStart: {
    backgroundColor: "rgba(255, 115, 0, 0.75)",
    marginTop: 30,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: 50,
    borderRadius: 15,
  },

  getStartText: {
    fontSize: "18",
    fontWeight: "500",
    color: "white",
  },

  container: {
    justifyContent: "center",
    marginTop: "130%",
  },
});

export default styles;
