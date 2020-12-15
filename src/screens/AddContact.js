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
  Form,
} from "native-base";
import * as Font from "expo-font";
import { Grid } from "react-native-easy-grid";

//destructuring
const { height } = Dimensions.get("window");

// Importar contexto de los contactos
import { NumbersContext } from "../context/NumbersContext";

// Pantalla de agregar contacto
const AddContact = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [nombre, setNombre] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [enableSave, setEnableSave] = useState(true);
  const [errorNumber, setErrorNumber] = useState(false);
  const [errorNombre, setErrorNombre] = useState(false);
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

  // Ejecutar el efecto cuando el valor del contacto cambie
  useEffect(() => {
    if (number) setEnableSave(false);
    else setEnableSave(true);
  }, [number]);

  const handlerNewNumber = async () => {
    // Validar que el contacto tiene valor
    if (number && nombre) {
      await addNewNumber(nombre,lastname,number,mail, refreshNumbers);

      // Regresar a la pantalla anterior
      navigation.goBack();
    } 
    if (number) {
      setErrorNombre(true);
    }
    else {
      setErrorNumber(true);
    }
   
  };

  // Spinner cuando no ha cargado la pantalla
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
          {/* Imagen del encabezado */}
          <Image
            source={require("../../assets/siu.jpg")}
            style={styles.wallpaper}
          />
        </Grid>
        <H1 style={styles.h1}>Fill the information below</H1>

        {/* Casilla de nombre */}
        <Textarea
          rowSpan={2}
          bordered
          placeholder="Names"
          value={nombre}
          onChangeText={setNombre}
          style={errorNombre ? styles.inputError : styles.number}
          style={styles.caja}
        />
        {errorNombre ? (
          <Text style={styles.error}>You need to add the names!</Text>
        ) : null}

        {/* Casilla de apellido */}
        <Textarea
          rowSpan={2}
          bordered
          placeholder="Surnames"
          value={lastname}
          onChangeText={setLastname}
          style={styles.caja}
        />

        {/* Casilla de numero */}
        <Textarea
          rowSpan={2}
          bordered
          placeholder="Phone number"
          value={number}
          onChangeText={setNumber}
          style={errorNumber ? styles.inputError : styles.number}
          style={styles.caja}
        />
        {errorNumber ? (
          <Text style={styles.error}>You need to add the phone number!</Text>
        ) : null}

          {/* Casilla de correro */}
         <Textarea
          rowSpan={2}
          bordered
          placeholder="Email"
          value={mail}
          onChangeText={setMail}
          style={styles.number}
          style={styles.caja}
        />

        {/* Boton para agregar contactos */}
        <Button
          style={styles.button}
          onPress={handlerNewNumber}
          block
        >
          <Text style={styles.si}>Add</Text>
          
        </Button>
        </Form>
        
      </Container>
    </Content>
  );
};

// Estilos para la pantalla AddContact
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
  },
  si: {
    color: "#7ed321",
  },
  h1:{
    marginLeft:30,
    marginTop:30,
    marginBottom: 30,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 5,
  },
  caja: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    fontSize: 25,
    height: 40,
    borderColor: "black",
    backgroundColor: "white",
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
