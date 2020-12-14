import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Input, Container, Form, Item, H1, Button, Content } from "native-base";
import { Grid } from "react-native-easy-grid";

//destructuring
const { width, height } = Dimensions.get("window");
//renderizar pantalla
const Start = ({ route, navigation }) => {
  return (
    //backgroundcolor el color de fondo
    <Container> 
      <Form>
      <Grid>
          <Image
            source={require("../../assets/siu.jpg")}
            style={styles.wallpaper}
          />
        </Grid>
      <Image
        source={require("../../assets/simio.png")}
        style={styles.photoImage}
      />
      
       
        <Button
          onPress={() => navigation.navigate("Add contact")}
          style={styles.buttonCenter}
          block
        >
          <Text style={styles.buttonName}>Add contacts </Text>
        </Button>
        <Button  
          onPress={() => navigation.navigate("VerModificar")}
          style={styles.buttonCenter}
          block
          
        >
          <Text style={styles.buttonName}>View contacts </Text>
        </Button>
      </Form>
     
     
     
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
        height: "25%",
        resizeMode: "contain",
        //marginTop: 20,
      },
  buttonName: {
    fontSize: 25,
    color: "#7ed321",
  },
  buttonCenter: {
    marginTop: "15%",
    marginRight: "10%",
    marginLeft: "10%",
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    height: "14%",
    //flex: 6,
  },
  wallpaper: {
    flex: 1,
    height: height * 1,
  },
});

export default Start;