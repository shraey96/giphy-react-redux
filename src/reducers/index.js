import {combineReducers} from 'redux';
// import postReducer from './postReducer';
import gifReducer from './gifReducer';
import optionsReducer from './optionsReducer';

export default combineReducers({
  gifs: gifReducer,
  options: optionsReducer
})
