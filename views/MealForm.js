import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Form,
  Icon,
  Input,
  Grid,
  Col,
  Button,
  Text,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {OrdersContext} from '../context/orders/ordersContext';
import globalStyles from '../styles/global';

export const MealForm = () => {
  const [quantity, setQuantity] = useState(1);

  const calculateQuantity = (quantity) => {};

  const incrementOne = () => {
    const newQuantity = parseInt(quantity) + 1;
    setQuantity(newQuantity);
  };

  const decrementOne = () => {
    if (quantity > 1) {
      const newQuantity = parseInt(quantity) - 1;
      setQuantity(newQuantity);
    }
  };

  return (
    <Container>
      <Content>
        <Form>
          <Text style={globalStyles.title}>Cantidad</Text>
          <Grid>
            <Col>
              <Button
                props
                dark
                style={{height: 80, justifyContent: 'center'}}
                onPress={() => decrementOne()}>
                <Icon style={{fontSize: 40}} name="remove" />
              </Button>
            </Col>
            <Col>
              <Input
                style={{textAlign: 'center', fontSize: 20}}
                keyboardType="numeric"
                value={quantity.toString()}
                onChangeText={(quantity) => setQuantity(quantity)}
              />
            </Col>
            <Col>
              <Button
                props
                dark
                style={{height: 80, justifyContent: 'center'}}
                onPress={() => incrementOne()}>
                <Icon style={{fontSize: 40}} name="add" />
              </Button>
            </Col>
          </Grid>
        </Form>
      </Content>
    </Container>
  );
};
