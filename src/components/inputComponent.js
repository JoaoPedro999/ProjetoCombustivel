import React from "react";
import { TextInput, StyleSheet } from "react-native";
import styles from "../styles/styles";

export default function InputComponent({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
}
