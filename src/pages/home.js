import React, { useState } from "react";
import { View, Image } from "react-native";
import InputComponent from "../components/inputComponent";
import BtnComponent from "../components/btnComponent";
import ModalComponent from "./modalComponent";
import TxtComponent from "../components/textComponent";
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
      <TxtComponent estilo={styles.title} texto="Calculadora de Combustivel" />
      <TxtComponent estilo={styles.text} text="Preço do Álcool/Litro" />
      <InputComponent
        placeholder="Preço do Álcool"
        value={alcoolValor}
        onChangeText={(text) => setAlcoolValor(text)}
      />
      <TxtComponent style={styles.text} texto="Preço da Gasolina/Litro" />
      <InputComponent
        placeholder="Preço da Gasolina"
        value={gasolinaValor}
        onChangeText={(text) => setGasolinaValor(text)}
      />
      <BtnComponent onPress={calcularRecomendacao}>
        <TxtComponent estilo={styles.btntext} texto="Calcular" />
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
