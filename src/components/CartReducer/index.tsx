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
      state.items.push(action.payload) // Adiciona o item ao carrinho
      state.totalQuantity++ // Incrementa a quantidade total
    },
    removeItem(state, action: PayloadAction<{ title: string }>) {
      const index = state.items.findIndex(
        (item) => item.title === action.payload.title
      )
      if (index !== -1) {
        state.items.splice(index, 1) // Remove o item do carrinho
        state.totalQuantity-- // Decrementa a quantidade total
      }
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
