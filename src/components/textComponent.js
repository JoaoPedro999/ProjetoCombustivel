import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export default function TxtComponent({ texto, titulo }) {
  return (
    <View>
      <Text style={styles.title}>{texto}</Text>
      <Text style={styles.title}>{titulo}</Text>
    </View>
  );
}
