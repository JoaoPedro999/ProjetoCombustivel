import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function FuelCalculator() {
  const [alcoolValor, setAlcoolValor] = useState("");
  const [gasolinaValor, setGasolinaValor] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [recomendacao, setRecomendacao] = useState("");

  const calcularRecomendacao = () => {
    const alcool = parseFloat(alcoolValor);
    const gasolina = parseFloat(gasolinaValor);

    const recomendacao = alcool / gasolina < 0.7 ? "Álcool" : "Gasolina";
    setRecomendacao(recomendacao);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Image
        // Define o estilo da imagem (altura de 50 pixels, largura de 50 pixels e redimensionamento para cobrir)
        style={{ height: 100, width: 100, resizeMode: "cover" }}
        source={require("./src/images/logo.png")}
      />
      <Text style={styles.title}>Calculadora de Combustível</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        value={alcoolValor}
        onChangeText={(text) => setAlcoolValor(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        value={gasolinaValor}
        onChangeText={(text) => setGasolinaValor(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={calcularRecomendacao}>
        <Text style={styles.btntext}>Calcular</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              style={{ height: 50, width: 50, resizeMode: "cover" }}
              // Define a fonte/caminho da imagem (neste caso, uma imagem importada localmente)
              source={require("./src/images/gas.png")}
            />
            <Text style={styles.modalText}>
              Preço do Álcool: R$ {alcoolValor}
            </Text>
            <Text style={styles.modalText}>
              Preço da Gasolina: R$ {gasolinaValor}
            </Text>
            <Text style={styles.rectext}>Recomendação: {recomendacao}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.btntext}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    padding: 20,
    borderWidth: 10,
    borderRadius: 30,
    borderColor: "black",
    width: "10%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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
    height: "100",
    backgroundColor: "red",
  },
  btntext: {
    color: "white",
    fontWeight: "bold",
  },
});
