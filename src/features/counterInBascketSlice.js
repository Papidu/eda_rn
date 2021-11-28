import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemsInCart: [],
  itemsUniqInCard: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload)
      state.itemsUniqInCard = [...new Set(state.itemsInCart.map(x => x.name))]
      // console.log('i am here posle ', ' => ', state.itemsUniqInCard.length)
    },
    deleteItemInCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItemInCart, deleteItemInCart } = cartSlice.actions

export default cartSlice.reducer
