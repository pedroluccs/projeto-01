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
    removeItem(state, action: PayloadAction<{ title: string }>) {
      const index = state.items.findIndex(
        (item) => item.title === action.payload.title
      )
      if (index !== -1) {
        state.items.splice(index, 1)
        state.totalQuantity--
      }
    },
    clearCart(state) {
      // Resetar os itens e a quantidade total para os valores iniciais
      state.items = []
      state.totalQuantity = 0
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
