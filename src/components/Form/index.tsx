import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard, FlatList } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

interface PropsImcList {
  id: string;
  imc: string;
}

export default function Form() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [textButton, setTextButton] = useState<string>("Calcular");
  const [messageImc, setMessageImc] = useState<string>("Preencha o peso e altura");
  const [imc, setImc] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [imcList, setImcList] = useState<PropsImcList[]>([]);

  function imcCalculator() {
    let heightFormat: number = parseFloat(height.replace(",", "."));
    let weightFormat: number = parseFloat(weight.replace(",", "."));
    let totalImc: string = (weightFormat / (heightFormat * heightFormat)).toFixed(2);
    setImcList((arr: PropsImcList[]) => [...arr, { id: new Date().getTime().toString(), imc: totalImc }]);
    setImc(totalImc);
  }

  function validationImc() {
    if (height !== "" && weight !== "") {
      Keyboard.dismiss();
      imcCalculator();
      setHeight("");
      setWeight("");
      setTextButton("Calcular novamente");
      setMessageImc("Seu IMC é de:");
      setErrorMessage("");
    } else {
      if (textButton === "Calcular novamente") {
        setTextButton(textButton);
        setMessageImc(messageImc);
        setImc("");
        setTextButton("Calcular");
      } else {
        setTextButton(textButton);
        setMessageImc(messageImc);
        setImc("");
        setErrorMessage("Campo obrigatório*");
      }
    }
  }

  return (
    <View style={styles.formContext}>
      {imc === "" ?
        <Pressable style={styles.form} onPress={Keyboard.dismiss} android_disableSound>

          <Text style={styles.formLabel}>Altura (cm)</Text>
          {errorMessage !== "" && <Text style={styles.errorMessage}>{errorMessage}</Text>}
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex: 1.75"
            inputMode="numeric"
          />

          <Text style={styles.formLabel}>Peso (kg)</Text>
          {errorMessage !== "" && <Text style={styles.errorMessage}>{errorMessage}</Text>}
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex: 75.35"
            inputMode="numeric"
          />

          <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}>
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>

        </Pressable>
        :
        <View style={styles.exhibitionResultImc}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}>
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      }

      {imcList.length > 0 &&
        <Text style={styles.historyText}>Histórico</Text>
      }

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listImcs}
        data={[...imcList].reverse()}
        renderItem={({ item }) => {
          return (
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultItemList}>Resultado IMC = </Text>
              {item.imc}
            </Text>
          )
        }}
        keyExtractor={item => item.id}
      />
    </View>
  )
}