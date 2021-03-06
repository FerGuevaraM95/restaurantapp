import React, {useState, useContext, useEffect} from 'react';
import {Alert} from 'react-native';
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
  Footer,
  FooterTab,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {OrdersContext} from '../context/orders/ordersContext';
import globalStyles from '../styles/global';

export const MealForm = () => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  // context
  const {meal, saveOrder} = useContext(OrdersContext);
  const {price} = meal;

  // redirect
  const navigation = useNavigation();

  useEffect(() => {
    calculateTotal();
  }, [quantity]);

  const calculateTotal = () => {
    const totalPay = price * quantity;
    setTotal(totalPay);
  };

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

  // confirm order
  const confirmOrder = () => {
    Alert.alert(
      '¿Deseas confirmar tu pedido?',
      'Un pedido confirmado ya no se podrá modificar',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            // store order to main order
            const order = {
              ...meal,
              quantity,
              total,
            };
            saveOrder(order);
            navigation.navigate('OrderSummary');
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
    );
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
                style={{height: 80, width: '100%', justifyContent: 'center'}}
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
                style={{height: 80, width: '100%', justifyContent: 'center'}}
                onPress={() => incrementOne()}>
                <Icon style={{fontSize: 40}} name="add" />
              </Button>
            </Col>
          </Grid>
          <Text style={globalStyles.quantity}>Total: ${total}</Text>
        </Form>
      </Content>
      <Footer>
        <FooterTab>
          <Button style={globalStyles.button} onPress={() => confirmOrder()}>
            <Text style={globalStyles.buttonText}>Agregar al pedido</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
