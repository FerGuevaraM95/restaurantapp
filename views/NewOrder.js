import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Button, Text} from 'native-base';

export const NewOrder = () => {
  return (
    <Container>
      <View>
        <Button rounded block>
          <Text>Crear Nueva Order</Text>
        </Button>
      </View>
    </Container>
  );
};
