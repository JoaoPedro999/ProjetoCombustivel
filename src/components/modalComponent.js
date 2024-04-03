import React from "react";
import { Modal, View, Text, Image } from "react-native";
import styles from "../styles/styles";
import BtnComponent from "./btnComponent";

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
            <Text style={styles.btntext}>Calcular Novamente</Text>
          </BtnComponent>
        </View>
      </View>
    </Modal>
  );
}
