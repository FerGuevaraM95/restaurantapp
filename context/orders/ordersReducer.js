import {SELECTED_PRODUCT} from '../../types';

export const OrdersReducer = (state, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        meal: action.payload,
      };
    default:
      return state;
  }
};
