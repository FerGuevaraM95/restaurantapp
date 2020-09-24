import React, {useContext, useEffect} from 'react';
import {Stylesheet, Alert} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Button,
  Body,
  Left,
  Text,
  H1,
  Footer,
  FooterTab,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {OrdersContext} from '../context/orders/ordersContext';
import globalStyles from '../styles/global';

export const OrderSummary = () => {
  const {order, total, showSummary} = useContext(OrdersContext);

  useEffect(() => {
    calculateTotal();
  }, [total]);

  calculateTotal = () => {
    let newTotal = 0;
    newTotal = order.reduce((newTotal, article) => newTotal + article.total, 0);

    showSummary(newTotal);
  };

  return (
    <Container style={globalStyles.container}>
      <Content style={globalStyles.content}>
        <H1 style={globalStyles.title}>Resumen Pedido</H1>

        {order.map((meal, i) => {
          const {quantity, name, image, id, price} = meal;
          return (
            <List key={id + i}>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail large square source={{uri: image}} />
                </Left>
                <Body>
                  <Text>{name}</Text>
                  <Text>Cantidad: {quantity}</Text>
                  <Text>Precio: ${price}</Text>
                </Body>
              </ListItem>
            </List>
          );
        })}

        <Text style={globalStyles.quantity}>Total a pagar: ${total}</Text>
      </Content>
    </Container>
  );
};
