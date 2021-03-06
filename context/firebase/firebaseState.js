import React, {useReducer} from 'react';
import _ from 'lodash';

import {firebase} from '../../firebase';
import {FirebaseReducer} from './firebaseReducer';
import {FirebaseContext} from './firebaseCotext';
import {GET_PRODUCTS_SUCCESS} from '../../types';

export const FirebaseState = (props) => {
  // console.log(firebase);

  // Initial State
  const initialState = {
    menu: [],
  };

  // Usereducer with dispach for run functions
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  const getProducts = () => {
    firebase.db
      .collection('products')
      .where('existence', '==', true)
      .onSnapshot(handleSnapshot);

    function handleSnapshot(snapshot) {
      let meals = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      // Order by category with lodash
      meals = _.sortBy(meals, 'category');

      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: meals,
      });
    }
  };

  return (
    <FirebaseContext.Provider value={{menu: state.menu, firebase, getProducts}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
