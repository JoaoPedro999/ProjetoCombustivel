import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "../styles/styles";

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
          <TouchableOpacity style={styles.btn} onPress={onClose}>
            <Text style={styles.btntext}>Calcular Novamente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
