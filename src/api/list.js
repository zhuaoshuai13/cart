import request from '../utils/request'
import API from './constants'

export const findeList = () => request({
  url: API.LIST_API,
  method: 'GET',
})
