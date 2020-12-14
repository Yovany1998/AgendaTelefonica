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
const { width, height } = Dimensions.get("window");

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
        <Form>
        <Grid>
          <Image
            source={require("../../assets/siu.jpg")}
            style={styles.wallpaper}
          />
        </Grid>
        <H1 style={styles.h1}>Update contact</H1>

        <Textarea
          value={theNombre}
          //style={styles.number}
          bordered
          rowSpan={2}
          onChange={setTheNumber}
          style={styles.caja}
        />
        {errorNumber ? (
          <Text style={styles.error}>You need to add the names!</Text>
        ) : null}


       <Textarea
          value={theLastname}
          style={styles.caja}
          bordered
          rowSpan={2}
          onChange={setTheLastname}
        />
        {errorNumber ? (
          <Text style={styles.error}>You need to add the surnames!</Text>
        ) : null}
        

        <Textarea
          value={theNumber}
          style={styles.caja}
          bordered
          rowSpan={2}
          onChange={setTheNumber}
        />
        {errorNumber ? (
          <Text style={styles.error}>You need to add the phone number!</Text>
        ) : null}

        <Textarea
          value={theMail}
          style={styles.caja}
          bordered
          rowSpan={2}
          onChange={setTheMail}
        />

        <Button style={styles.button} block onPress={handlerSaveNumber}>
          <Text style={styles.si} >
            Save</Text>
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
  si: {
    color: "#7ed321",
  },
  container: {
    //padding: 10,
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
    //fontFamily: "Roboto",
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
