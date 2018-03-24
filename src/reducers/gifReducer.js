import {FETCH_GIFS} from '../actions/types';

const initialState = {
  gifResults: []
}


export default function(state = initialState, action){
  switch (action.type) {
    case 'FETCH_GIFS':

    return {
      ...state,
      gifResults: action.payload
    }


    default:
      return state
  }
}
