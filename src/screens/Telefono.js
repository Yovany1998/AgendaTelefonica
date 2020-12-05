
import React, { useContext, useState,Component } from "react";
import { TextInput,StyleSheet,Image,Dimensions  } from 'react-native';
import { Input, Container, Form, Item, H1, Button, Content,Textarea,placeholder,Text } from "native-base";

  //destructuring
  const { width, height } = Dimensions.get("window");


// Importar el contexto de las notas
import { NumbersContext } from "../context/NumbersContext";
const Telefono = () => {
  const [value, onChangeText] = React.useState('Nombre');
  const [number, setNumber] = useState("");
  const numbersContext = useContext(NumbersContext);
  const { addNewNumber, refreshNumbers } = numbersContext;
  const handlerNewNumber = () => {
    addNewNumber(number, refreshNumbers);
  };

  return (

   <Content>
          <Image
        source={require("../../assets/agenda.jpeg")}
        style={styles.phone}
      />
      <Container>
        <H1    style={styles.h1}>Registrar</H1>
        <Textarea
            style={styles.caja}
            rowSpan={2}
            bordered
          placeholder="Numero"
          value={number}
    
        />

<TextInput
      style={{marginLeft:40,marginRight:40, height: 50, borderColor: '#D5DBDB', borderWidth: 1,marginTop:30 }}
      placeholder="Tigo-Claro"
      value={value}
    />
    
        <Button style={styles.button}>
          onPress={handlerNewNumber}
          <Text>Guardar</Text>
        </Button>
      </Container>
    </Content>

    
  );
}
const styles = StyleSheet.create({
  textoInput: {
    marginTop: 100,
    marginLeft:50,
    marginRight:50,
    height: 60,
    borderColor: 'gray',
    borderWidth: 1 
  },
  phone: {
    width: width,
    height: "12%",
    resizeMode: "contain",
    marginTop: 20,
  },
  caja:{
    marginLeft: 40,
    marginRight:40
  },
  button:{
    marginTop:5,
    marginLeft: 40,
    marginRight:40
  },
  h1:{
    flex:0.1,
    
    marginLeft: 150,
    marginRight:90
  },


});

export default Telefono;