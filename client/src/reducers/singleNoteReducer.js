import { FETCH_SINGLE_NOTE } from './../actions/types';

export default (state = {}, action) => {
   switch (action.type) {
      case FETCH_SINGLE_NOTE:
         console.log(action.payload);
         return action.payload;
      default:
         return state;
   }
};