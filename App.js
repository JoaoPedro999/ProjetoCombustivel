import React, { useState } from "react";
import { View, Text, TextInput, Button, Modal, StyleSheet } from "react-native";

export default function FuelCalculator() {
  const [alcoholPrice, setAlcoholPrice] = useState("");
  const [gasolinePrice, setGasolinePrice] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const calculateRecommendation = () => {
    const alcohol = parseFloat(alcoholPrice);
    const gasoline = parseFloat(gasolinePrice);
  };
  return (
    <View style={styles.container}>
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
      <Button title="Calcular" onPress={calcularRecommendacao} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Preço do Álcool: R$ {alcoolValor}
            </Text>
            <Text style={styles.modalText}>
              Preço da Gasolina: R$ {gasolinaValor}
            </Text>
            <Text style={styles.modalText}>Recomendação: {recomendacao}</Text>
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
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
    padding: 20,
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
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
