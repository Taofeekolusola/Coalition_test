import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {thunk} from'redux-thunk';
import rootReducer from './rootReducer';
//import { composeWithDevTools } from 'redux-devtools-extension';

//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;