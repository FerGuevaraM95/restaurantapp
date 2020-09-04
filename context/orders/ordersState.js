import React, {useReducer} from 'react';

import {OrdersContext} from './ordersContext';
import {OrdersReducer} from './ordersReducer';
import {SELECTED_PRODUCT} from '../../types';

export const OrdersState = (props) => {
  // Initial State
  const initialState = {
    order: [],
    meal: null,
  };

  // Usereducer with dispach for run functions
  const [state, dispatch] = useReducer(OrdersReducer, initialState);

  // Selected product
  const selectedMeal = (meal) => {
    dispatch({
      type: SELECTED_PRODUCT,
      payload: meal,
    });
  };

  return (
    <OrdersContext.Provider
      value={{order: state.order, meal: state.meal, selectedMeal}}>
      {props.children}
    </OrdersContext.Provider>
  );
};
