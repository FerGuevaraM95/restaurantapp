import React, {useReducer} from 'react';

import {OrdersContext} from './ordersContext';
import {OrdersReducer} from './ordersReducer';

export const OrdersState = (props) => {

  // Initial State
  const initialState = {
    order: [],
  };

  // Usereducer with dispach for run functions
  const [state, dispatch] = useReducer(OrdersReducer, initialState);

  return (
    <OrdersContext.Provider value={{order: state.order}}>
      {props.children}
    </OrdersContext.Provider>
  );
};
