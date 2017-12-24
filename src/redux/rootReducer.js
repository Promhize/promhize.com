import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as reducers from 'redux/reducers'

reducers.routing = routerReducer
const rootReducer = combineReducers(reducers)

export default rootReducer
