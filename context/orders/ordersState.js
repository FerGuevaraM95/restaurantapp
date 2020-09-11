import React, {useReducer} from 'react';

import {OrdersContext} from './ordersContext';
import {OrdersReducer} from './ordersReducer';
import {SELECTED_PRODUCT, CONFIRM_ORDER_MEAL} from '../../types';

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

  // Save order
  const saveOrder = (order) => {
    dispatch({
      type: CONFIRM_ORDER_MEAL,
      payload: order,
    });
  };

  return (
    <OrdersContext.Provider
      value={{order: state.order, meal: state.meal, selectedMeal, saveOrder}}>
      {props.children}
    </OrdersContext.Provider>
  );
};
