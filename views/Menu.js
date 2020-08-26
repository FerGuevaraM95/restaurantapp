import React, {useContext, useEffect} from 'react';
import {Text} from 'react-native';

import {FirebaseContext} from '../context/firebase/firebaseCotext';

export const Menu = () => {
  // Firebase context
  const {menu, getProducts} = useContext(FirebaseContext);

  useEffect(() => {
    getProducts();

    console.log('Menu:', menu);
  }, []);

  return <Text>Menu</Text>;
};
