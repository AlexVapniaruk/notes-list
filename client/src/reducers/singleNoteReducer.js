import { FETCH_SINGLE_NOTE } from './../actions/types';

export default (state = {}, action) => {
   switch (action.type) {
      case FETCH_SINGLE_NOTE:
         return action.payload;
      default:
         return state;
   }
};