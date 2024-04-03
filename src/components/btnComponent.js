import React, { Children } from "react";
import { TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function BtnComponent({ onPress, children }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
