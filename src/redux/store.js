import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import rootReducer from 'redux/rootReducer'

const enhancer = compose(applyMiddleware(thunk), persistState(['auth', 'user_type']), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(
  rootReducer,
  {},
  enhancer,
)

export default store
