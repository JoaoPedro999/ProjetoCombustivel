import React from "react";
import { View } from "react-native";
import styles from "./src/styles/styles";
import Home from "./src/pages/home";

// Criar uma PASTA com nome de PAGES, dentro dela quero um arquivo chamado Home.js
// E tudo que você esta chamando no App.js, iria para a Home.
// O modal também pode virar uma página, e os components Texts pode virar um Component.

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
