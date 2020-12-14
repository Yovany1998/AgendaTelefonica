import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import {
  Button,
  Container,
  Content,
  H1,
  Text,
  Textarea,
  Spinner,
  View,
  Form,
} from "native-base";
import * as Font from "expo-font";
import { Grid } from "react-native-easy-grid";

//destructuring
const { width, height } = Dimensions.get("window");

// Importar el contexto de las notas
import { NumbersContext } from "../context/NumbersContext";

const AddContact = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [nombre, setNombre] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
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
      await addNewNumber(nombre,lastname,number,mail, refreshNumbers);

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
        <Form>
        <Grid>
          <Image
            source={require("../../assets/siu.jpg")}
            style={styles.wallpaper}
          />
        </Grid>
        <H1>Fill the information below</H1>

        <Textarea
          rowSpan={2}
          bordered
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
          style={errorNumber ? styles.inputError : styles.number}
          style={styles.caja}
        />
        {errorNumber ? (
          <Text style={styles.error}>¡Debes ingresar un nombre!</Text>
        ) : null}


        <Textarea
          rowSpan={2}
          bordered
          placeholder="Apellido"
          value={lastname}
          onChangeText={setLastname}
          style={errorNumber ? styles.inputError : styles.number}
          style={styles.caja}
        />
        {errorNumber ? (
          <Text style={styles.error}>¡Debes ingresar un apellido!</Text>
        ) : null}

        <Textarea
          rowSpan={2}
          bordered
          placeholder="Numero"
          value={number}
          onChangeText={setNumber}
          style={errorNumber ? styles.inputError : styles.number}
          style={styles.caja}
        />
        {errorNumber ? (
          <Text style={styles.error}>¡Debes ingresar un numero!</Text>
        ) : null}

         <Textarea
          rowSpan={2}
          bordered
          placeholder="Correo Electronico"
          value={mail}
          onChangeText={setMail}
          style={styles.number}
          style={styles.caja}
        />

        <Button
          style={styles.button}
          onPress={handlerNewNumber}
          style={styles.caja}
          // disabled={enableSave}
        >
          <Text>Guardar</Text>
        </Button>
        </Form>
        
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
    //padding: 10,
  },
  button: {
    fontFamily: "Roboto",
  },
  caja: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderColor: "black",
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
  wallpaper: {
    flex: 1,
    height: height * 1,
  },
});

export default AddContact;
