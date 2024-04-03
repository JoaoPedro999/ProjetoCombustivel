import React from "react";
import { Modal, View, Image, Text, TextComponent } from "react-native";
import styles from "../styles/styles";
import BtnComponent from "../components/btnComponent";
import TxtComponent from "../components/textComponent";
export default function ModalComponent({
  visible,
  alcoolValor,
  gasolinaValor,
  recomendacao,
  onClose,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image style={styles.icon} source={require("../images/gas.png")} />
          <Text style={styles.modalText}>
            Preço do Álcool: R$ {alcoolValor}
          </Text>
          <Text style={styles.modalText}>
            Preço da Gasolina: R$ {gasolinaValor}
          </Text>
          <Text style={styles.rectext}>Recomendação: {recomendacao}</Text>
          <BtnComponent onPress={onClose}>
            <TxtComponent estilo={styles.btntext} texto="Calcular Novamente" />
          </BtnComponent>
        </View>
      </View>
    </Modal>
  );
}
