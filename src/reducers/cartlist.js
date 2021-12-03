import { ADD, CNUM, CTOTAL, DEL } from '../actions/constants'

const initState = JSON.parse(localStorage.getItem('cart')) || []

const renderCart = (state = initState, {type, payload}) => {
  switch (type) {
  case ADD:
    // eslint-disable-next-line no-case-declarations
    const copy = JSON.parse(JSON.stringify(state))
    // eslint-disable-next-line no-case-declarations
    let temp = copy.find((item) => parseInt(item.key) === parseInt(payload.key))
    if (temp) {
      copy.forEach((item) => {
        if (parseInt(item.key) === parseInt(payload.key)) {
          item.num += 1
        }
      })
    } else {
      copy.push(payload)
    }
    localStorage.setItem('cart', JSON.stringify(copy))
    return copy
  case CNUM:
    // eslint-disable-next-line no-case-declarations
    const copy1 = JSON.parse(JSON.stringify(state))
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
    const copy2 = JSON.parse(JSON.stringify(state))
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
    localStorage.setItem('cart', JSON.stringify(copy2))
    return copy2
  case DEL:
    // eslint-disable-next-line no-case-declarations
    let copy3 = JSON.parse(JSON.stringify(state))
    copy3 = copy3.filter((item) => parseInt(item.key) !== parseInt(payload.key))
    localStorage.setItem('cart', JSON.stringify(copy3))
    return copy3
  default:
    return state
  }
}
export default renderCart
