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
} from "native-base";

// Utilizar el contexto de notas
import { NumbersContext } from "../context/NumbersContext";

const NumbersListScreen = ({ navigation }) => {
  const { numbers } = useContext(NumbersContext);

  console.log(numbers);

  return (
    <Container>
      <Content>
        <List>
          {numbers
            ? numbers.map((number) => (
                <ListItem key={number.id.toString()}>
                  <Text>{number.number}</Text>
                </ListItem>
              ))
            : null}
        </List>
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
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default NumbersListScreen;
