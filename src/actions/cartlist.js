import { ADD, CNUM, CTOTAL, DEL } from './constants';
export const addCart = (adds) => ({
  type: ADD,
  payload: adds,
})

export const cNum = (adds) => ({type: CNUM, payload: adds})

export const cTotal = (lists) => ({type: CTOTAL, payload: lists})

export const del = (key) => ({type: DEL, payload: key})
