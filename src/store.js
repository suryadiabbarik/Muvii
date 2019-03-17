import { createStore, combineReducers, applyMiddleware } from 'redux'
import movieApp from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';


const reducers = combineReducers({
    movieApp,
    composeWithDevTools
  })
  
  const middlewares = applyMiddleware(
    thunkMiddleware,
    routerMiddleware
  )
  
  export default createStore(reducers, middlewares)