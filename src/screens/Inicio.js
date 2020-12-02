import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Input, Container, Form, Item, H1, Button, Content } from "native-base";

//destructuring
const { width, height } = Dimensions.get("window");
//renderizar pantalla
const Inicio = () => {
  return (
    //backgroundcolor el color de fondo
    <Container>
     <Image
        source={require("../../assets/agenda.jpeg")}
        style={styles.photoImage}
      />
      
       
        <Button
          style={styles.buttonCenter}
          block
        >
          <Text style={styles.buttonName}>Add numero </Text>
        </Button>
        <Button  
          style={styles.buttonCenter}
          block
          blue
        >
          <Text style={styles.buttonName}>view contacts </Text>
        </Button>
     
     
    </Container>
  );
};

//estilos de la pantalla
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      input: {
        margin: 15,
      },
      photoImage: {
        width: width,
        height: "12%",
        resizeMode: "contain",
        //marginTop: 20,
      },
  buttonName: {
    fontSize: 25,
  },
  buttonCenter: {
    marginTop: "30%",
    marginRight: "10%",
    marginLeft: "10%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    //flex: 6,
  },
});

export default Inicio;