import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [{
        key: 1,
        latlng : {latitude:56.792137,longitude:60.620592},
        title : 'Родонитовая 10',
        description: 'Итерия Е-Да! Екатеринбург, Родонитовая 10. Открыто с 10:00 до 15:00',
      },
      {
        key: 2,
        latlng : {latitude:56.837872,longitude:60.659976},
        title : 'Комсомольская 70',
        description: 'Итерия Е-Да! Екатеринбург, Комсомольская 70. Открыто с 10:00 до 15:00',
      },
    ],
    selected_marker: {
        key: 1,
        latlng : {latitude:56.792137,longitude:60.620592},
        title : 'Родонитовая 10',
        description: 'Итерия Е-Да! Екатеринбург, Родонитовая 10. Открыто с 10:00 до 15:00',
      },

}

export const dataMapSlice = createSlice({
  name: 'dataMap',
  initialState,
  reducers: {
      changeSelectedMarker: (state, action) =>{
          state.selected_marker = action.payload 
      }
  },
})

// Action creators are generated for each case reducer function
export const { changeSelectedMarker } = dataMapSlice.actions

export default dataMapSlice.reducer