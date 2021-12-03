import List from '../views/list'
import Cart from '../views/cart'
import Login from '../views/login'
import FrameLayout from '../layout/frame-layout'
const route = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/list',
    component: List,
  },
  {
    path: '/cart',
    component: Cart,
  },
]

export default route
