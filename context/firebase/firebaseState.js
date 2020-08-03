import React, {useReducer} from 'react';

import {firebase} from '../../firebase';
import {FirebaseReducer} from './firebaseReducer';
import {FirebaseContext} from './firebaseCotext';

export const FirebaseState = (props) => {

  console.log(firebase);

  // Initial State
  const initialState = {
    menu: [],
  };

  // Usereducer with dispach for run functions
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  return (
    <FirebaseContext.Provider value={{menu: state.menu, firebase}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
