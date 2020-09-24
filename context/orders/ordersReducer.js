import {SELECTED_PRODUCT, CONFIRM_ORDER_MEAL, SHOW_SUMMARY} from '../../types';

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
    case SHOW_SUMMARY:
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};
