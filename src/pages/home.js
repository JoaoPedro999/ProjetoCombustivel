import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import InputComponent from "../components/inputComponent";
import BtnComponent from "../components/btnComponent";
import ModalComponent from "./modalComponent";
import styles from "../styles/styles";

export default function Calcular() {
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
      <Image style={styles.image} source={require("../images/logo.png")} />
      <Text style={styles.title}>Calculadora de Combustível</Text>
      <Text style={styles.text}>Preço do Alcool/Litro</Text>
      <InputComponent
        placeholder="Preço do Álcool"
        value={alcoolValor}
        onChangeText={(text) => setAlcoolValor(text)}
      />
      <Text style={styles.text}>Preço da Gasolina/Litro</Text>
      <InputComponent
        placeholder="Preço da Gasolina"
        value={gasolinaValor}
        onChangeText={(text) => setGasolinaValor(text)}
      />
      <BtnComponent onPress={calcularRecomendacao}>
        <Text style={styles.btntext}>Calcular</Text>
      </BtnComponent>

      <ModalComponent
        visible={modalVisible}
        alcoolValor={alcoolValor}
        gasolinaValor={gasolinaValor}
        recomendacao={recomendacao}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}
