import { ADD, CNUM, CTOTAL } from '../actions/constants'

const initState = JSON.parse(localStorage.getItem('cart')) || []

const renderCart = (state = initState, {type, payload}) => {
  console.log(payload);
  console.log(type);
  switch (type) {
  case ADD:
    // eslint-disable-next-line no-case-declarations
    const copy = [...state]
    copy.push(payload)
    localStorage.setItem('cart', JSON.stringify(copy))
    return copy
  case CNUM:
    // eslint-disable-next-line no-case-declarations
    const copy1 = [...state]
    copy1.forEach((item) => {
      if (parseInt(item.key) === parseInt(payload.key)) {
        item.total = item.price * payload.num
        item.num = payload.num
      }
    })
    localStorage.setItem('cart', JSON.stringify(copy1))
    return copy1
  case CTOTAL:
    // eslint-disable-next-line no-case-declarations
    const copy2 = [...state]
    console.log(payload);
    copy2.forEach((item) => {
      item.checked = false
    })
    for (let i = 0; i < payload.payload.length; i++) {
      copy2.forEach((item) => {
        if (parseInt(item.key) === payload.payload[i].key) {
          item.checked = true
        }
      })
    }
    return copy2
  default:
    return state
  }
}
export default renderCart
