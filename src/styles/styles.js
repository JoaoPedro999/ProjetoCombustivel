import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    padding: 20,
    backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  input: {
    width: "90%",
    height: 40,
    backgroundColor: "white",
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "black",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  modalContent: {
    backgroundColor: "black",
    padding: 20,
    elevation: 5,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    color: "white",
  },
  rectext: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
    color: "green",
  },
  btn: {
    width: "100",
    height: "200",
    backgroundColor: "red",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 15,
  },
  btntext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 30,
    borderWidth: 5,
    borderColor: "red",
    borderRadius: 50,
  },
  text: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    height: 120,
    width: 120,
    resizeMode: "cover",
    bottom: 70,
  },
  icon: {
    resizeMode: "cover",
    bottom: 70,
  },
});

export default styles;
