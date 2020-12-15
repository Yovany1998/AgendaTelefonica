import React from "react";
import { StyleSheet, Text, Image, Dimensions } from "react-native";
import { Container, Form, Button,} from "native-base";
import { Grid } from "react-native-easy-grid";

//destructuring
const { width, height } = Dimensions.get("window");

//renderizar pantalla
const Start = ({ navigation }) => {
  return (
    //backgroundcolor el color de fondo
    <Container> 
      <Form>
      <Grid>
        {/* Imagen de fondo */}
          <Image
            source={require("../../assets/siu.jpg")}
            style={styles.wallpaper}
          />
        </Grid>
        {/* Imagen de encabezado */}
      <Image
        source={require("../../assets/simio.png")}
        style={styles.photoImage}
      />
        {/* Boton para pagina de agregar contactos */}
        <Button
          onPress={() => navigation.navigate("Add contact")}
          style={styles.buttonCenter}
          block
        >
          <Text style={styles.buttonName}>Add contacts </Text>
        </Button>
        {/* Boton para pagina de ver contactos */}
        <Button  
          onPress={() => navigation.navigate("Contacts")}
          style={styles.buttonCenter}
          block
          
        >
          <Text style={styles.buttonName}>View contacts </Text>
        </Button>
      </Form>
     
     
     
    </Container>
  );
};

// Estilos de la pantalla 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  photoImage: {
    width: width,
    height: "25%",
    resizeMode: "contain",
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
  },
  wallpaper: {
    flex: 1,
    height: height * 1,
  },
});

export default Start;