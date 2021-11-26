import { ADD, CNUM, CTOTAL } from './constants';
export const addCart = (adds) => ({
  type: ADD,
  payload: adds,
})

export const cNum = (adds) => {
  console.log('调用');
  return {type: CNUM, payload: adds}
}

export const cTotal = (lists) => ({type: CTOTAL, payload: lists})
