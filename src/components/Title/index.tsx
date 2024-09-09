import React from "react";
import { Text, Pressable, Keyboard } from "react-native";
import styles from "./style";

export default function Title() {
  return(
    <Pressable style={styles.boxTitle} onPress={Keyboard.dismiss} android_disableSound>
      <Text style={styles.textTitle}>OH MY IMC 😱</Text>
    </Pressable>
  )
}