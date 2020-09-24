import React, {useReducer} from 'react';

import {OrdersContext} from './ordersContext';
import {OrdersReducer} from './ordersReducer';
import {SELECTED_PRODUCT, CONFIRM_ORDER_MEAL, SHOW_SUMMARY} from '../../types';

export const OrdersState = (props) => {
  // Initial State
  const initialState = {
    order: [],
    meal: null,
    total: 0,
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

  // Show total pay at summary
  const showSummary = (total) => {
    dispatch({
      type: SHOW_SUMMARY,
      payload: total,
    });
  };

  return (
    <OrdersContext.Provider
      value={{
        order: state.order,
        meal: state.meal,
        total: state.total,
        selectedMeal,
        saveOrder,
        showSummary,
      }}>
      {props.children}
    </OrdersContext.Provider>
  );
};
