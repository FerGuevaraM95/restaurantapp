import {
  SELECTED_PRODUCT,
  CONFIRM_ORDER_MEAL,
  SHOW_SUMMARY,
  DELETE_PRODUCT,
} from '../../types';

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
    case DELETE_PRODUCT:
      return {
        ...state,
        order: state.order.filter((article) => article.id !== action.payload),
      };
    default:
      return state;
  }
};
