import React, {useContext} from 'react';
import {Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {OrdersContext} from '../../context/orders/ordersContext';
import globalStyles from '../../styles/global';


export const ResumeButton = () => {
  const navigation = useNavigation();

  const {order} = useContext(OrdersContext);

  if (!order.length) return null;

  return (
    <Button
      onPress={() => navigation.navigate('OrderSummary')}
      style={globalStyles.button}>
      <Text style={globalStyles.buttonText}>Ir a Pedido</Text>
    </Button>
  );
};
