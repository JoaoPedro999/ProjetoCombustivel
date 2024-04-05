import React from "react";
import { Text, View } from "react-native";

export default function TxtComponent({ texto, estilo }) {
  return (
    <View>
      <Text style={estilo}>{texto}</Text>
    </View>
  );
}
