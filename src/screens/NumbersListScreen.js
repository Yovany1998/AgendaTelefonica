import React, { useContext } from "react";
import { StyleSheet } from "react-native";
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
} from "native-base";

// Utilizar el contexto de notas
import { NumbersContext } from "../context/NumbersContext";

const NumbersListScreen = ({ navigation }) => {
  const { numbers } = useContext(NumbersContext);

  return (
    <Container>
      <Content>
        <List>
          {numbers
            ? numbers.map((number) => (
                <ListItem
                  key={number.id.toString()}
                  onPress={() => {
                    navigation.navigate("numberModify", { id: number.id });
                  }}
                >
                  <Body>
                    <Text numberOfLines={2}>{number.nombre}</Text>
                    <Text numberOfLines={2}>{number.number}</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              ))
            : null}
        </List>
      </Content>
      <Fab
        active={true}
        position="bottomRight"
        style={{ backgroundColor: "#ff0023" }}
        direction="up"
        onPress={() => {
          navigation.navigate("numberCreate");
        }}
      >
        <Icon name="plus" type="FontAwesome" />
      </Fab>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default NumbersListScreen;
