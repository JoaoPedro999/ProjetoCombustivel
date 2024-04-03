import React, { useState } from "react";
import { View, Image, TextComponent } from "react-native";
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
      <TxtComponent style={styles.title}>
        Calculadora de Combustível
      </TxtComponent>
      <TxtComponent style={styles.text}>Preço do Alcool/Litro</TxtComponent>
      <InputComponent
        placeholder="Preço do Álcool"
        value={alcoolValor}
        onChangeText={(text) => setAlcoolValor(text)}
      />
      <TxtComponent style={styles.text}>Preço da Gasolina/Litro</TxtComponent>
      <InputComponent
        placeholder="Preço da Gasolina"
        value={gasolinaValor}
        onChangeText={(text) => setGasolinaValor(text)}
      />
      <BtnComponent onPress={calcularRecomendacao}>
        <TxtComponent style={styles.btntext}>Calcular</TxtComponent>
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