import {OPTIONS} from './types';

export function alterOptions(options){

console.log("Running optionAction");

return function(dispatch){
  dispatch({
    type: 'OPTIONS',
    payload: options
  })
}

}
