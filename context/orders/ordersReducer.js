import {SELECTED_PRODUCT, CONFIRM_ORDER_MEAL} from '../../types';

export const OrdersReducer = (state, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        meal: action.payload,
      };
    case CONFIRM_ORDER_MEAL:
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    default:
      return state;
  }
};
