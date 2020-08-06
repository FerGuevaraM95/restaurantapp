import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import globalStyles from '../styles/global';

export const NewOrder = () => {
  const navigation = useNavigation();

  return (
    <Container style={globalStyles.container}>
      <View style={[globalStyles.content, styles.content]}>
        <Button
          style={globalStyles.button}
          rounded
          block
          onPress={() => navigation.navigate('Menu')}>
          <Text style={globalStyles.buttonText}>Crear Nueva Order</Text>
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
