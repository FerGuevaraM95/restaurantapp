import React, {useContext, useEffect, Fragment} from 'react';
import {
  Container,
  Separator,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import globalStyles from '../styles/global';
import {FirebaseContext} from '../context/firebase/firebaseCotext';
import {OrdersContext} from '../context/orders/ordersContext';
import {StyleSheet} from 'react-native';

export const Menu = () => {
  // Firebase context
  const {menu, getProducts} = useContext(FirebaseContext);

  // Orders context
  const {selectedMeal} = useContext(OrdersContext);

  // Hook for redirect
  const navigation = useNavigation();

  useEffect(() => {
    getProducts();
  }, []);

  const showHeading = (category, i) => {
    if (i > 0) {
      const prevCategory = menu[i - 1].category;
      if (prevCategory !== category) {
        return (
          <Separator style={styles.separator}>
            <Text style={styles.textSeparator}>{category}</Text>
          </Separator>
        );
      }
    } else {
      return (
        <Separator style={styles.separator}>
          <Text style={styles.textSeparator}>{category}</Text>
        </Separator>
      );
    }
  };

  return (
    <Container style={globalStyles.container}>
      <Content style={{backgroundColor: '#FFFFFF'}}>
        <List>
          {menu.map((meal, i) => {
            const {id, image, name, description, price, category} = meal;

            return (
              <Fragment key={id}>
                {showHeading(category, i)}
                <ListItem
                  onPress={() => {
                    const {existence, ...meal2} = meal;
                    selectedMeal(meal2);
                    navigation.navigate('MealDetail');
                  }}>
                  <Thumbnail large square source={{uri: image}} />
                  <Body>
                    <Text>{name}</Text>
                    <Text note numberOfLines={2}>
                      {description}
                    </Text>
                    <Text>Precio: ${price}</Text>
                  </Body>
                </ListItem>
              </Fragment>
            );
          })}
        </List>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#000000',
  },
  textSeparator: {
    color: '#FFDA00',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
