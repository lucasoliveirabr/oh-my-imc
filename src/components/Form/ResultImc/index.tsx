import React from "react";
import { View, Text, TouchableOpacity, Share, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "./style";

interface Props {
  messageResultImc: string;
  resultImc: string;
}

export default function ResultImc({ messageResultImc, resultImc }: Props) {
  const onShare = async () => {
    try {
      await Share.share({
        message: "Meu IMC hoje é: " + resultImc
      })
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      } else {
        Alert.alert('Erro inesperado.');
      }
    }
  }

  return(
    <View style={styles.contextImc}>
      <Text style={styles.information}>{messageResultImc}</Text>
      <Text style={styles.resultImc}>{resultImc}</Text>
      <View style={styles.boxShareButton}>
        <TouchableOpacity style={styles.shareButton} onPress={onShare}>
          <AntDesign style={styles.imageShareButton} name="sharealt" size={16} color="white" />
          <Text style={styles.textShareButton}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}