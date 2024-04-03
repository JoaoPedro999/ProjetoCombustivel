import React from "react";
import { Modal, View, Image } from "react-native";
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
          <TxtComponent style={styles.modalText}>
            Preço do Álcool: R$ {alcoolValor}
          </TxtComponent>
          <TxtComponent style={styles.modalText}>
            Preço da Gasolina: R$ {gasolinaValor}
          </TxtComponent>
          <TxtComponent style={styles.rectext}>
            Recomendação: {recomendacao}
          </TxtComponent>
          <BtnComponent onPress={onClose}>
            <TxtComponent style={styles.btntext}>
              Calcular Novamente
            </TxtComponent>
          </BtnComponent>
        </View>
      </View>
    </Modal>
  );
}
