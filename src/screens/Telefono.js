// import React, { useContext, useState,Component,useEffect } from "react";
// import { TextInput,StyleSheet,Image,Dimensions  } from 'react-native';
// import { Input, Container, Form, Item, H1, Button, Content,Textarea,placeholder,Text,Spinner } from "native-base";
// import * as Font from "expo-font";
//   //destructuring
//   const { width, height } = Dimensions.get("window");


// // Importar el contexto de las notas
// import { NumbersContext } from "../context/NumbersContext";

// const Telefono = (navigation) => {
//   //const [value, onChangeText] = React.useState('Nombre');
//   const [number, setNumber] = useState("");
//   const [fontsLoaded, setFontsLoaded] = useState(false);
//   const numbersContext = useContext(NumbersContext);
//   const { addNewNumber, refreshNumbers } = numbersContext;



//   // Cargar la fuente de manera asíncrona
//   useEffect(() => {
//     const loadFontsAsync = async () => {
//       await Font.loadAsync({
//         Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
//       }).then(() => {
//         setFontsLoaded(true);
//       });
//     };

//     loadFontsAsync();
//   }, []);

//   const handlerNewNumber = () => {
    
//     addNewNumber(number, refreshNumbers);
//     // Regresar a la pantalla anterior
//     navigation.goBack();
//   };


  
//   if (!fontsLoaded)
//   return (
//     <Content contentContainerStyle={styles.content}>
//       <Spinner color="blue" />
//     </Content>
//   );


//   return (

//    <Content>
//           <Image
//         source={require("../../assets/agenda.jpeg")}
//         style={styles.phone}
//       />
//       <Container>
//         <H1    style={styles.h1}>Registrar</H1>
//         <Textarea
//             style={styles.caja}
//             rowSpan={2}
//             bordered
//             placeholder="Numero"
//             value={number}
//             onChangeText={setNumber}
//             />

// {/* <TextInput
//       style={{marginLeft:40,marginRight:40, height: 50, borderColor: '#D5DBDB', borderWidth: 1,marginTop:30 }}
//       placeholder="Tigo-Claro"
//       value={value}
//     /> */}
    
//         <Button style={styles.button} onPress={handlerNewNumber} >
//           <Text>Guardar</Text>
//         </Button>
//       </Container>
//     </Content>

    
//   );
// }
// const styles = StyleSheet.create({
//   textoInput: {
//     marginTop: 100,
//     marginLeft:50,
//     marginRight:50,
//     height: 60,
//     borderColor: 'gray',
//     borderWidth: 1 
//   },
//   phone: {
//     width: width,
//     height: "12%",
//     resizeMode: "contain",
//     marginTop: 20,
//   },
//   caja:{
//     marginLeft: 40,
//     marginRight:40
//   },
//   button:{
//     marginTop:5,
//     marginLeft: 40,
//     marginRight:40
//   },
//   h1:{
//     flex:0.1,
    
//     marginLeft: 150,
//     marginRight:90
//   },


// });

// export default Telefono;

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

const Telefono = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const numbersContext = useContext(NumbersContext);
  const { addNewNumber, refreshNumber } = numbersContext;

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

  const handlerNewNumber = () => {
    addNewNumber(number, refreshNumber);

    // Regresar a la pantalla anterior
    navigation.goBack();
  };

  if (!fontsLoaded)
    return (
      <Content contentContainerStyle={styles.content}>
        <Spinner color="blue" />
      </Content>
    );

  return (
    <Content>
      <Container>
        <H1>Ingresa tu nota</H1>
        <Textarea
          rowSpan={5}
          bordered
          placeholder="Escribe algo..."
          value={number}
          onChangeText={setNumber}
        />
        <Button style={styles.button} onPress={handlerNewNumber}>
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
    button: {
    fontFamily: "Roboto",
  },
});

export default Telefono;
