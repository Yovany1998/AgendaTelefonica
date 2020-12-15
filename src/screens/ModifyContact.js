import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import {
  Container,
  Content,
  Text,
  Textarea,
  Spinner,
  Button,
  H1,
  Form,
} from "native-base";
import * as Font from "expo-font";
import { Grid } from "react-native-easy-grid";

//destructuring
const { height } = Dimensions.get("window");

// Importar el contexto de los contactos
import { NumbersContext } from "../context/NumbersContext";

// Pantalla de ModifyContact
const ModifyContact = ({ route, navigation }) => {
  const { id } = route.params;
  const [theNumber, setTheNumber] = useState(null);
  const [theMail, setTheMail] = useState(null);
  const [theNombre, setTheNombre] = useState(null);
  const [theLastname, setTheLastname] = useState(null);
  const [errorNumber, setErrorNumber] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const numbersContext = useContext(NumbersContext);
  const { number, getNumberById, updateNumber } = numbersContext;


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

  // Funcion que se ejecuta en el use effect
  const getNumber = (id, number)=>
{
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
  }
};

  // Use effect para que se renderize la pantalla de ModifyContact
  useEffect(() => {
    getNumber(id, number);
  }, []);

  // Funcion para actualizar el contacto
  const handlerUpdateNumber = async () => {
    // Validar que el contacto tiene valor
    if (number) {
      await updateNumber(theNombre,theLastname,theNumber,theMail,id);
      // Regresar a la pantalla anterior
      navigation.goBack();
    } else {
      setErrorNumber(true);
    }
  };
  
  // Spinner 
  if (!number) {
    return (
      <Content contentContainerStyle={styles.content}>
        <Spinner color="blue" />
      </Content>
    );
  }
 
  return (
    <Content>
      <Container style={styles.container}>
        <Form>
        <Grid>
          {/* Imagen de encabezado */}
          <Image
            source={require("../../assets/siu.jpg")}
            style={styles.wallpaper}
          />
        </Grid>
        <H1 style={styles.h1}>Update contact</H1>
              
          {/* Casilla de nombre */}
          <Textarea
            value={theNombre}
            bordered
            
            onChangeText={setTheNombre}
            style={styles.caja}
          />
          {errorNumber ? (
            <Text style={styles.error}>You need to add the names!</Text>
          ) : null}
        
         {/* Casilla de apellido */}
       <Textarea
          value={theLastname}
          style={styles.caja}
          bordered
          rowSpan={2}
          onChangeText={setTheLastname}
        />
        {errorNumber ? (
          <Text style={styles.error}>You need to add the surnames!</Text>
        ) : null}
        
        {/* Casilla de numero */}
        <Textarea
          value={theNumber}
          style={styles.caja}
          bordered
          rowSpan={2}
          onChangeText={setTheNumber}
        />
        {errorNumber ? (
          <Text style={styles.error}>You need to add the phone number!</Text>
        ) : null}

        {/* Casilla de correo */}
        <Textarea
          value={theMail}
          style={styles.caja}
          bordered
          rowSpan={2}
          onChangeText={setTheMail}
        />

        {/* Boton para actualizar */}
        <Button style={styles.button} block onPress={handlerUpdateNumber}>
          <Text style={styles.si} >
            Save</Text>
        </Button>
        </Form>
      </Container>
    </Content>
  );
};

// Estillos para la pantalla de ModifyContact
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
  },
  si: {
    color: "#7ed321",
  },
  error: {
    fontSize: 12,
    color: "red",
    marginBottom: 10,
  },
  inputError: {
    borderColor: "red",
  },
  h1:{
    marginLeft:90,
    marginTop:30,
    marginBottom: 30,
  },
  wallpaper: {
    flex: 1,
    height: height * 1,
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
});

export default ModifyContact;
