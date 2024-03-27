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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
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
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 30,
    borderWidth: 5,
    borderColor: "red",
    borderRadius: 50,
  },
});

export default styles;
