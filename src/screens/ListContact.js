import React, { useContext } from "react";
import { StyleSheet} from "react-native";
import {
  Container,
  Content,
  Icon,
  List,
  ListItem,
  Text,
  Body,
  Right,
  Form,
} from "native-base";

// Utilizar el contexto de los contactos
import { NumbersContext } from "../context/NumbersContext";

// Creacion de pantalla de ListContact
const ListContact = ({ navigation }) => {
const { numbers } = useContext(NumbersContext);

  return ( 
    <Container>
      <Content style={styles.content}>
        {/* Lista de contactos */}
        <Form>
        <List style={styles.list}>
          {numbers
            ? numbers.map((number) => (
                <ListItem
                  key={number.id.toString()}
                  onPress={() => {
                    navigation.navigate("Update", { id: number.id });
                  }}
                >
                  {/* Datos del contacto */}
                  <Body>
                    <Text numberOfLines={2} style={styles.name}>Names: {number.nombre}</Text>
                    <Text numberOfLines={2} style={styles.name}>Surnames: {number.lastname}</Text>
                    <Text numberOfLines={2} style={styles.name}>Phone number: {number.number}</Text>
                    <Text numberOfLines={2} style={styles.name}>Email: {number.mail}</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              ))
            : null}
        </List>
        </Form>
      </Content>
    </Container>
  );
};

// Estilos para pagina de ListContact
const styles = StyleSheet.create({
  list:{
    backgroundColor: "gray",
  },
  name:{
    color: "white",
  },
  content:{
    backgroundColor: "gray",
  },
});

export default ListContact;
