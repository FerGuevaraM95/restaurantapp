import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Text, H1, H3, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Countdown from 'react-countdown';

import {firebase} from '../firebase';
import {OrdersContext} from '../context/orders/ordersContext';
import globalStyles from '../styles/global';

export const OrderProgress = () => {
  const {orderId} = useContext(OrdersContext);

  const navigation = useNavigation();

  const [time, setTime] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const getProduct = () => {
      firebase.db
        .collection('orders')
        .doc(orderId)
        .onSnapshot(function (doc) {
          setTime(doc.data().deliveryTime);
          setCompleted(doc.data().completed);
        });
    };
    getProduct();
  }, []);

  // show Countdown
  const renderer = ({minutes, seconds}) => {
    return (
      <Text style={styles.time}>
        {minutes}:{seconds}
      </Text>
    );
  };

  return (
    <Container style={globalStyles.container}>
      <View style={[globalStyles.content, {marginTop: 50}]}>
        {!time ? (
          <>
            <Text style={{textAlign: 'center'}}>
              Hemos recibido tu orden...
            </Text>
            <Text style={{textAlign: 'center'}}>
              Calculando el tiempo de entrega
            </Text>
          </>
        ) : null}

        {!completed && time ? (
          <>
            <Text style={{textAlign: 'center'}}>
              Su orden estará lista en:{' '}
            </Text>
            <Text>
              <Countdown date={Date.now() + time * 60000} renderer={renderer} />
            </Text>
          </>
        ) : null}

        {completed && (
          <>
            <H1 style={styles.completedText}>Orden Lista</H1>
            <H3 style={styles.completedText}>
              Por favor, pase a recoger su pedido
            </H3>

            <Button
              style={[globalStyles.button, {marginTop: 100}]}
              rounded
              block
              onPress={() => navigation.navigate('NewOrder')}>
              <Text style={globalStyles.buttonText}>
                Comenr una nueva orden
              </Text>
            </Button>
          </>
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  time: {
    marginBottom: 20,
    fontSize: 60,
    textAlign: 'center',
    margin: 30,
  },
  completedText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 20,
  },
});
