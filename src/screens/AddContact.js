import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  Container,
  Content,
  H1,
  Text,
  Textarea,
  Spinner,
  View,
} from "native-base";
import * as Font from "expo-font";

// Importar el contexto de las notas
import { NumbersContext } from "../context/NumbersContext";

const AddContact = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [nombre, setNombre] = useState("");
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [enableSave, setEnableSave] = useState(true);
  const [errorNumber, setErrorNumber] = useState(false);
  const numbersContext = useContext(NumbersContext);
  const { addNewNumber, refreshNumbers } = numbersContext;

  // Cargar la fuente de manera asíncrona
  useEffect(() => {
    const loadFontsAsync = async () => {
      await Font.loadAsync({
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }).then(() => {
        setFontsLoaded(true);
      });
    };

    loadFontsAsync();
  }, []);

  // Ejecutar el efecto cuando el valor de la nota cambie
  useEffect(() => {
    if (number) setEnableSave(false);
    else setEnableSave(true);
  }, [number]);

  const handlerNewNumber = async () => {
    // Validar que la nota tiene valor
    if (number) {
      await addNewNumber(nombre,number, refreshNumbers);

      // Regresar a la pantalla anterior
      navigation.goBack();
    } else {
      setErrorNumber(true);
    }
  };

  if (!fontsLoaded)
    return (
      <Content contentContainerStyle={styles.content}>
        <Spinner color="blue" />
      </Content>
    );

  return (
    <Content>
      <Container style={styles.container}>
        <H1>Ingresa numero</H1>

        <Textarea
          rowSpan={2}
          bordered
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
          style={errorNumber ? styles.inputError : styles.number}
        />
        {errorNumber ? (
          <Text style={styles.error}>¡Debes ingresar un nombre!</Text>
        ) : null}

        <Textarea
          rowSpan={2}
          bordered
          placeholder="Numero"
          value={number}
          onChangeText={setNumber}
          style={errorNumber ? styles.inputError : styles.number}
        />
        {errorNumber ? (
          <Text style={styles.error}>¡Debes ingresar un numero!</Text>
        ) : null}

        
        <Button
          style={styles.button}
          onPress={handlerNewNumber}
          // disabled={enableSave}
        >
          <Text>Guardar</Text>
        </Button>
      </Container>
    </Content>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    padding: 10,
  },
  button: {
    fontFamily: "Roboto",
  },
  error: {
    fontSize: 12,
    color: "red",
    marginBottom: 10,
  },
  inputError: {
    borderColor: "red",
  },
  number: {
    borderColor: "black",
    marginBottom: 10,
  },
});

export default AddContact;
