import { ADD } from './constants';
export const addCart = (adds) => {
  console.log('diaoyong')
  console.log(adds);
  return {
    type: ADD,
    payload: adds,
  }
}
