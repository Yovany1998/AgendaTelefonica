import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Content,
  Text,
  Textarea,
  Spinner,
  Button,
} from "native-base";
import * as Font from "expo-font";

// Importar el contexto de las notas
import { NumbersContext } from "../context/NumbersContext";

const ModifyContact = ({ route, navigation }) => {
  const { id } = route.params;
  const [theNumber, setTheNumber] = useState(null);
  const [theMail, setTheMail] = useState(null);
  const [theNombre, setTheNombre] = useState(null);
  const [theLastname, setTheLastname] = useState(null);
  const [errorNumber, setErrorNumber] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const numbersContext = useContext(NumbersContext);
  const { number, getNumberById } = numbersContext;


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

  useEffect(() => {
    const getNumber = () => {
      getNumberById(id);
    };

    getNumber();

    // Verificar si la nota tiene valor previo a extraer sus valores
    if (number.length) {
      setTheNumber(number[0].number);
      setTheNombre(number[0].nombre);
      setTheLastname(number[0].lastname);
      setTheMail(number[0].mail);

      // console.log(theNumber);
      // console.log(theNombre);
      // console.log(theLastname);
      // console.log(theMail);
    }
  }, [id, number]);



  const handlerSaveNumber = async () => {
    // Validar que la nota tiene valor
    if (number) {
      await addNewNumber(nombre,lastname,number,mail, refreshNumbers);

      // Regresar a la pantalla anterior
      navigation.goBack();
    } else {
      setErrorNumber(true);
    }
  };

  if (!theNumber) {
    return (
      <Content contentContainerStyle={styles.content}>
        <Spinner color="blue" />
      </Content>
    );
  }
 
  return (
    <Content>
      <Container style={styles.container}>
        <Text>Modificar Contacto</Text>

        <Textarea
          value={theNombre}
          style={styles.number}
          bordered
          rowSpan={2}
          onChange={setTheNumber}
        />
        {errorNumber ? (
          <Text style={styles.error}>¡Debes ingresar un nombre!</Text>
        ) : null}


       <Textarea
          value={theLastname}
          style={styles.number}
          bordered
          rowSpan={2}
          onChange={setTheLastname}
        />
        {errorNumber ? (
          <Text style={styles.error}>¡Debes ingresar un apellido!</Text>
        ) : null}
        

        <Textarea
          value={theNumber}
          style={styles.number}
          bordered
          rowSpan={2}
          onChange={setTheNumber}
        />
        {errorNumber ? (
          <Text style={styles.error}>¡Debes ingresar un numero de telefono!</Text>
        ) : null}

        <Textarea
          value={theMail}
          style={styles.number}
          bordered
          rowSpan={2}
          onChange={setTheMail}
        />

        <Button style={styles.button} onPress={handlerSaveNumber}>
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
  note: {
    borderColor: "black",
    marginBottom: 10,
  },
  error: {
    fontSize: 12,
    color: "red",
    marginBottom: 10,
  },
  inputError: {
    borderColor: "red",
  },
});

export default ModifyContact;
