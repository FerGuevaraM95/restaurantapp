import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Text, H1, H3, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {OrdersContext} from '../context/orders/ordersContext';
import globalStyles from '../styles/global';

export const OrderProgress = () => {
  const {orderId} = useContext(OrdersContext);
  return (
    <Container>
      <Text>{orderId}</Text>
    </Container>
  );
};
