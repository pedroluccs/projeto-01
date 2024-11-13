import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FoodCardItem } from '../Food/Italian'

interface CartState {
  items: FoodCardItem[]
  totalQuantity: number
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<FoodCardItem>) {
      state.items.push(action.payload)
      state.totalQuantity++
    },
    removeItem(state, action: PayloadAction<{ nome: string }>) {
      const index = state.items.findIndex(
        (item) => item.nome === action.payload.nome
      )
      if (index !== -1) {
        state.items.splice(index, 1)
        state.totalQuantity--
      }
    },
    clearCart(state) {
      state.items = []
      state.totalQuantity = 0
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
