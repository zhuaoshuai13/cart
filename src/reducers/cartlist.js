import { ADD, CNUM } from '../actions/constants'

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
  case CNUM:
    console.log('进入');
    // eslint-disable-next-line no-case-declarations
    const copy1 = [...state]
    copy1[0].num = 10
    console.log(copy1);
    return copy1
  default:
    return state
  }
}
export default renderCart
