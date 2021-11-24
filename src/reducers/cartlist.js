import { ADD } from '../actions/constants'

const initState = []

const renderCart = (state = initState, {type, payload}) => {
  console.log(type);
  console.log(payload);
  switch (type) {
  case ADD:
    // eslint-disable-next-line no-case-declarations
    const copy = [...state]
    copy.push(payload)
    return copy
  default:
    return state
  }
}
export default renderCart
