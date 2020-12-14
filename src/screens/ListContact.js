import React, { useContext } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Content,
  Fab,
  Icon,
  List,
  ListItem,
  Text,
  Body,
  Right,
  Form,
} from "native-base";
import { Grid } from "react-native-easy-grid";

// Utilizar el contexto de notas
import { NumbersContext } from "../context/NumbersContext";

const ListContact = ({ navigation }) => {
  const { numbers } = useContext(NumbersContext);

  return ( 
    <Container>
      <Content style={styles.content}>
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
      {/* <Fab
        active={true}
        position="bottomRight"
        style={{ backgroundColor: "#ff0023" }}
        direction="up"
        onPress={() => {
          navigation.navigate("numberCreate");
        }}
      >
        <Icon name="plus" type="FontAwesome" />
      </Fab> */}
    </Container>
  );
};

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
