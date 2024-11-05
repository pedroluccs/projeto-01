import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './components/CartReducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export interface RootState {
  cart: {
    totalQuantity: number
    items: any[]
  }
}
