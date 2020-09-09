import React, {useContext} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Text,
  H1,
  Card,
  CardItem,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {OrdersContext} from '../context/orders/ordersContext';
import globalStyles from '../styles/global';

export const MealDetail = () => {
  // Order Context
  const {meal} = useContext(OrdersContext);
  const {name, image, description, price} = meal;

  const navigation = useNavigation();

  return (
    <Container style={globalStyles.container}>
      <Content style={globalStyles.content}>
        <H1 style={globalStyles.title}>{name}</H1>
        <Card>
          <CardItem>
            <Body>
              <Image source={{uri: image}} style={globalStyles.image} />
              <Text style={{marginTop: 20}}>{description}</Text>
              <Text style={globalStyles.quantity}>Precio ${price}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
      <Footer>
        <FooterTab>
          <Button
            style={globalStyles.button}
            onPress={() => navigation.navigate('MealForm')}>
            <Text style={globalStyles.buttonText}>Ordenar Platillo</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
