import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "../styles/styles";

export default function BtnComponent({ onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btntext}>Calcular</Text>
    </TouchableOpacity>
  );
}
