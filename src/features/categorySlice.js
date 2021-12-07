import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selected_category: '0',
    type_cat: '1',
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
      changeCategoryID: (state, action) =>{
          // console.log('in slice id ', action.payload)
          state.selected_category = action.payload 
      },
      changeCategory: (state, action) =>{
        // console.log('in slice cat ', state)
        state.type_cat = action.payload 
        // console.log('in slice cat ', state)
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeCategory, changeCategoryID } = categorySlice.actions

export default categorySlice.reducer