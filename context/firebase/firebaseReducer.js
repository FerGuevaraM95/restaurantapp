import {GET_PRODUCTS_SUCCESS} from '../../types';

export const FirebaseReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};
