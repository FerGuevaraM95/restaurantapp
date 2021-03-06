import React, {useReducer} from 'react';

import {OrdersContext} from './ordersContext';
import {OrdersReducer} from './ordersReducer';
import {
  SELECTED_PRODUCT,
  CONFIRM_ORDER_MEAL,
  SHOW_SUMMARY,
  DELETE_PRODUCT,
  ORDERED_ORDER,
} from '../../types';

export const OrdersState = (props) => {
  // Initial State
  const initialState = {
    order: [],
    meal: null,
    total: 0,
    orderId: '',
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

  // Delete article
  const deleteProduct = (id) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  };

  const orderPlaced = (id) => {
    dispatch({
      type: ORDERED_ORDER,
      payload: id,
    });
  };

  return (
    <OrdersContext.Provider
      value={{
        order: state.order,
        meal: state.meal,
        total: state.total,
        orderId: state.orderId,
        selectedMeal,
        saveOrder,
        showSummary,
        deleteProduct,
        orderPlaced,
      }}>
      {props.children}
    </OrdersContext.Provider>
  );
};
