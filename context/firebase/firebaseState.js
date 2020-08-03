import React, {useReducer} from 'react';

import {FirebaseReducer} from './firebaseReducer';
import {FirebaseContext} from './firebaseCotext';

export const FirebaseState = (props) => {
  // Initial State
  const initialState = {
    menu: [],
  };

  // Usereducer with dispach for run functions
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  return (
    <FirebaseContext.Provider value={{menu: state.menu}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
