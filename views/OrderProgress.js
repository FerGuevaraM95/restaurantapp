import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Text, H1, H3, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {firebase} from '../firebase';
import {OrdersContext} from '../context/orders/ordersContext';
import globalStyles from '../styles/global';

export const OrderProgress = () => {
  const {orderId} = useContext(OrdersContext);

  const [time, setTime] = useState(0);

  useEffect(() => {
    const getProduct = () => {
      firebase.db
        .collection('orders')
        .doc(orderId)
        .onSnapshot(function (doc) {
          setTime(doc.data().deliveryTime);
        });
    };
    getProduct();
  }, []);

  return (
    <Container>
      <Text>{time}</Text>
    </Container>
  );
};
