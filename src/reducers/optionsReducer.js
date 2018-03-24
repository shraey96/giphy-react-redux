import {OPTIONS} from '../actions/types';

const initialState = {
  searchTerm : ''
}


export default function(state = initialState, action){
  switch (action.type) {
    case 'OPTIONS':

    return {
      ...state,
      searchTerm: action.payload
    }


    default:
      return state
  }
}
