import {combineReducers} from 'redux'
import renderCart from './cartlist'

export default combineReducers({
  cart: renderCart,
})
